import {default as logo} from '!!raw-loader!../../assets/images/taiga.svg';
import {Component, Inject} from '@angular/core';
import {TUI_DOC_LOGO} from '@taiga-ui/addon-doc';
import {TUI_IS_ANDROID, TUI_IS_IOS, tuiPure} from '@taiga-ui/cdk';
import {changeDetection} from '../../change-detection-strategy';

// @dynamic
@Component({
    selector: 'app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.style.less'],
    changeDetection,
    providers: [
        {
            provide: TUI_DOC_LOGO,
            useValue: logo,
        },
    ],
})
export class AppComponent {
    constructor(
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
    ) {}

    @tuiPure
    get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 25)
        );
    }
}
