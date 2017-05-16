import {
  Animated,
  Easing,
} from 'react-native'

//this.state.animatedStartValue = 0;

const _cycleAnimation = function( payload ) {
  Animated.sequence( payload.sequence ).start(() => {
    _cycleAnimation( payload );
  });
}

const _buildSingleAnimation = function ( payload ) {
  if ( typeof payload.x == 'number' ) return Animated.timing( this.state.animation[ 'translateX' ] , { useNativeDriver : true , toValue : payload.x , duration : payload.t } )  ;
  if ( typeof payload.y == 'number' ) return Animated.timing( this.state.animation[ 'translateY' ] , { useNativeDriver : true , toValue : payload.y , duration : payload.t } )  ;
  if ( typeof payload.s == 'number' ) return Animated.timing( this.state.animation[ 'scale' ] , { useNativeDriver : true , toValue : payload.s , duration : payload.t } )  ;
  if ( typeof payload.r == 'number' ) return Animated.timing( this.state.animation[ 'rotate' ] , { useNativeDriver : true , toValue : payload.r , duration : payload.t } )  ;
  if ( typeof payload.o == 'number' ) return Animated.timing( this.state.animation[ 'opacity' ] , { useNativeDriver : true , toValue : payload.o , duration : payload.t } )  ;
}

const _buildParallelAnimation = function( payload ) {
  var step = [] ;
  if ( typeof payload.x == 'number' ) step.push( _buildSingleAnimation.call( this , { x : payload.x , t : payload.t } ) ) ;
  if ( typeof payload.y == 'number' ) step.push( _buildSingleAnimation.call( this , { y : payload.y , t : payload.t } ) ) ;
  if ( typeof payload.s == 'number' ) step.push( _buildSingleAnimation.call( this , { s : payload.s , t : payload.t } ) ) ;
  if ( typeof payload.r == 'number' ) step.push( _buildSingleAnimation.call( this , { r : payload.r , t : payload.t } ) ) ;
  if ( typeof payload.o == 'number' ) step.push( _buildSingleAnimation.call( this , { o : payload.o , t : payload.t } ) ) ;
  return Animated.parallel( step );
}

const AnimatorCustom = function( payload ) {
  var me = this ;
  var steps = [] ;
  const { anim , callback } = payload ;

  var animation = {
    translateX : new Animated.Value( 0 )
  , translateY : new Animated.Value( 0 )
  , scale : new Animated.Value( 1 )
  , rotate : new Animated.Value( 0 )
  , opacity : new Animated.Value( 1 )
  } ;

  try { 
    this.setState( { animation : animation } ) ;
    var seqs = [] ;
    for( let x = 0 ; x < anim.length ; ++x ){
      seqs.push( _buildParallelAnimation.call( this , { y : anim[ x ].y , x : anim[ x ].x , t : anim[ x ].t , r : anim[ x ].r , s : anim[ x ].s , o : anim[ x ].o } ) )
    }
    Animated.sequence( seqs ).start() ;


  } catch( e ) {

  }

  if ( typeof callback == 'function' ) setTimeout( ()=>{ callback() ; } , 100 ) ;

}

export default AnimatorCustom 