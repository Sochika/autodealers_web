import { PsObject } from "@templateCore/object/core/PsObject";
import CustomFieldDetail from "./CustomFieldDetail";
import CoreFieldDetail from "./CoreFieldDetail";


export default class CustomField extends PsObject<CustomField> {

    customList : CustomFieldDetail[] = [new CustomFieldDetail()];
    coreList : CoreFieldDetail[] = [new CoreFieldDetail()];
   

    init(
        customList : CustomFieldDetail[],
        coreList : CoreFieldDetail[]
     
    ) {
        this.customList = customList;
        this.coreList = coreList;

        return this;

    }

    getPrimaryKey(): string {
        return 'custom';
    }

    toMap(object: CustomField): any {
        const map = {};

        map['custom'] = new CustomFieldDetail().toMapList(object.customList);
        map['core'] = new CoreFieldDetail().toMapList(object.coreList);

        return map;
    }

    toMapList(objectList: CustomField[]): any[] {
        const mapList: any[] = [];
        for (let i = 0; i < objectList.length; i++) {
            if (objectList[i] != null) {
                mapList.push(this.toMap(objectList[i]));
            }
        }

        return mapList;
    }

    fromMap(obj: any) {
        return new CustomField().init(
            new CustomFieldDetail().fromMapList(obj.custom),
            new CoreFieldDetail().fromMapList(obj.core),

           
        );
    }

    fromMapList(objList: any[]): CustomField[] {
        const productList: CustomField[] = [];
        for (const obj of objList as Array<CustomField>) {
            if (obj != null) {
                productList.push(this.fromMap(obj));
            }
        }

        return productList;
    }
}
