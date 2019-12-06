declare namespace sap {
	namespace base {
		namespace i18n {
			class ResourceBundle {
				private constructor();
				static create(mParams: { url?: string; locale?: string; includeInfo?: boolean; async?: boolean });
				getText(sKey: string, aArgs?: string[], bIgnoreKeyFallback?: boolean): string;
				hasText(sKey: string): boolean;
			}
		}
	}
}