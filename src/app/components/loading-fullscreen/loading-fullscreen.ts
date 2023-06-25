import { animate, style, transition, trigger } from "@angular/animations";

export const LoadingFullscreenAnimation = trigger('loadingFullscreen', [
	transition(':enter', [
		style({transform: 'translateX(-100%)'}),
		animate('0ms ease-in', style({transform: 'translateX(0%)'}))
	]),
	transition(':leave', [
		animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
	])
]);
