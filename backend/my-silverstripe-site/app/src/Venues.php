<?php

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\File;

class Venue extends DataObject
{
    private static $db = [
        'Title' => 'Varchar(255)',
        'Address' => 'Varchar(255)',
        'Capacity' => 'Int',
        'ShortDescription' => 'Text',
    ];

    private static $has_one = [
        'VenueImage' => File::class,
    ];

    private static $summary_fields = [
        'Title',
        'Address',
        'Capacity',
        'ShortDescription',
    ];

    private static $searchable_fields = [
        'Title',
        'Address',
    ];

    private static $singular_name = 'Venue';
    private static $plural_name = 'Venues';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab('Root.Main', TextField::create('Title', 'Title'));
        $fields->addFieldToTab('Root.Main', TextField::create('Address', 'Address'));
        $fields->addFieldToTab('Root.Main', NumericField::create('Capacity', 'Capacity'));
        $fields->addFieldToTab('Root.Main', TextareaField::create('ShortDescription', 'Short Description'));

        $fields->addFieldToTab(
            'Root.Main',
            UploadField::create('VenueImage', 'Upload Venue Image')
        );

        return $fields;
    }
}
