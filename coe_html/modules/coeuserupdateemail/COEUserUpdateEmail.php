<?php

namespace coe;

use Craft;
use craft\services\Elements;
use craft\mail\Message;
use craft\web\View;
use yii\base\Event;
use yii\base\Module;

class COEUserUpdateEmail extends Module
{
    public function init()
    {
        // --------------------------------------------
        // NOTIFY ADMIN WHEN A USER UPDATES THEIR DETAILS
        // or if they are updated in the CP.
        // --------------------------------------------

        Event::on(
            Elements::class,
            Elements::EVENT_BEFORE_SAVE_ELEMENT,
            function (Event $e) {
                
                // bail out if it's not a User being saved
                if (!$e->element instanceof \craft\elements\User) { return; }

                // echo '<pre>'; print_r($e); echo '</pre>';

                // set variables for consumption by the template
                $templateVars = ['user' => $e->element];

                // if it's a CP request, we'll need to switch the template mode to 'TEMPLATE_MODE_SITE'
                // in order to access the site templates for rendering the email body
                $oldMode = Craft::$app->view->getTemplateMode();
                Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);

                // build the email body using a site template now that we're in the right template mode...
                $htmlBody = Craft::$app->view->renderTemplate('emails/member-details-updated', $templateVars);

                // ...then put it back again.
                Craft::$app->view->setTemplateMode($oldMode);

                // assemble and send...
                $message = (new Message())
                    ->setSubject('Alert: A customer updated their profile')
                    ->setHtmlBody($htmlBody)
                    ->setTo('chris.hare@supergiant.agency');

                Craft::$app->getMailer()->send($message);

                
            }
        );
        
        parent::init();
    }
}