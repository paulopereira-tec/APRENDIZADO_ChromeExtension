var  withoutLeftSidebar = false;

var referencia = document.referrer;
if(referencia.indexOf('source=wppExt') > 0){
    $('body').append(`
        <style>
        .k1feT{
            display: none !important;
        }
        </style>
    `);
};