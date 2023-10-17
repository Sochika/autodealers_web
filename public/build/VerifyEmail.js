import{d as _,r as e,o as a,c as r,b as o,w as n,F as h,H as g,L as v,g as y,a as i,n as b,h as k,p as d}from"./app.js";import{J as j}from"./AuthenticationCard.js";import{J as w}from"./AuthenticationCardLogo.js";import{J as L}from"./Button.js";import{_ as C}from"./plugin-vue_export-helper.js";const x=_({components:{Head:g,JetAuthenticationCard:j,JetAuthenticationCardLogo:w,JetButton:L,Link:v},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}}),J=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-feSuccess-600"},$={class:"mt-4 flex items-center justify-between"},B=d(" Resend Verification Email "),S=d("Log Out");function H(t,s,N,A,E,F){const c=e("Head"),m=e("jet-authentication-card-logo"),l=e("jet-button"),u=e("Link"),f=e("jet-authentication-card");return a(),r(h,null,[o(c,{title:t.$t("email_verification")},null,8,["title"]),o(f,null,{logo:n(()=>[o(m)]),default:n(()=>[J,t.verificationLinkSent?(a(),r("div",V," A new verification link has been sent to the email address you provided during registration. ")):y("",!0),i("form",{onSubmit:s[0]||(s[0]=k((...p)=>t.submit&&t.submit(...p),["prevent"]))},[i("div",$,[o(l,{class:b({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:n(()=>[B]),_:1},8,["class","disabled"]),o(u,{href:t.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover_text-gray-900"},{default:n(()=>[S]),_:1},8,["href"])])],32)]),_:1})],64)}var R=C(x,[["render",H]]);export{R as default};