declare module "hub" {
  function hub(): void; 
  namespace hub { } // This is a hack to allow ES6 wildcard imports
  export = hub;
}