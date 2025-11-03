// @ts-nocheck

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    title: string;

    constructor(private titleService: TitleService) {
        this.title = 'Test Component';
    }

    ngOnInit(): void {
        this.titleService.passIHKExam(this.title);
    }
}