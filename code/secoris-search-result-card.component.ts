import {
  DeviceActionsProvider,
  CommonSearchCardComponent,
  SearchResultDeviceCard,
  SearchResultDeviceItem,
} from '@abus-cloud-frontend/device-common';
import { Component, computed, input } from '@angular/core';
import { DEVICE_SECORIS } from '../secoris-consts';
import { SecorisSearchItemContent } from '../types';
import { SecorisDeviceAnalysisProvider } from './secoris-device-analysis.provider';

@Component({
    selector: `abus-secoris-search-result-card`,
    imports: [CommonSearchCardComponent],
    // template ist hier vereinfacht dargestellt, da nur die Aktionen relevant sind
    template: `
      <common-search-card
        [actions]="getActions()"
      >
      </common-search-card>
    `
})
export class SecorisSearchResultCardComponent implements SearchResultDeviceCard {
  type: string = DEVICE_SECORIS;

  searchTerm = input.required<string>();
  searchItem = input.required<SearchResultDeviceItem<SecorisSearchItemContent>>();
  protected device = computed(() => ({...this.searchItem(), ...this.searchItem().content}));
  protected access = computed(() => this.searchItem().access);

  constructor(
    private actionsProvider: DeviceActionsProvider,
    private deviceAnalysisProvider: SecorisDeviceAnalysisProvider
  ) {}

  public getActions() {
    return [
      this.actionsProvider.getDeviceAnalysisAction({
        // Allgemeine Geraetedaten
        deviceId: this.device().RegisteredDeviceId,
        deviceType: this.type,
        resolvedDeviceTitle: this.getProjectNameOrFallback(),
        firmwareVersion: this.device().FirmwareVersion,

        // Provider fuer geraetespezifische Daten
        provider: this.deviceAnalysisProvider
      })
    ];
  }

  protected getProjectNameOrFallback(): string {
    // Loest den Projektnamen auf abhaengig von der Nutzerrolle und vorhandenen Daten.
    // Irrelevant fuer das Projekt.
  }
}
