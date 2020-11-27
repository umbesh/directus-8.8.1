<?php

namespace Directus\Database\Schema\Object;

use Directus\Util\ArrayUtils;

class FieldRelationship extends AbstractObject
{
    const ONE_TO_MANY = 'O2M';
    const MANY_TO_ONE = 'M2O';

    /**
     * The field this relationship belongs to
     *
     * @var Field
     */
    protected $fromField;

    /**
     * FieldRelationship constructor.
     *
     * @param Field $fromField - Parent field
     * @param array $attributes
     */
    public function __construct(Field $fromField, array $attributes)
    {
        $this->fromField = $fromField;

        parent::__construct($attributes);

        $this->attributes->set('type', $this->guessType());
    }

    /**
     * Gets the parent collection
     *
     * @return string
     */
    public function getCollectionMany()
    {
        return $this->attributes->get('collection_many');
    }

    /**
     * Gets the parent field
     *
     * @return string
     */
    public function getFieldMany()
    {
        return $this->attributes->get('field_many');
    }

    public function getCollectionOne()
    {
        return $this->attributes->get('collection_one');
    }

    public function getFieldOne()
    {
        return $this->attributes->get('field_one');
    }

    /**
     * Checks whether the relationship has a valid type
     *
     * @return bool
     */
    public function isValid()
    {
        return $this->getType() !== null;
    }

    /**
     * Gets the relationship type
     *
     * @return string|null
     */
    public function getType()
    {
        return $this->attributes->get('type');
    }

    /**
     * Checks whether the relatiopship is MANY TO ONE
     *
     * @return bool
     */
    public function isManyToOne()
    {
        return $this->getType() === static::MANY_TO_ONE;
    }

    /**
     * Checks whether the relatiopship is ONE TO MANY
     *
     * @return bool
     */
    public function isOneToMany()
    {
        return $this->getType() === static::ONE_TO_MANY;
    }

    /**
     * Guess the data type
     *
     * @return null|string
     */
    protected function guessType()
    {
        $fieldName = $this->fromField->getName();
        $isAlias = $this->fromField->isAlias();
        $type = null;

        if (!$this->fromField) {
            $type = null;
        } else if (
            !$isAlias                   &&
            $this->getCollectionOne()   !== null &&
            $this->getFieldMany()       === $fieldName &&
            $this->getCollectionMany()  !== null
        ) {
            $type = static::MANY_TO_ONE;
        } else if (
            $isAlias                    &&
            $this->getCollectionMany()  !== null &&
            $this->getFieldOne()        === $fieldName &&
            $this->getCollectionOne()   !== null
        ) {
            $type = static::ONE_TO_MANY;
        }

        return $type;
    }

    /**
     * Change the direction of the relationship
     *
     * @param array $attributes
     *
     * @return array
     */
    protected function swapRelationshipAttributes(array $attributes)
    {
        $newAttributes = [
            'collection_many' => ArrayUtils::get($attributes, 'collection_one'),
            'field_many' => ArrayUtils::get($attributes, 'field_one'),
            'collection_one' => ArrayUtils::get($attributes, 'collection_many'),
            'field_one' => ArrayUtils::get($attributes, 'field_many'),
        ];

        return $newAttributes;
    }
}
