import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.sendTags({
        'user_name': 'Bruno',
        'user_email': 'bruno.magalhaes@gmail.com'
    });
}

export function tagCartUpdate(itemsCount: string) {
    OneSignal.sendTag('cart_items_count', itemsCount);
}