enum EventType {
    a, b, c
  };

  
  
  type HandlerMap = {
    [EventType.a]: (p1: number) => void;
    [EventType.b]: (p1: string) => void;
    [EventType.c]: (p1: Promise<any>) => void;
  };
  
  type EventDispatcher<Type> = {
    on<Key extends EventType & keyof Type>
          (eventName: Key, callback: (val: Type[Key]) => void ): void;
  }

  class Dispatcher implements EventDispatcher<HandlerMap>  {
      on(e) {

      }
  }

  const d = new Dispatcher()

  d.on(EventType.a, (e) => {})
  
  
//   let eventDispatcher:EventDispatcher<HandlerMap> = {
//     on: (e) => {
//       // do something
//     }
//   }
  
  
//   eventDispatcher.on(EventType.a, (p1) => {
//     console.log(p1);
//   });
  
//   eventDispatcher.on(EventType.b, (p1) => {
//     console.log(p1);
//   })
  
//   eventDispatcher.on(EventType.c, (p1) => {
//     console.log(p1);
//   })