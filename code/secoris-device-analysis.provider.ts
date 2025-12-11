import { Injectable } from '@angular/core';
import { I18NextService } from 'angular-i18next';
import { lastValueFrom } from 'rxjs';
import { SecorisService } from '@abus-cloud-frontend/api';
import { DeviceAnalysisDeviceSpecificData, DeviceAnalysisDeviceSpecificDataProvider } from '@abus-cloud-frontend/device-common';

@Injectable({
    providedIn: 'root'
})
export class SecorisDeviceAnalysisProvider implements DeviceAnalysisDeviceSpecificDataProvider {
    constructor(
        private secorisService: SecorisService, // Secoris API Service
        private i18n: I18NextService // Internationalisierung
    ) {}

    async getDeviceAnalysisInfo(deviceId: string): Promise<DeviceAnalysisDeviceSpecificData[]> {
        // Holen der Geraeteeinstellungen von der API fuer das gegebene deviceId
        const settings = await lastValueFrom(
            this.secorisService.SettingsDeviceIdGet(deviceId)
        );

        let connectionType;
        if (settings.connectionType != undefined) {
            // Verbindungstyp grossschreiben
            connectionType = settings.connectionType[0].toUpperCase() + settings.connectionType.slice(1).toLowerCase()
        }

        // Array mit den geraetespezifischen Daten zurueckgeben
        return [
            {
                title: this.i18n.t('devices.secoris.sidebar_device.serial_number').toUpperCase(),
                content: settings?.serialNumber 
            },
            {
                title: this.i18n.t('devices.secoris.sidebar_device.ip_address').toUpperCase(),
                content: settings?.internalIpAddress 
            },
            {
                title: this.i18n.t('devices.secoris.sidebar_device.mac_address').toUpperCase(),
                content: settings?.macAddress 
            },
            // ...weitere Daten abgekuerzt
        ];
    }
}