<?php
/**
 * Express Forms for Craft.
 *
 * @author        Solspace, Inc.
 * @copyright     Copyright (c) 2019-2022, Solspace, Inc.
 *
 * @see           https://docs.solspace.com/craft/express-forms/v2/
 *
 * @license       https://docs.solspace.com/license-agreement/
 */

namespace Solspace\ExpressForms\utilities\CodePack\Components;

interface ComponentInterface
{
    /**
     * ComponentInterface constructor.
     */
    public function __construct(string $location);

    /**
     * Calls the installation of this component.
     *
     * @param string $prefix
     */
    public function install(string $prefix = null);
}
