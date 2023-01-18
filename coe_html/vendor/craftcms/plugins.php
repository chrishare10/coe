<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'mmikkel/retcon' => 
  array (
    'class' => 'mmikkel\\retcon\\Retcon',
    'basePath' => $vendorDir . '/mmikkel/retcon/src',
    'handle' => 'retcon',
    'aliases' => 
    array (
      '@mmikkel/retcon' => $vendorDir . '/mmikkel/retcon/src',
    ),
    'name' => 'Retcon',
    'version' => '2.6.0',
    'schemaVersion' => '1.0.0',
    'description' => 'Powerful Twig filters for mutating and querying HTML',
    'developer' => 'Mats Mikkel Rummelhoff',
    'developerUrl' => 'https://vaersaagod.no',
    'documentationUrl' => 'https://github.com/mmikkel/Retcon-Craft/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/mmikkel/Retcon-Craft/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
    ),
  ),
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '3.0.3',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'verbb/field-manager' => 
  array (
    'class' => 'verbb\\fieldmanager\\FieldManager',
    'basePath' => $vendorDir . '/verbb/field-manager/src',
    'handle' => 'field-manager',
    'aliases' => 
    array (
      '@verbb/fieldmanager' => $vendorDir . '/verbb/field-manager/src',
    ),
    'name' => 'Field Manager',
    'version' => '3.0.5',
    'description' => 'Manage your fields and field groups with ease with simple field or group cloning and quicker overall management.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/field-manager',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/field-manager/craft-4/CHANGELOG.md',
  ),
  'putyourlightson/craft-sprig' => 
  array (
    'class' => 'putyourlightson\\sprig\\plugin\\Sprig',
    'basePath' => $vendorDir . '/putyourlightson/craft-sprig/src',
    'handle' => 'sprig',
    'aliases' => 
    array (
      '@putyourlightson/sprig/plugin' => $vendorDir . '/putyourlightson/craft-sprig/src',
    ),
    'name' => 'Sprig',
    'version' => '2.4.0',
    'description' => 'A reactive Twig component framework for Craft.',
    'developer' => 'PutYourLightsOn',
    'developerUrl' => 'https://putyourlightson.com/',
    'documentationUrl' => 'https://putyourlightson.com/plugins/sprig',
    'changelogUrl' => 'https://raw.githubusercontent.com/putyourlightson/craft-sprig/v2/CHANGELOG.md',
  ),
  'solspace/craft-express-forms' => 
  array (
    'class' => 'Solspace\\ExpressForms\\ExpressForms',
    'basePath' => $vendorDir . '/solspace/craft-express-forms/packages/plugin/src',
    'handle' => 'express-forms',
    'aliases' => 
    array (
      '@Solspace/ExpressForms' => $vendorDir . '/solspace/craft-express-forms/packages/plugin/src',
      '@Solspace/Tests/ExpressForms' => $vendorDir . '/solspace/craft-express-forms/packages/plugin/tests',
    ),
    'name' => 'Express Forms',
    'version' => '2.0.1',
    'schemaVersion' => '1.0.2',
    'description' => 'Intuitive and lightweight form builder that gets the job done but doesn\'t get in your way.',
    'developer' => 'Solspace',
    'developerUrl' => 'https://docs.solspace.com/',
    'developerEmail' => 'support@solspace.com',
    'documentationUrl' => 'https://docs.solspace.com/craft/express-forms/v2/',
    'changelogUrl' => 'https://raw.githubusercontent.com/solspace/craft-express-forms/master/CHANGELOG.md',
  ),
  'robuust/craft-mailjet' => 
  array (
    'class' => 'robuust\\mailjet\\Plugin',
    'basePath' => $vendorDir . '/robuust/craft-mailjet/src',
    'handle' => 'mailjet-adapter',
    'aliases' => 
    array (
      '@robuust/mailjet' => $vendorDir . '/robuust/craft-mailjet/src',
    ),
    'name' => 'Mailjet Adapter',
    'version' => '1.0.2',
    'description' => 'Mailjet integration for Craft CMS',
    'developer' => 'Robuust',
    'developerUrl' => 'https://robuust.digital/',
    'developerEmail' => 'support@robuust.digital',
    'documentationUrl' => 'https://github.com/robuust/craft-mailjet/blob/v1/README.md',
  ),
);
