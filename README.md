# Unreal.js

[![Join the chat at https://gitter.im/nakosung/Unreal.js](https://badges.gitter.im/nakosung/Unreal.js.svg)](https://gitter.im/nakosung/Unreal.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4. 

### Features
- Powered by latest V8 (ES6)
- CommonJS modules
- Full access to the whole UnrealEngine API
- Free to subclass existing classes including blueprint
- Web-dev like UMG ([Jade](http://jade-lang.com), pseudo-css, pseudo-[angular.js](https://angularjs.org/))
- Live reload
- Communicate with outer world: REST, process(pipe), arraybuffer, ...
- Bridge API for editor extension
- Auto-completion for Visual Studio (auto-generated [*.d.ts](http://definitelytyped.org/))
- Dedicated Javascript console on UnrealEditor

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_JavascriptConsole.gif) 

- (Full) access to existing javascript libraries via npm, bower, ...
  
### Wiki
- https://github.com/ncsoft/Unreal.js/wiki

### Install and play
- Make sure you have [UnrealEngine 4.10 canonical build](https://www.unrealengine.com/dashboard).
- Install git-lfs first to download *.umap, *.uasset properly. (https://git-lfs.github.com/)
- After installing `git-lfs`, `git clone https://github.com/ncsoft/Unreal.js`
- Download [prebuilt UnrealJS plugin](https://github.com/ncsoft/Unreal.js/releases) and unzip into `Examples/Plugins/UnrealJS`.
- `cd Examples/Content/Scripts && npm i` to install node.js packages which are required to run examples.
- Open `Examples/JavascriptPlayground.uproject`
- Activate `JavascriptConsole` by clicking `Windows - Developer Tools - JavascriptConsole`.

### Build
- Download prebuilt V8 and unzip into .../Plugins/UnrealJS. (files are located in *releases*)

### License
Apache2

### Examples

#### [2048](https://github.com/gabrielecirulli/2048)
- [View source code](https://github.com/ncsoft/Unreal.js/blob/master/Examples/Content/Scripts/2048/)

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_example_2048.gif)

#### [Springy](http://getspringy.com)
- [View source code](https://github.com/ncsoft/Unreal.js/blob/master/Examples/Content/Scripts/helloSpringy.js)

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_springy.gif)

#### Create a new actor
```js
let myActor = new Actor(GWorld,{X:10,Y:20,Z:30});
myActor.SetActorLocation({X:40,Y:80,Z:120});
```

#### Subclass an existing class
```js
class MyActor extends Actor {
  properties() {
    this.MyProp/*EditAnywhere+Replicated+int*/;
  }
  RPC(x/*int*/) /*Server+Reliable*/ {
    console.log('This function is replicated',this.MyProp++);
  }
}
let MyActor_C = require('uclass')()(global,MyActor);
if (GWorld.IsServer()) { 
  new MyActor_C(GWorld);
}
```

#### Node.js like 
```js
let _ = require('lodash');
let kick = () => {
  console.log("Hello timer!",_.keys(this));
  setTimeout(kick,1000);
};
kick();
```

#### GameUI-dev like web-dev
```jade
div
	span.full
		Button.full
			text {{text}}
		div.full
			Button.full(fn.on-clicked="inc()")
				text {{count}}
			Button.full(fn.on-clicked="add()")
				text Click button above!
	span
		text.yellow >
		EditableText(Binding.Text='text',
			fn.on-text-changed='text = ^arguments[0]',
			HintText="Your secret goes here")
		
	list.full(repeat='item in items',on-click="discard(item)") 
		HorizontalBox.small
			text.full {{item.key}}
			text.full {{item.value}}
```

#### Write your own extension
Just add some static function into your `UBlueprintFunctionLibrary`.
```c++
UCLASS()
class UMyBlueprintFunctionLibrary : public UBlueprintFunctionLibrary
{
    GENERATED_BODY();
public:
    UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
    static bool MySuperFunction(UMySuperActor* SuperActor, FString SuperPath, FVector* OutVector);
};
```

```js
let result = MySuperActor.MySuperFunction("SuperPath")
console.log(`return value:${result.$} vector:${result.OutVector}`)
```

#### Direct access to raw memory
```js
let ab = new ArrayBuffer(32*1024); // 32K bytes buffer
let u8 = new Uint8Array(ab); // typed array
memory.bind(ab);
GWorld.MySuperMemoryFunction();
memory.unbind(ab);
```

```c++
void UMyBlueprintFunctionLibrary::MySuperMemoryFunction(UWorld* World)
{
    auto size = FArrayBufferAccessor::GetSize();
    auto buffer = FArrayBufferAccessor::GetData();
}
```
