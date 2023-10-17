<?php

namespace App\Config;

class ps_constant
{
    const createPermission = 1;
    const readPermission = 2;
    const updatePermission = 3;
    const deletePermission = 4;
    const loginUserIdParaFromApi = "login_user_id";
    const deviceTokenKeyFromApi = "header-token";
    const supportedApiVersionCount = 3;
    const latestApiVersion = 1.0;

    const envatoApiUri = "https://api.envato.com/";
    const envatoApiVersion = "v3";
    const freeTrialTotalDay = 60;


    const flutterNotificationClick = "FLUTTER_NOTIFICATION_CLICK";
    const broadcast = "broadcast";
    const feBroadcast = "fe_broadcast";

    // for one-click-auto update
    // const builderDomain = "https://www.products.panacea-soft.co/psx-builder-dev/";

    const builderDomain = "https://www.psx-builder.panacea-soft.com/";

    // const builderDomain = "http://127.0.0.1:4000/";
    const builderApiVersion = "v1.0";
    const base_url = ps_constant::builderDomain."api/".ps_constant::builderApiVersion;
    const searchDomain = "https://www.products.panacea-soft.co/";
    const searchSubFolder = "psx-mpc-demo";
    const searchSubFolderWithSlash1 = "/psx-mpc-demo";
    const searchSubFolderWithSlash2 = "psx-mpc-demo/";
    const searchApiToken = "zUMi0HNjAtnREMj3weG7XEv6ogEVovsf6eUFgOp4";

}
