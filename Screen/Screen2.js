import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Screen1 from './Screen1';


export default function Screen2() {
    const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
    var [title_color, setTitle_color] = useState("");
    var [color, setColor] = useState("");
    var [provide, setProvide] = useState("");
    var [provider, setProvider] = useState("");
    var [cost, setCost] = useState("");
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.35, flexDirection: 'row' }}>
                <Image style={{ width: 119, height: 155, marginTop: 40, marginLeft: 10, alignSelf: 'flex-start' }} source={require('../assets/xanh.png')} />
                <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                    <Text style={{ marginTop: 45, fontSize: 18 }}>{title}</Text>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{title_color}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{color}</Text>
                    </View>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{provide}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{provider}</Text>
                    </View>
                    <Text style={{ marginTop: 9, fontSize: 18, fontWeight: 'bold' }}>{cost}</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#dfe3e3' }}>
                <Text style={{ fontSize: 20, marginLeft: 17, marginTop: 10 }}>Chọn 1 màu bên dưới:</Text>
                <TouchableOpacity onPressIn={onPress1} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'silver', marginTop: 10 }}></TouchableOpacity>
                <TouchableOpacity onPressIn={onPress2} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'red', marginTop: 10 }}></TouchableOpacity>
                <TouchableOpacity onPressIn={onPress3} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'black', marginTop: 10 }}></TouchableOpacity>
                <TouchableOpacity onPressIn={onPress4} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'blue', marginTop: 10 }}></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 50, backgroundColor: '#1789ff' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    function onPress1() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Bạc"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ")
        );
    }
    function onPress2() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Đỏ"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ")
        );
    }
    function onPress3() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Đen"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ")
        );
    }
    function onPress4() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Xanh"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ")
        );
    }
}
