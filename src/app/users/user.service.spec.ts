
import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('User service', () => {

    // it('Test', ()=>{
    //     expect(1).toBe(1);
    // })

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        })
    });

    it('Should retrieve all user correctly', inject(
        [HttpTestingController, UserService],
        (
            httpMock: HttpTestingController,
            userService: UserService
        ) => {
            const mockResponse = {
                "results": [
                    {
                        "id": "1",
                        "name": "RDJ",
                        "movies": "100"
                    },
                    {
                        "id": "2",
                        "name": "Tom Holland",
                        "movies": "3"
                    },
                    {
                        "id": "3",
                        "name": "Benedict Cumberbatch",
                        "movies": "10"
                    },
                    {
                        "id": "4",
                        "name": "Chris Hemsworth",
                        "movies": "30"
                    },
                    {
                        "id": "5",
                        "name": "Chris Evans",
                        "movies": "20"
                    }]
            };

            // userService.getUsers().subscribe((response: any[])=>{
                
            // });

        }
    )
    );
});