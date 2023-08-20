import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// 모든 셋팅한 후 어플리케이션을 실행하기위한 함수 설정을 해줘야 한다.
// 보통 bootstrap이라고 설정을 하는 것이 보편적이며 이름은 아무거나 해도 됨.
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
};

bootstrap();
