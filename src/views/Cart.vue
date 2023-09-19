<template>
    <div class="cart-container">
      <div class="ps-page--simple">
        <div class="ps-breadcrumb">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/shop">Shop</router-link>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
        <div class="ps-section--shopping ps-shopping-cart" >
          <div class="text-center" v-if="cart.length < 1">
            <div>
              <i class="fa fa-shopping-cart fa-w-18 fa-7x"></i>
            </div>
            <div class="mb-4">Your Cart is empty</div>
  
            <router-link class="ps-btn" to="/">
              <i class="icon-arrow-left"></i> Back to Shop
            </router-link>
          </div>
  
          <div class="container" v-if="cart.length > 0" >
            <div class="ps-section__header">
              <h1>Shopping Cart</h1>
            </div>
            <div class="container container-block" style="">
              <div class="cart-reminder ">
              <p style="color: #0E153D; font-weight: 500;" >
                Buying from same store saves you more on delivery costs!
              </p>
            </div>
            </div>
            <div class="ps-section__content">
              <div class="p-4 container">
                <div class="row">
                  <div class="col-sm-8 " style="display: flex; flex-direction: column; padding-right: 0;">
                    <div class="chart-actions" style="box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);">
                      <div class="actions-flex">
                        <div class="flex-content py-2 pb-2">
                          <span class="action-text">Select All</span>
                          <b-form-group>
                            <b-form-checkbox-group id="checkbox-group-1" v-model="selected" name="flavour-1">
                              <b-form-checkbox value="all"></b-form-checkbox>
                            </b-form-checkbox-group>
                          </b-form-group>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2" style=" margin-bottom: 8px;">
                      <div class="accordion " role="tablist" v-for="(item, index) in groupCart" :key="item[0].vendor.store_name" style="background: #00AFEF; margin-bottom: 8px; border: none;">
                        <b-card no-body style="background-color: none; ">
                          <b-card-header header-tag="header" class="p-1" role="tab" style="background-color: #00AFEF; ">
                            <div block  class="accordrion-header" v-b-toggle="`accordion-${index}`" @click="toggleIconRotation(index)">
                              <div class="header-left">
                                <i class="fa fa-angle-down" :class="{ 'rotate': isIconRotated[index] }"></i>
                                <div><i class="icon-store"></i> {{ item[0].vendor.store_name }}</div>
                              </div>
                              <div class="header-right ps-product__actions">
                                <a style="cursor: pointer; margin-top: 2px;">
                                  <i class="fa fa-heart" style="color: #ffffff;"></i>
                                </a>
                                <div >
                                  <b-form-checkbox-group id="checkbox-group-1" v-model="selected" name="flavour-1">
                                    <b-form-checkbox value="all"></b-form-checkbox>
                                  </b-form-checkbox-group>
                                </div>
                              </div>
                            </div>
                          </b-card-header>
                          <b-collapse :id="`accordion-${index}`"  :accordion="`accordion-${index}`"
                            role="tabpanel" class="accordion-body">
                            <b-card-body>
                              <div  v-for="product in item" :key="product.id">    
                               <div class="cart-card" style="margin-bottom: 1rem; padding: 0px; margin-top: .5rem !important">
                                <div class="order-img">
                                  <router-link v-bind:to="'/' + product.slug">
                                    <img v-bind:src="getUrl(product.image)" v-bind:alt="item.title" class="img-order" />
                                  </router-link>
                                </div>
                                <div>
                                  <div class="name-btn">
                                  <div>
                                    <h5 class="item-name" >
                                    <router-link v-bind:to="'/' + product.slug" >{{ product.title}}</router-link>
                                    </h5>
                                </div>
                                  <div class="btn-container">
                                  <div class="btns ps-product__actions">
                                      <a  
                                      @click="addToWishlist(product)"
                                      v-bind:class="{
                                       'in-wishlist': isProductInWishlist(product.id),
                                       }" style="cursor: pointer; margin-top: 4px;">
                                        <i class="fa fa-heart" style="color: #ffffff; "></i>
                                      </a>
                                    <div class="py-4 mt-2">
                                      <b-form-checkbox-group id="checkbox-group-1" v-model="selected" name="flavour-1">
                                        <b-form-checkbox value="all"></b-form-checkbox>
                                      </b-form-checkbox-group>
                                  </div>
                                 </div>
                                  </div>
                                  </div>
                                  
                                  <p style="color: #787878; font-size: 16px; margin-bottom: 8px !important;">Quantity: {{ product.quantity }}</p>
                                  <p style="color: #787878; font-size: 16px; margin-bottom: 8px !important;">City:  {{ product.gigl_station.name }}</p>
                                  <div class="price-quantity" >
                                    <h4 class="order-price" style="font-family: roboto; font-size: 20px; font-weight: 600; display: flex; align-self: center; height: 10px;">
                                      {{ formatCurrency(product.price) }}
                                    </h4>
                                    <div class="form-group--number" >
                                      <button class="up" @click.prevent="incrementQuantity(product)">
                                        <i class="fa fa-plus" style="color: #8c8c8c; font-size: 12px;"></i>
                                      </button>
                                      <button class="down" @click.prevent="decrementQuantity(product)">
                                        <i class="fa fa-minus" style="color: #8c8c8c; font-size: 12px;"></i>
                                      </button>
                                      <input class="form-control" type="text" placeholder="1"  :value="product.quantity"  />
                                    </div>
                                  </div>
                                </div>
                              </div> 
                              <hr />
                            </div>
                            </b-card-body>
                          </b-collapse>
                        </b-card>
                      </div>
                  </div>
  
  
                  </div>
                  <div class="col-sm-4">
                    <div class="cart-summary">
                      <h4>Summary</h4>
                      <div class="mt-2">
                        <div class="sum-flex">
                          <p>Subtotal</p>
                          <p class="total-currency-text">
                            {{ formatCurrency(cartTotal) }}
                          </p>
                        </div>
                        <div class="sum-flex ">
                          <p>Store Discount</p>
                          <p class="total-currency-text">
                            {{ formatCurrency(discountTotal) }}
                          </p>
                        </div>
                        <span class="sum-hr "></span>
                        <div class="sum-flex mt-4 ">
                          <p>Total</p>
                          <h4 style="font-family: roboto; color: #00AFF0; font-weight: 500;">{{ formatCurrency(cartTotal - discountTotal) }}</h4>
                        </div>
  
                        <div>
                          <router-link to="/checkout">
                            <button type="button"  class="checkout-btn btn ps-btn">CHECKOUT</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
              <div class="ps-section__cart-actions">
                <router-link class="ps-btn" to="/shop">
                  <i class="icon-arrow-left"></i> Back to Shop
                </router-link>
                <a class="ps-btn ps-btn--outline" href="/cart">
                  <i class="icon-sync"></i>Update Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    name: "Cart",
    data() {
      return {
        coupon: this.couponCode,
        selected: "",
        visible: true,
        isIconRotated: {},
      };
    },
    computed: {
      ...mapGetters("product", [
        "cart",
        "formatCurrency",
        "cartTotal",
        "discountTotal",
        "couponCode",
        "isProductInWishlist",
      ]),
      // this function groups items from the same store into one array
      groupCart() {
        const groups = this.cart.reduce((groups, item) => {
          const group = groups[item.vendor.store_name] || [];
          group.push(item);
          groups[item.vendor.store_name] = group;
          return groups;
        }, {});
        return groups;
  
      },
    //   isCheckoutDisabled() {
    //   return this.selected.length === 0 || !this.selected.includes("all");
    // },
      
    },
    methods: {
      ...mapActions("product", [
        "removeCart",
        "updateQuantity",
        "redeemCoupon",
        "removeCoupon",
        "removeAllCart",
        "addToWishlist",
      ]),
      toggleIconRotation(index) {
        // this.isIconRotated = !this.isIconRotated;
        this.$set(this.isIconRotated, index, !this.isIconRotated[index]);
      },
      incrementQuantity(item) {
        const newQuantity = ++item.quantity;
        this.changeQuantity(item.id, newQuantity);
        window.fbq('track', 'AddToCart');
  
      },
      decrementQuantity(item) {
        const newQuantity = item.quantity - 1;
        if (newQuantity >= 1) {
          item.quantity = newQuantity;
          this.changeQuantity(item.id, newQuantity);
          window.fbq('track', 'AddToCart');
        }
        return;
      },
      changeQuantity(id, quantity) {
        this.updateQuantity({ id, quantity });
        window.fbq('track', 'AddToCart');
      },
    },
  
    mounted() {
      this.coupon = this.couponCode;
    
    },
  
    watch: {
      couponCode: function (val) {
        this.coupon = val;
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  .cart-container{
    font-family: 'Roboto', sans-serif;
  
  }
  .container-block{
     width: 100%;
     margin-bottom: -8px; 
     margin-top: -28px;
  }
  .rotate {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }
  .fa-7x {
    font-size: 7em;
  }
  
  .fa.fa-heart{
     color: transparent;
     -webkit-text-stroke-width: 1px;
     -webkit-text-stroke-color:#00AFF0;
  }
  .item-name a{
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
  }
  .input-group-append {
    margin-left: -30px;
  }
  
  .chart-actions {
    height: 40px;
    width: 100%;
    background: #F6F6F6;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  }
  
  .actions-flex {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  
  .flex-content {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 1rem;
  }
  
  .action-text {
    font-size: 16px;
    color: #00AFEF;
    margin-top: 3px !important;
  }
  
  .accordrion-header {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background: #00AFEF;
    border: none;
    color: #fff;
    height: 40px;
  }
  
  .accordrion-header:hover {
    color: #fff;
    background: #00AFEF;
  }
  
  .header-left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  
  .header-right {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    margin-right: -17px !important;
  }
  .accordion-body {
    background: #F6F6F6;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
    width: 100% !important;
  
  }
  .flex-text {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 20px;
    margin-right: -12px !important;
  }
  .price-quantity {
    display: flex;
    align-items: center;
    gap: .5rem;
    /* background-color: green; */
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch
  }
  .hr-custom {
    height: 1px;
    /* background: red; */
    width: 100%;
  }
  .img-icon{
    cursor: pointer;
  
  }
  .cart-reminder{
    background: #dbf5ff;
    min-height: 36px;
    width:91%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .cart-reminder p{
    margin-bottom: 0; 
  }
  .btn-container{
   position: absolute;
    right: 9px;
    /* top: 30px; */
  }
  .name-btn{
    max-width: 700px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ps-section__header{
    margin-bottom: -20px;
  }
  .hr-block{
    background-color: #fff; 
    height: 1px; 
    border: none;
  }
  .total-currency-text{
    color: #00AFF0 !important;
    font-size: 16px;
    font-weight: 500;
  }
  @media only screen and (max-width: 1200px){
  
    .cart-reminder{
      width: 99%
    }
  }
  @media only screen and (max-width: 990px){
  
    .cart-reminder{
      width: 110%
    }
  }
  @media only screen and (max-width: 767px){
  
  .cart-reminder{
    width: 130%
  }
  }
  @media only screen and (max-width: 680px){
    .btns{
      flex-wrap: wrap;
    }
    .btn-container{
      right: 3px;
      transform: translateY(-139px) !important;
    }
  }
  @media only screen and (max-width: 567px){
  
  .cart-reminder{
    width: 96%
  }
  }
  </style>