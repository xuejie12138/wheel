<template>
    <div class="box">
         <header class="box_flxed">
            可向多个商家咨询最低价，商家及时回复
        </header>
         <div class="section">
            <div class="hover">
                <div class="img">
                    
                </div>
                <div class="hover_dls">
                    <h1></h1>
                    <p>dd</p>
                </div>
            </div>
            <div class="from">
                <p>个人信息</p>
                <ul class="from_information">
                    <li>
                        <p>姓名</p>
                        <div>
                            <input type="text" placeholder="输入你的真实中文姓名" />
                        </div>
                    </li>
                    <li>
                        <p>手机</p>
                        <div>
                            <input type="text" placeholder="输入你的真实手机号码" />
                        </div>
                    </li>
                    <li>
                        <p>城市</p>
                        <div>
                            <p>北京 〉</p>
                        </div>
                    </li>
                    <li>
                        <button>询最低价</button>
                    </li>
                </ul>
            </div>
            <div class="hover_list">
                <p>选择报价经销商</p>
                <ul class="hover_city">
                    <li>
                        <div class="stort">
                            <h1>value.dealerShortName</h1>
                            <p>value.address</p>
                        </div>
                        <div>
                            <p>value.promotePrice万</p>
                            <p>售value.saleRange</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <CitySelect :class="0 ? 'active' : '' "></CitySelect>
    </div>
</template>
<script>
    import CitySelect from './common/city'
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        components: {
            CitySelect: CitySelect
        },
        computed: {
            // ...mapState({
            //     list: state => state.Quotations.list,
            //     details: state => state.Quotations.details,
            //     isShowCity: state => state.Quotations.isShowCity,
            //     currentCity: state => state.Quotations.currentCity
            // })
        },
        methods: {
            // ...mapActions({
            //     official: 'Quotations/official'
            // }),
            // ...mapMutations({
            //     officialList: 'Quotations/officialList',
            //     showCity : 'Quotations/showCity'
            // })

        },
        mounted() {
            // this.official(this.$route.query.id)
        },
        updated() {
        }
    }
</script>
<style scoped lang="scss">
    .box {
        position:absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background:#f4f4f4;
        font-size: .28rem;
    }
    li {
        text-decoration: none;
    }
    .box_flxed {
        position: fixed;
        top: 0;
        height: .6rem;
        line-height: .6rem;
        font-size: .3rem;
        width: 100%;
        background: #79cd92;
        text-align: center;
        z-index: 99;
        color: #fff;
    }

    .hover {
        display: flex;
        background-color: #fff;
        padding: .2rem 0;
        margin-top: .7rem;
    }

    .img {
        width: 30%;
        text-align: center;
    }

    .img img {
        width: 95%;
    }

    .hover_dls {
        margin-left: .2rem;
    }

    .hover_dls h1 {
        font-size: .4rem;
        font-weight: 400;
        margin-top: .3rem;
    }

    .hover_dls p {
        font-size: .36rem;
    }

    .from>p {
        font-size: .24rem;
        padding: .2rem 0;
        padding-left: .2rem;
    }

    .from_information {
        background-color: #fff;
        padding: 0 .2rem;
        box-sizing: border-box;
    }

    .from_information li {
        display:flex;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px solid #eee;
        width: 100%;
    }

    .from_information li p {
       margin-right: .2rem;
    }

    .from_information li div {
       flex: 1;
    }

    .from_information li div input {
        width: 100%;
        text-align: right;
        height: 100%;
        border-width: 0;
        outline:none;
    }
    .from_information li div p{
        text-align: right;
    }

    .from_information li:last-child {
        height: .7rem;
        padding-top: .3rem;
        padding-bottom: .28rem;
        button{
            width: 90%;
            margin-left: 5%;
            background-color: #3aacff;
            border-radius: .07rem;
            height: .7rem;
            outline: none;
            border: none;
            color: #fff;
            font-size: .3rem;
        }
    }

    .hover_list>p {
        font-size: .24rem;
        padding: .2rem 0;
        padding-left: .2rem;

    }



    .hover_city {
        background-color: #fff;
    }

    .hover_city li {
        border-bottom: 1px solid #ccc;
        padding: .15rem 0;
        display: flex;
    }

    .hover_city li div:first-child {
        width: 70%;
        padding-left: .2rem;
    }

    .hover_city li div:last-child {
        width: 30%;
        text-align: right;
        padding-right: .15rem;
    }

    .hover_city li div:last-child p:first-child {
        color: red;
        line-height: .2rem;
    }
</style>