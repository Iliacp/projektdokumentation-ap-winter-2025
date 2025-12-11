import { Injectable } from '@angular/core';
import { DeviceAction } from './types';
import { I18NextPipe } from 'angular-i18next';
import { UserRole } from '@abus-cloud-frontend/auth';
import { DeviceAnalysisService } from './device-analysis';
import { DeviceAnalysisConfig } from './device-analysis/types';

@Injectable({
    providedIn: 'root'
})
export class DeviceActionsProvider {

    constructor(
        private i18n: I18NextPipe,
        private deviceAnalysis: DeviceAnalysisService
    ) {}

    getDeviceAnalysisAction(config: DeviceAnalysisConfig): DeviceAction {
        return {
            // Text des Buttons
            title: this.i18n.transform('common.action.open_device_analysis'),
            // Callback-Funktion, die ausgefuehrt wird, wenn der Button geklickt wird
            callback: async () => await this.deviceAnalysis.openAnalysisDialog(config),
            // Rollen, die berechtigt sind, diese Aktion auszufuehren
            roles: [
                UserRole.TechnicalSupport,
                UserRole.ProductManager
            ]
        }
    }

    // Andere Aktionen sind nicht relevant und wurden hier weggelassen (inkl. ihre Importe und Abhaengigkeiten)
}

