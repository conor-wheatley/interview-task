<?php

use SilverStripe\PageController;
use SilverStripe\ORM\DataList;

class VenuesPageController extends PageController
{
    private static $allowed_actions = [
        'index',
    ];

    public function index()
    {
        return Venue::get();
    }
}
