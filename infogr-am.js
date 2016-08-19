$.Redactor.prototype.infogram = function()
{
    return {
        getTemplate: function()
        {
            return String() +
              '<div class="modal-section" id="redactor-modal-advanced">' +
                '<section>' +
                    '<label>Enter info.gram code</label>' +
                    '<textarea id="mymodal-textarea" rows="6"></textarea>' +
                '</section>' +
                '<section>' +
                    '<button id="redactor-modal-button-action">Insert</button>' +
                    '<button id="redactor-modal-button-cancel">Cancel</button>' +
                '</section>' +
            '</div>';
        },
        init: function ()
        {
            var button = this.button.add('infogram', 'Infogr.am');
            this.button.addCallback(button, this.infogram.show);
        },
        show: function()
        {
            this.modal.addTemplate('infogram', this.infogram.getTemplate());
            this.modal.load('infogram', 'infogr.am', 400);

            var button = this.modal.getActionButton();
            button.on('click', this.infogram.insert);

            this.modal.show();

            $('#mymodal-textarea').focus();
        },
        insert: function()
        {
            var html = $('#mymodal-textarea').val();

            this.modal.close();
            this.insert.html(html);
        }
    };
};
