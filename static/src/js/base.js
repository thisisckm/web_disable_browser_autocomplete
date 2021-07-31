
odoo.define('chameleon.chameleon_base', function (require) {
    
    "use strict";
    var FieldChar = require('web.basic_fields').FieldChar;
    var FieldPhone = require('web.basic_fields').FieldPhone;
    var FieldEmail = require('web.basic_fields').FieldEmail;

    var FieldMany2One = require('web.relational_fields').FieldMany2One;

    FieldChar.include({
        _render: function() {
            this._super.apply(this, arguments);
            var sBrowser, sUsrAg = navigator.userAgent;

            if (sUsrAg.indexOf("Edg") > -1) {
                this.$el.attr('autocomplete', 'autocomplete_off_randString');
            }
        },
    });

    FieldPhone.include({
        _render: function() {
            this._super.apply(this, arguments);
            var sBrowser, sUsrAg = navigator.userAgent;

            if (sUsrAg.indexOf("Edg") > -1) {
                this.$el.attr('autocomplete', 'autocomplete_off_randString');
            }
        },
    });

    FieldEmail.include({
        _render: function() {
            this._super.apply(this, arguments);
            var sBrowser, sUsrAg = navigator.userAgent;

            if (sUsrAg.indexOf("Edg") > -1) {
                this.$el.attr('autocomplete', 'autocomplete_off_randString');
            }
        },
    });

    FieldMany2One.include({
        _render: function() {
            this._super.apply(this, arguments);
            var sBrowser, sUsrAg = navigator.userAgent;

            if (sUsrAg.indexOf("Edg") > -1) {
                this.$el.find('input').attr('autocomplete', 'autocomplete_off_randString');
            }
        },
    });
});