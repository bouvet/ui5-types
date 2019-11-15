/// <reference path="./base/index.d.ts" />
/// <reference path="./core/index.d.ts" />
/// <reference path="./Device/index.d.ts" />
/// <reference path="./layout/index.d.ts" />
/// <reference path="./model/index.d.ts" />
/// <reference path="./unified/index.d.ts" />

declare namespace sap {
	namespace ui {
		interface Constructor<T extends sap.ui.base.Object = sap.ui.base.Object, U extends {} = {}> {
			new (): T;
			new (mSettings: U): T;
			new (sId: string): T;
			new (sId: string, mSettings: U): T;

			extend(sClassName: string): Constructor<T, U>
			extend(sClassName: string, oClassInfo: object): Constructor<T, U>
			extend(sClassName: string, oClassInfo: object, FNMetaImpl: Function): Constructor<T, U>
		}

		function define<T extends typeof sap.ui.base.Object>(modulePaths: string[], loadedModules: (...modules: Array<T>) => void | Function | object): void;
	}
}