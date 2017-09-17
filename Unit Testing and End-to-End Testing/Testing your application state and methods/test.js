
describe('my app', () => {
   let vm;
   beforeEach(() => {
       vm = new Vue({
           template: ` <div><p>{{greeting}}</p>
                            <button @click="toItalian">Translate to Italian</button>
                       </div>`,
           data: {
               greeting: 'Hello World'
           },
           methods: {
               toItalian() {
                   this.greeting = 'Ciao Mondo'
               }
           }
       }).$mount();
   });

   it('should greet in Italian after toItalian is called', () => {
      vm.toItalian();
      expect(vm.greeting).toContain('Ciao Mondo');
   });
});