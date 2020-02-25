export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (!parentModule) return;
  throw new Error(
    `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
  );
}
