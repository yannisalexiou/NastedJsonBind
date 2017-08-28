/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'NastedJsonBind.Application',

    name: 'NastedJsonBind',

    requires: [
        // This will automatically load all classes in the NastedJsonBind namespace
        // so that application classes do not need to require each other.
        'NastedJsonBind.*'
    ],

    // The name of the initial view to create.
    mainView: 'NastedJsonBind.view.main.Main'
});
