clickApply: function(e) {
    var startDate = $('#reportrange').data('daterangepicker').startDate._d;
    var endDate = $('#reportrange').data('daterangepicker').endDate._d;
    
    var start_date = new Date(startDate);
    var end_date=new Date(endDate);
    var start = moment(start_date).format("YYYY-MM-DD HH:mm:ss");
    var end = moment(end_date).format("YYYY-MM-DD HH:mm:ss");
    
    
    
    
    
    
    
    mapupdatecolor(start,end);
    
    
    
    
    this.hide();
    this.element.trigger('apply.daterangepicker', this);
    
}
