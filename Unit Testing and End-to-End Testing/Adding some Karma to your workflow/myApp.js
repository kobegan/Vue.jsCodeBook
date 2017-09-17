
const myApp = {
    template: `
        <div>
            <p>{{greeting}}</p>   
        </div>
    `,
    data: {
        greeting: 'Hello World'
    }
};

describe('my app', () => {
   beforeEach(() => {
       document.body.innerHTML = `<div id="app"></div>`;

       new Vue(myApp).$mount('#app');
   });

   it('should say Hello World', () => {
       expect(document.querySelector('p').innerText).toContain('Hello World')
   });
});