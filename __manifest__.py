# -*- coding: utf-8 -*-
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': "Odoo - Disable Web Browser Autocomplete",

    'summary': "This module allows you to disable the autocomplete function of the web browser for Odoo input fields.",

    'description': """
This module allows you to disable the autocomplete function of the web browser for Odoo input fields.

Microsoft Egde Issue
====================
Recent changes in the Microsoft Edge, the attribute autocomplete with the value off is not working. Setting random string for autocomplete attribute is working great. So browser depended JavaScript code is needed at this time to fix this problem.

Credits
=======
Author Chandrakumar Murugesan, ThisIsCKM

Support
=======
For feedbacks and reporting of bugs, email at thisisckm@gmail.com.

    """,

    'license': 'AGPL-3',

    'author': "Chandrakumar Murugesan, ThisIsCKM",
    
    'website': "https://www.thisisckm.com/",

    'category': 'Hidden',
    'version': '14.0.1',
    'depends': ['web'],

    'data': [
        'views/base_assets.xml',
    ],
    'application': False,
}
