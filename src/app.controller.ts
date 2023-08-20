import { Controller, Get } from "@nestjs/common";

@Controller("/app") // 데코레이터라 부르며 해당 파일이 수행하는 역할을 지정해주는 역할(자바의 어노테이션 개념)
export class AppController {
  @Get("/hi") // 요청방식을 설정
  getRootRoute() {
    return "Hello NestJS!!!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye NestJS!!";
  }
}
