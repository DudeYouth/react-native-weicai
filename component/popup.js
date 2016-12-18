import React, { Component } from "react";
import { 
    View,
    Text ,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    Easing,
    Animated,
    TouchableOpacity,
} from "react-native";
export default class Popup extends Component {
    static self;
    constructor(props) {
        super(props);
        this.state={
            containerStatus:new Animated.Value(0),
            mainStatus:new Animated.Value(0),
            isShow:false,
            duration:props.duration||20,
            height:props.height||400,        
        }
        Popup.self=this;
    }
    componentDidUpdate() {
        this.changeStatus();
    }
    onSubmit(){
        this.props.callback&&this.props.callback();
        this.close();
    }
    static open(){
        Popup.self&&Popup.self.setState({
           isShow:true,
       }) 
    }
    close(){
       this.setState({
           isShow:false,
       })
    }
    changeStatus(){
        if(this.state.isShow===true){
            Animated.timing(this.state.containerStatus, {
                toValue: Dimensions.get("window").height, // 目标值
                duration: 0, // 动画时间
                easing: Easing.linear // 缓动函数
            }).start();
            Animated.timing(this.state.mainStatus, {
                toValue: this.state.height, // 目标值
                duration: this.state.duration, // 动画时间
                easing: Easing.linear // 缓动函数
            }).start();
        }else{
            let timer=setTimeout(()=>{
                Animated.timing(this.state.containerStatus, {
                    toValue: 0, // 目标值
                    duration: 0, // 动画时间
                    easing: Easing.linear // 缓动函数
                }).start();
                clearTimeout(timer);
                timer=null;
            },this.state.duration);
            Animated.timing(this.state.mainStatus, {
                toValue: 0, // 目标值 
                duration: this.state.duration, // 动画时间
                easing: Easing.linear // 缓动函数
            }).start();            
        }
    }
    render(){
        
        return <Animated.View style={[styles.popupContainer,{height:this.state.containerStatus}]}>
                <Animated.View style={[styles.popupMain,{height:this.state.mainStatus}]}>
                    <ScrollView style={{paddingLeft:15,paddingRight:15}}>
                        {this.props.children}
                        
                    </ScrollView>
                    <TouchableOpacity onPress={()=>{
                        this.close();
                    }} style={{position:"absolute",top:10,right:10}}><Image style={{width: 30, height: 30, resizeMode: Image.resizeMode.contain,}} source={{uri:"data:image/png;base64,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"}} /></TouchableOpacity>
    <TouchableOpacity style={styles.popupButton}><Text style={styles.buttonText} onPress={this.onSubmit.bind(this)}>{this.props.buttonText||"确定"}</Text></TouchableOpacity>
                </Animated.View>
               
        </Animated.View>
    }
}

var styles=StyleSheet.create({
    popupContainer:{
        position:"absolute",
        top:0,
        left:0,
        backgroundColor:"rgba(0,0,0,0.6)",
        width:Dimensions.get("window").width,
        height:0,
        overflow:"hidden",
    },
    popupMain:{
        position:"absolute",
        width:Dimensions.get("window").width,
        bottom:0,
        backgroundColor:"#fff",
    },
    popupButton:{
        backgroundColor:"#FF6633",
        position:"absolute",
        bottom:20,
        width:Dimensions.get("window").width,
        height:50,
        justifyContent:"center",
    },
    buttonText:{
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign:"center",
        color:"#fff",
    }
})