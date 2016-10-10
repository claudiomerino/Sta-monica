/**
 * Number.prototype.format(n, x)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

$( document ).ready( function () {

	var $calcPayments = $( '#calcPayments' )

	$calcPayments.on( 'click', function ( e ) {

		e.preventDefault();
		e.stopPropagation();

		var $land = $( '#land' ).val()
		,	$foot = $( '#foot' ).val()
		,	$term = $( '#term' ).val()
		,	result = $land - $foot
		,	$resultPayment = $( '#resultPayment' )
		,	$payment
		,	fee

		if( $term == 12 ) {
			fee = 0.09398;
			paymentFn( fee );
		}
		else if( $term == 24 ) {
			fee = 0.052274;
			paymentFn( fee );
		}
		else if( $term == 36 ) {
			fee = 0.038606;
			paymentFn( fee );
		}
		else if( $term == 48 ) {
			fee = 0.031942;
			paymentFn( fee );
		}
		else if( $term == 60 ) {
			fee = 0.028076;
			paymentFn( fee );
		}

		function paymentFn( fee ) {
			$payment = result * fee;
			$payment = $payment.format(2);
			$resultPayment.html( '$ ' + $payment );
			$calcPayments.val( 'Volver a simular' );
		}

	})




})