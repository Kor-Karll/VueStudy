<template>
    <div>
        <div style="float:left;width:50%;">
            <input type="checkbox" v-model="isCouponSale" :checked="isCouponSale">쿠폰 할인<input v-model="couponSale" type="number" :disabled="!isCouponSale"><br>
            <input type="checkbox" v-model="isNormalSale" :checked="isNormalSale">일반 할인<input v-model="normalSale" type="number" :disabled="!isNormalSale"><br>
            <input type="checkbox" v-model="isEventSale" :checked="isEventSale">이벤트 할인<input v-model="eventSale" type="number" :disabled="!isEventSale"><br>
            <input type="checkbox" v-model="isMemberSale" :checked="isMemberSale">직원 할인<input v-model="memberSale" type="number" :disabled="!isMemberSale"><br>
            원가 <input type="number" v-model="price">
        </div>
        <div style="float:left;width:50%;">
            <li v-if="isCouponSale">쿠폰 적용가 {{couponSale}}원</li>
            <li v-if="isNormalSale">일반 할인 {{normalSale}}%</li>
            <li v-if="isEventSale">이벤트 할인 {{eventSale}}%</li>
            <li v-if="isMemberSale">직원 할인 {{memberSale}}%</li>
            {{calcTotalPrice}}원
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'computed-component',
    computed: {
        calcTotalPrice: function() {
            var price = parseInt(this.price);
            var couponSale = parseInt(this.couponSale);
            
            var couponSalePrice = (this.isCouponSale)? couponSale : 0;
            var normalSalePrice = this.discountPriceForPercent(this.normalSale, this.isNormalSale)
            var eventSalePrice = this.discountPriceForPercent(this.eventSale, this.isEventSale)
            var memberSalePrice = this.discountPriceForPercent(this.memberSale, this.isMemberSale)

            return price -couponSalePrice - normalSalePrice -eventSalePrice -memberSalePrice
        }
    },
    methods: {
        discountPriceForPercent: function(percent, isDiscount) {
            if (!isDiscount) return 0
            var price = parseInt(this.price)
            var percent = parseInt(percent)

            return price * percent / 100
        }
    },
    data: function() {
        return {
            price: 0,
            isCouponSale: false,
            couponSale: 0,
            isNormalSale: false,
            normalSale: 0,
            isEventSale: false,
            eventSale: 0,
            isMemberSale: false,
            memberSale: 0,
        }
    }
}
</script>