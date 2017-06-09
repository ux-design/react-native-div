# react-native-div
This is a wrapper of the View element that speeds up the process of creating graphic layouts for your React Native app; it's easy to configure and it allows you to implement animations either predefined either custom.

### Options

prop | typeof | value | description
------ | ---- | ------- | ----
w | `string`,`number` | "200",200 | shortcut to define the Width , if the `perc` prop is true the value becomes a percentage based on the parent
h | `string`,`number` | "100",100 | shortcut to define the Height , if the `perc` prop is true the value becomes a percentage based on the parent
perc | `boolean` | true,false | defines the `Width` and the `Height` as percentage of the parent element 
