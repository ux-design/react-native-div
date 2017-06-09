# react-native-div
This is a wrapper of the View element that speeds up the process of creating graphic layouts for your React Native app; it's easy to configure and it allows you to implement animations either predefined either custom.

### Options

prop | typeof | value | description
------ | ---- | ------- | ----
w | `string`,`number` | "200",200 | shortcut to define the Width , if the `perc` prop is true the value becomes a percentage based on the parent
h | `string`,`number` | "100",100 | shortcut to define the Height , if the `perc` prop is true the value becomes a percentage based on the parent
perc | `boolean` | true,false | defines the `Width` and the `Height` as percentage of the parent element 
align | `string` | left,center,right | alignment in horizontal mode
vAlign | `string` | top,center,bottom | alignment in vertical mode
bgColor | `string` | "red","#ffcc00",.. | background color with the same values of the normal styling
column | `boolean` | true,false | align the content vertically
_onPress | `function` | ()=>{} | call a function on touch event
animate | `string` | view the list | animate the element with a predefined animation
animateCustom | `array` | [ { x : 100 , y : 100 , t : 1 } ] | animate the element with a custom animation
