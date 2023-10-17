import './bootstrap';
import '../css/app.css';
import 'tailwindcss/tailwind.css';

import { i18nVue, getActiveLanguage } from 'laravel-vue-i18n'

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import VueLazyLoad from 'vue3-lazyload'
import { createPinia } from 'pinia'

// optionally import default styles
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

delete L.Icon.Default.prototype._getIconUrl
let sub_domain_url = '';
let clearSlash =  import.meta.env.VITE_APP_DIR;
let subFolder = clearSlash.replaceAll("\\", "");

if(import.meta.env.VITE_APP_ENV == "production"){

    if(subFolder != null && subFolder != '')
    {
        sub_domain_url = '/'  + import.meta.env.VITE_APP_DIR;
    }
    else
    {
        sub_domain_url = '';
    }


}else{
    sub_domain_url = '';
}

L.Icon.Default.mergeOptions({
    iconRetinaUrl: sub_domain_url+'/images/assets/marker-icon-2x.png',
    iconUrl: sub_domain_url+'/images/assets/marker-icon.png',
    shadowUrl: sub_domain_url+'/images/assets/marker-shadow.png'
});

library.add(fas, fab, far);

function withVite(pages, name) {
    // console.log(pages)
    for (const path in pages) {
        if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
            return typeof pages[path] === 'function'
                ? pages[path]()
                : pages[path]
        }
    }

    throw new Error('Page not found: ' + name)
}

const pinia = createPinia()

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => {
        let part = name.split("::")
        try {
            return withVite(import.meta.glob('./Pages/**/*.vue'), name)
        } catch (e) {
            return withVite(import.meta.glob('../../Modules/**/Resources/Pages/**/*.vue'), name)
        }
    },
    setup({ el, app, props, plugin }) {

        let sub_domain_url = '';
        let clearSlash =  import.meta.env.VITE_APP_DIR;
        let subFolder = clearSlash.replaceAll("\\", "");

        if(import.meta.env.VITE_APP_ENV == "production"){

            if(subFolder != null && subFolder != '')
            {
                sub_domain_url = '/'  + import.meta.env.VITE_APP_DIR;
            }
            else
            {
                sub_domain_url = '';
            }

        }else{
            sub_domain_url = '';
        }

        const base_url = sub_domain_url+"/api/v1.0"

        let activeLanguage = getActiveLanguage();
        if (localStorage.activeLanguage != null) {
            activeLanguage = localStorage.activeLanguage;
        } else {
            localStorage.activeLanguage = activeLanguage;
        }

        const apiToCall = base_url + '/mobile_language/langs?symbol=' + activeLanguage.toLowerCase();
        
        axios.get(apiToCall).then(res => {
            return createApp({ render: () => h(app, props) })
                .use(plugin)
                .use(store)
                .use(pinia)
                .use(VueLazyLoad, {})
                .use(i18nVue, {
                    lang: activeLanguage.toLowerCase(),
                    fallbackLang: 'en',
                    resolve: lang => {
                        return res.data;
                    },
                })
                .component('InertiaHead', Head)
                .component('InertiaLink', Link)
                .component('font-awesome-icon', FontAwesomeIcon)
                .component('Datepicker', Datepicker)
                .mixin({ methods: { route } })
                .mount(el)

        }).catch(error => {
            return createApp({ render: () => h(app, props) })
                .use(plugin)
                .use(store)
                .use(pinia)
                .use(VueLazyLoad, {})
                .use(i18nVue, {
                    lang: activeLanguage.toLowerCase(),
                    fallbackLang: 'en',
                    resolve: lang => {
                        const langs = import.meta.globEager('../../lang/en.json');
                        return langs[`../../lang/${lang}.json`].default;
                    }
                })
                .component('InertiaHead', Head)
                .component('InertiaLink', Link)
                .component('font-awesome-icon', FontAwesomeIcon)
                .component('Datepicker', Datepicker)
                .mixin({ methods: { route } })
                .mount(el)
        });
    },
})

InertiaProgress.init({ color: '#1267dc', showSpinner: true, includeCSS: true });
