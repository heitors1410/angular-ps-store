import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Card } from './components/card/card';
import { MenuBar } from './components/menu-bar/menu-bar';
import { CardLabel } from './components/card/card-label/card-label';
import { CardPricing } from './components/card/card-pricing/card-pricing';

@NgModule({
	declarations: [App, Home, Card, MenuBar, CardLabel, CardPricing],
	imports: [BrowserModule, AppRoutingModule],
	providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
	bootstrap: [App],
})
export class AppModule {}
