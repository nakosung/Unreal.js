/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
declare class KismetArrayLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetArrayLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetArrayLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetArrayLibrary;
	static C(Other: UObject): KismetArrayLibrary;
	/**
	 * Not exposed to users. Supports setting an array property on an object by name.
	*/
	static SetArrayPropertyByName(UObject: UObject,PropertyName: string,Value: number[]): void;
	/**
	 * Filter Array
	 * *Actor 에서 파생된 Class 에 따라 배열을 필터링합니다.
	 * *
	 * *@param        TargetArray             필터를 적용할 배열
	 * *@param        FilterClass             필터 역할을 할 Actor 서브클래스 유형으로, 거기서 파생된 오브젝트만 반환됩니다.
	 * *@return       지정된 클래스에서 파생된 오브젝트만 들어있는 배열.
	*/
	static FilterArray(TargetArray: Actor[],FilterClass: UnrealEngineClass,FilteredArray?: Actor[]): {FilteredArray: Actor[]};
	/**
	 * Shuffle (randomize) the elements of an array
	 * @param        TargetArray             The array to shuffle
	*/
	static Shuffle(TargetArray: number[]): void;
	/**
	 * Array_Set
	 * *배열과 인덱스가 주어지면, 아이템을 그 배열 요소에 할당합니다.
	 * *
	 * *@param        TargetArray             작업을 수행할 배열
	 * *@param        Index                   아이템을 할당할 인덱스
	 * *@param        Item                    배열의 인덱스에 할당할 아이템
	 * *@param        bSizeToFit              true 면 인덱스가 현재 배열 크기보다 큰 경우 배열을 확장
	*/
	static SetArrayElem(TargetArray: number[],Index: number,Item: number,bSizeToFit: boolean): void;
	/**
	 * Array_Resize
	 * *배열을 지정된 크기로 조정합니다.
	 * *
	 * *@param        TargetArray             크기조정할 배열
	 * *@param        Size                    배열의 새 크기
	*/
	static Resize(TargetArray: number[],Size: number): void;
	/**
	 * Array_Remove Item
	 * *배열에서 찾은 아이템 인스턴스 전부를 제거합니다.
	 * *
	 * *@param        TargetArray             제거 대상 배열
	 * *@param        Item                    배열에서 제거할 아이템
	 * *@return       아이템을 하나 이상 제거했으면 True
	*/
	static RemoveItem(TargetArray: number[],Item: number): boolean;
	/**
	 * Array_Remove
	 * *배열에서 주어진 인덱스의 아이템을 제거합니다.
	 * *
	 * *@param        TargetArray             제거 대상 배열
	 * *@param        IndexToRemove   배열에서 제거할 아이템의 인덱스
	*/
	static RemoveIndex(TargetArray: number[],IndexToRemove: number): void;
	/**
	 * Array_Length
	 * *배열 내 아이템 갯수를 구합니다.
	 * *
	 * *@param        TargetArray             길이를 구할 배열
	 * *@return       배열의 길이
	*/
	static Length(TargetArray: number[]): number;
	/**
	 * Array_Last Index
	 * *배열 내 유효한 마지막 인덱스를 구합니다.
	 * *
	 * *@param        TargetArray             작업을 수행할 배열
	 * *@return       배열의 마지막 유효 인덱스
	*/
	static LastIndex(TargetArray: number[]): number;
	/**
	 * Array_Insert
	 * *배열의 주어진 인덱스에 아이템을 삽입합니다.
	 * *
	 * *@param        TargetArray             삽입할 배열
	 * *@param        NewItem                 배열에 삽입할 아이템
	 * *@param        Index                   배열에 아이템을 삽입할 인덱스
	*/
	static Insert(TargetArray: number[],NewItem: number,Index: number): void;
	/**
	 * Array_Get
	 * *배열과 인덱스가 주어지면, 해당 인덱스에서 찾은 아이템을 반환합니다.
	 * *
	 * *@param        TargetArray             아이템을 구할 배열
	 * *@param        Index                   배열 내 아이템을 구할 인덱스
	 * *@return       그 인덱스에 저장된 아이템
	*/
	static Get(TargetArray: number[],Index: number,Item?: number): {Item: number};
	/**
	 * Array_Find
	 * *배열 내 첫 번째 등장하는 아이템 인덱스를 찾습니다.
	 * *
	 * *@param        TargetArray             아이템을 검색할 배열
	 * *@param        ItemToFind              찾을 아이템
	 * *@return       아이템을 찾은 인덱스, 찾지 못했으면 -1
	*/
	static FindItem(TargetArray: number[],ItemToFind: number): number;
	/**
	 * Array_Contains
	 * *배열에 주어진 아이템이 있으면 true 를 반환합니다.
	 * *
	 * *@param        TargetArray             아이템을 검색할 배열
	 * *@param        ItemToFind              찾을 아이템
	 * *@return       배열에서 아이템을 찾았으면 True
	*/
	static ContainsItem(TargetArray: number[],ItemToFind: number): boolean;
	/**
	 * Clear
	 * *배열을 비워, 내용물을 모두 제거합니다
	 * *
	 * *@param        TargetArray             비울 배열
	*/
	static Clear(TargetArray: number[]): void;
	/**
	 * Append an array to another array
	 * @param        TargetArray             The array to add the source array to
	 * @param        SourceArray             The array to add to the target array
	*/
	static AppendArray(TargetArray: number[],SourceArray: number[]): void;
	/**
	 * Add item to array (unique)
	 * @param         TargetArray             The array to add item to
	 * @param         NewItem                 The item to add to the array
	 * @return        The index of the newly added item, or INDEX_NONE if the item is already present in the array
	*/
	static AddUnique(TargetArray: number[],NewItem: number): number;
	/**
	 * Add item to array
	 * @param        TargetArray             The array to add item to
	 * @param        NewItem                 The item to add to the array
	 * @return       The index of the newly added item
	*/
	static Add(TargetArray: number[],NewItem: number): number;
}

declare class KismetGuidLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetGuidLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetGuidLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetGuidLibrary;
	static C(Other: UObject): KismetGuidLibrary;
	/**
	 * Converts a String of format EGuidFormats to a Guid. Returns Guid OutGuid, Returns bool Success
	*/
	static ParseStringtoGuid(GuidString: string,OutGuid?: Guid,Success?: boolean): {OutGuid: Guid, Success: boolean};
	/**
	 * Returns true if the values are not equal (A != B)
	*/
	static NotEqual(A: Guid,B: Guid): boolean;
	/**
	 * Returns a new unique GUID
	*/
	static NewGuid(): Guid;
	/**
	 * Checks whether the given GUID is valid
	*/
	static IsValid(InGuid: Guid): boolean;
	/**
	 * Invalidates the given GUID
	*/
	static Invalidate_Guid(InGuid?: Guid): {InGuid: Guid};
	/**
	 * Returns true if the values are equal (A == B)
	*/
	static Equal(A: Guid,B: Guid): boolean;
	/**
	 * Converts a GUID value to a string, in the form 'A-B-C-D'
	*/
	static ToString(InGuid: Guid): string;
}

declare class KismetInputLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetInputLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetInputLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetInputLibrary;
	static C(Other: UObject): KismetInputLibrary;
	/**
	 * @return Is this event a result from a touch (as opposed to a mouse)
	*/
	static IsTouchEvent(Input: UPointerEvent): boolean;
	/**
	 * Mouse buttons that are currently pressed
	*/
	static IsMouseButtonDown(Input: UPointerEvent,MouseButton: Key): boolean;
	/**
	 * How much did the mouse wheel turn since the last mouse event
	*/
	static GetWheelDelta(Input: UPointerEvent): number;
	/**
	 * @return The index of the user that caused the event
	*/
	static GetUserIndex(Input: UPointerEvent): number;
	/**
	 * @return The index of the touch pad that generated this event (for platforms with multiple touch pads per user)
	*/
	static GetTouchpadIndex(Input: UPointerEvent): number;
	/**
	 * @return The position of the cursor in screen space
	*/
	static GetScreenSpacePosition(Input: UPointerEvent): Vector2D;
	/**
	 * @return The unique identifier of the pointer (e.g., finger index)
	*/
	static GetPointerIndex(Input: UPointerEvent): number;
	/**
	 * @return The position of the cursor in screen space last time we handled an input event
	*/
	static GetLastScreenSpacePosition(Input: UPointerEvent): Vector2D;
	/**
	 * @return The change in gesture value since the last gesture event of the same type.
	*/
	static GetGestureDelta(Input: UPointerEvent): Vector2D;
	/**
	 * Mouse button that caused this event to be raised (possibly EB_None)
	*/
	static GetEffectingButton(Input: UPointerEvent): Key;
	/**
	 * @return the distance the mouse traveled since the last event was handled.
	*/
	static GetCursorDelta(Input: UPointerEvent): Vector2D;
	/**
	 * @returns True if the key is a vector axis
	*/
	static Key_IsVectorAxis(Key: Key): boolean;
	/**
	 * @returns True if the key is a mouse button
	*/
	static Key_IsMouseButton(Key: Key): boolean;
	/**
	 * @returns True if the key is a modifier key: Ctrl, Command, Alt, Shift
	*/
	static Key_IsModifierKey(Key: Key): boolean;
	/**
	 * @returns True if the key is a keyboard button
	*/
	static Key_IsKeyboardKey(Key: Key): boolean;
	/**
	 * @returns True if the key is a gamepad button
	*/
	static Key_IsGamepadKey(Key: Key): boolean;
	/**
	 * @returns True if the key is a float axis
	*/
	static Key_IsFloatAxis(Key: Key): boolean;
	/**
	 * @returns The display name of the key.
	*/
	static Key_GetDisplayName(Key: Key): string;
	/**
	 * Returns true if either shift key was down when this event occurred
	 * @return  True if shift is pressed
	*/
	static IsShiftDown(Input: InputEvent): boolean;
	/**
	 * Returns true if right shift key was down when this event occurred
	 * @return True if right shift is pressed.
	*/
	static IsRightShiftDown(Input: InputEvent): boolean;
	/**
	 * Returns true if left control key was down when this event occurred
	 * @return  True if left control is pressed
	*/
	static IsRightControlDown(Input: InputEvent): boolean;
	/**
	 * Returns true if right command key was down when this event occurred
	 * @return  True if right command is pressed
	*/
	static IsRightCommandDown(Input: InputEvent): boolean;
	/**
	 * Returns true if right alt key was down when this event occurred
	 * @return  True if right alt is pressed
	*/
	static IsRightAltDown(Input: InputEvent): boolean;
	/**
	 * Returns whether or not this character is an auto-repeated keystroke
	 * @return  True if this character is a repeat
	*/
	static IsRepeat(Input: InputEvent): boolean;
	/**
	 * Returns true if left shift key was down when this event occurred
	 * @return True if left shift is pressed.
	*/
	static IsLeftShiftDown(Input: InputEvent): boolean;
	/**
	 * Returns true if left control key was down when this event occurred
	 * @return  True if left control is pressed
	*/
	static IsLeftControlDown(Input: InputEvent): boolean;
	/**
	 * Returns true if left command key was down when this event occurred
	 * @return  True if left command is pressed
	*/
	static IsLeftCommandDown(Input: InputEvent): boolean;
	/**
	 * Returns true if left alt key was down when this event occurred
	 * @return  True if left alt is pressed
	*/
	static IsLeftAltDown(Input: InputEvent): boolean;
	/**
	 * Returns true if either control key was down when this event occurred
	 * @return  True if control is pressed
	*/
	static IsControlDown(Input: InputEvent): boolean;
	/**
	 * Returns true if either command key was down when this event occurred
	 * @return  True if command is pressed
	*/
	static IsCommandDown(Input: InputEvent): boolean;
	/**
	 * Returns true if either alt key was down when this event occurred
	 * @return  True if alt is pressed
	*/
	static IsAltDown(Input: InputEvent): boolean;
	/**
	 * Get User Index
	*/
	static GetUserIndex(Input: KeyEvent): number;
	/**
	 * Returns the key for this event.
	 * @return  Key name
	*/
	static GetKey(Input: KeyEvent): Key;
	/**
	 * Get Analog Value
	*/
	static GetAnalogValue(Input: AnalogInputEvent): number;
	/**
	 * Test if the input key are equal (A == B)
	 * @param A - The key to compare against
	 * @param B - The key to compare
	 * @returns True if the key are equal, false otherwise
	*/
	static Equal(A: Key,B: Key): boolean;
	/**
	 * @return The index of the user that caused the event
	*/
	static ControllerEvent_GetUserIndex(Input: ControllerEvent): number;
	/**
	 * @return The controller button that caused this event
	*/
	static GetEffectingButton(Input: ControllerEvent): Key;
	/**
	 * @return Analog value between 0 and 1.  1 being fully pressed, 0 being not pressed at all
	*/
	static ControllerEvent_GetAnalogValue(Input: ControllerEvent): number;
	/**
	 * Calibrate the tilt for the input device
	*/
	static CalibrateTilt(): void;
}

declare class KismetMaterialLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetMaterialLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetMaterialLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetMaterialLibrary;
	static C(Other: UObject): KismetMaterialLibrary;
	/**
	 * Sets a vector parameter value on the material collection instance. Logs if ParameterName is invalid.
	*/
	static SetVectorParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string,ParameterValue: LinearColor): void;
	/**
	 * Sets a scalar parameter value on the material collection instance. Logs if ParameterName is invalid.
	*/
	static SetScalarParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string,ParameterValue: number): void;
	/**
	 * Gets a vector parameter value from the material collection instance. Logs if ParameterName is invalid.
	*/
	static GetVectorParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string): LinearColor;
	/**
	 * Gets a scalar parameter value from the material collection instance. Logs if ParameterName is invalid.
	*/
	static GetScalarParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string): number;
	/**
	 * Creates a Dynamic Material Instance which you can modify during gameplay.
	*/
	static CreateDynamicMaterialInstance(WorldContextObject: UObject,Parent: MaterialInterface): MaterialInstanceDynamic;
}

declare type EEasingFunc = string;
declare class Timespan { 
}

declare class RandomStream { 
	/**
	 * Initial Seed
	*/
	InitialSeed: number;
	/**
	 * Seed
	*/
	Seed: number;
}

declare class KismetMathLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetMathLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetMathLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetMathLibrary;
	static C(Other: UObject): KismetMathLibrary;
	/**
	 * Bitwise XOR (A ^ B)
	*/
	static BitwiseXOR(A: number,B: number): number;
	/**
	 * Returns the squared length of the FVector
	*/
	static VectorLengthSquared(A: Vector): number;
	/**
	 * Returns the squared length of a 2d FVector.
	*/
	static Vector2dLengthSquared(A: Vector2D): number;
	/**
	 * Returns the length of a 2d FVector.
	*/
	static Vector2dLength(A: Vector2D): number;
	/**
	 * Returns the length of the FVector
	*/
	static VectorLength(A: Vector): number;
	/**
	 * Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)
	*/
	static Lerp(A: Vector,B: Vector,Alpha: number): Vector;
	/**
	 * Tries to reach Target at a constant rate.
	 * @param               Current                 Actual position
	 * @param               Target                  Target position
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static VInterpTo_Constant(Current: Vector,Target: Vector,DeltaTime: number,InterpSpeed: number): Vector;
	/**
	 * Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.
	 * @param               Current                 Actual position
	 * @param               Target                  Target position
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static VInterpTo(Current: Vector,Target: Vector,DeltaTime: number,InterpSpeed: number): Vector;
	/**
	 * Tries to reach Target at a constant rate.
	 * @param               Current                 Actual position
	 * @param               Target                  Target position
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static Vector2DInterpTo_Constant(Current: Vector2D,Target: Vector2D,DeltaTime: number,InterpSpeed: number): Vector2D;
	/**
	 * Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.
	 * @param               Current                 Actual position
	 * @param               Target                  Target position
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static Vector2DInterpTo(Current: Vector2D,Target: Vector2D,DeltaTime: number,InterpSpeed: number): Vector2D;
	/**
	 * Easeing  between A and B using a specified easing function
	*/
	static Ease(A: Vector,B: Vector,Alpha: number,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): Vector;
	/**
	 * Returns the UTC date and time on this computer
	*/
	static UtcNow(): DateTime;
	/**
	 * Transform a position by the supplied transform.
	 * For example, if T was an object's transform, would transform a position from local space to world space.
	*/
	static TransformLocation(T: Transform,Location: Vector): Vector;
	/**
	 * Transform a direction vector by the supplied transform - will not change its length.
	 * For example, if T was an object's transform, would transform a direction from local space to world space.
	*/
	static TransformDirection(T: Transform,Direction: Vector): Vector;
	/**
	 * Returns the local date on this computer
	*/
	static Today(): DateTime;
	/**
	 * Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1).
	*/
	static Lerp(A: Transform,B: Transform,Alpha: number): Transform;
	/**
	 * Tries to reach a target transform.
	*/
	static TInterpTo(Current: Transform,Target: Transform,DeltaTime: number,InterpSpeed: number): Transform;
	/**
	 * Returns a zero time span value
	*/
	static ZeroValue(): Timespan;
	/**
	 * Returns the ratio between two time spans (A / B), handles zero values
	*/
	static TimespanRatio(A: Timespan,B: Timespan): number;
	/**
	 * Returns the minimum time span value
	*/
	static MinValue(): Timespan;
	/**
	 * Returns the maximum time span value
	*/
	static MaxValue(): Timespan;
	/**
	 * Converts a time span string to a Timespan object
	*/
	static TimespanFromString(TimespanString: string,Result?: Timespan): {Result: Timespan, $: boolean};
	/**
	 * Ease between A and B using a specified easing function.
	*/
	static Ease(A: Transform,B: Transform,Alpha: number,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): Transform;
	/**
	 * Returns the tan of A (expects Radians)
	*/
	static Tan(A: number): number;
	/**
	 * Vector subtraction
	*/
	static Subtract_VectorVector(A: Vector,B: Vector): Vector;
	/**
	 * Subtracts an integer from each component of a vector
	*/
	static Subtract_VectorInt(A: Vector,B: number): Vector;
	/**
	 * Subtracts a float from each component of a vector
	*/
	static Subtract_VectorFloat(A: Vector,B: number): Vector;
	/**
	 * Returns subtraction of Vector B from Vector A (A - B)
	*/
	static Subtract_Vector2DVector2D(A: Vector2D,B: Vector2D): Vector2D;
	/**
	 * Returns Vector A subtracted by B
	*/
	static Subtract_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	/**
	 * Subtraction (A - B)
	*/
	static Subtract_TimespanTimespan(A: Timespan,B: Timespan): Timespan;
	/**
	 * Subtraction (A - B)
	*/
	static Subtract_IntInt(A: number,B: number): number;
	/**
	 * Subtraction (A - B)
	*/
	static Subtract_FloatFloat(A: number,B: number): number;
	/**
	 * Subtraction (A - B)
	*/
	static Subtract_DateTimeTimespan(A: DateTime,B: Timespan): DateTime;
	/**
	 * Subtraction (A - B)
	*/
	static Subtract_DateTimeDateTime(A: DateTime,B: DateTime): Timespan;
	/**
	 * Subtraction (A - B)
	*/
	static Subtract_ByteByte(A: number,B: number): number;
	/**
	 * Returns square of A (A*A)
	*/
	static Square(A: number): number;
	/**
	 * Returns square root of A
	*/
	static Sqrt(A: number): number;
	/**
	 * Returns the sine of A (expects Radians)
	*/
	static Sin(A: number): number;
	/**
	 * Sign (integer, returns -1 if A < 0, 0 if A is zero, and +1 if A > 0)
	*/
	static Sign(A: number): number;
	/**
	 * Sign (float, returns -1 if A < 0, 0 if A is zero, and +1 if A > 0)
	*/
	static Sign(A: number): number;
	/**
	 * Set the seed of a random stream to a specific number
	*/
	static SetRandomStreamSeed(Stream?: RandomStream,NewSeed?: number): {Stream: RandomStream};
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectVector(A: Vector,B: Vector,bPickA: boolean): Vector;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectTransform(A: Transform,B: Transform,bPickA: boolean): Transform;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectString(A: string,B: string,bPickA: boolean): string;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectRotator(A: Rotator,B: Rotator,bPickA: boolean): Rotator;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectObject(A: UObject,B: UObject,bSelectA: boolean): UObject;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectInt(A: number,B: number,bPickA: boolean): number;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectFloat(A: number,B: number,bPickA: boolean): number;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectColor(A: LinearColor,B: LinearColor,bPickA: boolean): LinearColor;
	/**
	 * If bPickA is true, A is returned, otherwise B is
	*/
	static SelectClass(A: UnrealEngineClass,B: UnrealEngineClass,bSelectA: boolean): UnrealEngineClass;
	/**
	 * Create a new random seed for a random stream
	*/
	static SeedRandomStream(Stream?: RandomStream): {Stream: RandomStream};
	/**
	 * Rounds A to the nearest integer
	*/
	static Round(A: number): number;
	/**
	 * Create a rotation from an axis and and angle (in degrees)
	*/
	static RotatorFromAxisAndAngle(Axis: Vector,Angle: number): Rotator;
	/**
	 * Returns result of vector A rotated by AngleDeg around Axis
	*/
	static RotateVectorAroundAxis(InVect: Vector,AngleDeg: number,Axis: Vector): Vector;
	/**
	 * Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)
	*/
	static Lerp(A: Rotator,B: Rotator,Alpha: number,bShortestPath: boolean): Rotator;
	/**
	 * Tries to reach Target at a constant rate.
	 * @param               Current                 Actual rotation
	 * @param               Target                  Target rotation
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static RInterpTo_Constant(Current: Rotator,Target: Rotator,DeltaTime: number,InterpSpeed: number): Rotator;
	/**
	 * Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.
	 * @param               Current                 Actual rotation
	 * @param               Target                  Target rotation
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static RInterpTo(Current: Rotator,Target: Rotator,DeltaTime: number,InterpSpeed: number): Rotator;
	/**
	 * Converts a RGB linear color to HSV (where H is in R, S is in G, and V is in B)
	*/
	static RGBtoHSV(RGB: LinearColor,HSV?: LinearColor): {HSV: LinearColor};
	/**
	 * Breaks apart a color into individual HSV components (as well as alpha)
	*/
	static RGBToHSV(InColor: LinearColor,H?: number,S?: number,V?: number,A?: number): {H: number, S: number, V: number, A: number};
	/**
	 * Reset a random stream
	*/
	static ResetRandomStream(Stream: RandomStream): void;
	/**
	 * Easeing  between A and B using a specified easing function
	*/
	static Ease(A: Rotator,B: Rotator,Alpha: number,bShortestPath: boolean,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): Rotator;
	/**
	 * RandomUnitVectorWithYawAndPitch
	 * @param MaxYaw - The Yaw-angle of the cone (from ConeDir to horizontal-edge), in degrees.
	 * @param MaxPitch - The Pitch-angle of the cone (from ConeDir to vertical-edge), in degrees.
	*/
	static RandomUnitVectorInConeWithYawAndPitch(ConeDir: Vector,MaxYawInDegrees: number,MaxPitchInDegrees: number): Vector;
	/**
	 * Returns a random vector with length of 1, within the specified cone, with uniform random distribution.
	 * @param ConeDir       The base "center" direction of the cone.
	 * @param ConeHalfAngle         The half-angle of the cone (from ConeDir to edge), in radians.
	*/
	static RandomUnitVectorInCone(ConeDir: Vector,ConeHalfAngle: number): Vector;
	/**
	 * Returns a random vector with length of 1.0
	*/
	static RandomUnitVectorFromStream(Stream: RandomStream): Vector;
	/**
	 * Returns a random vector with length of 1
	*/
	static RandomUnitVector(): Vector;
	/**
	 * Create a random rotation
	*/
	static RandomRotatorFromStream(bRoll: boolean,Stream: RandomStream): Rotator;
	/**
	 * Generates a random rotation, with optional random roll.
	*/
	static RandomRotator(bRoll: boolean): Rotator;
	/**
	 * Returns a random point within the specified bounding box
	*/
	static RandomPointInBoundingBox(Origin: Vector,BoxExtent: Vector): Vector;
	/**
	 * Return a random integer between Min and Max (>= Min and <= Max)
	*/
	static RandomIntegerInRangeFromStream(Min: number,Max: number,Stream: RandomStream): number;
	/**
	 * Return a random integer between Min and Max (>= Min and <= Max)
	*/
	static RandomIntegerInRange(Min: number,Max: number): number;
	/**
	 * Returns a uniformly distributed random number between 0 and Max - 1
	*/
	static RandomIntegerFromStream(Max: number,Stream: RandomStream): number;
	/**
	 * Returns a uniformly distributed random number between 0 and Max - 1
	*/
	static RandomInteger(Max: number): number;
	/**
	 * Generate a random number between Min and Max
	*/
	static RandomFloatInRangeFromStream(Min: number,Max: number,Stream: RandomStream): number;
	/**
	 * Generate a random number between Min and Max
	*/
	static RandomFloatInRange(Min: number,Max: number): number;
	/**
	 * Returns a random float between 0 and 1
	*/
	static RandomFloatFromStream(Stream: RandomStream): number;
	/**
	 * Returns a random float between 0 and 1
	*/
	static RandomFloat(): number;
	/**
	 * Returns a random bool
	*/
	static RandomBoolFromStream(Stream: RandomStream): boolean;
	/**
	 * Returns a uniformly distributed random bool
	*/
	static RandomBool(): boolean;
	/**
	 * Returns degrees value based on the input radians
	*/
	static RadiansToDegrees(A: number): number;
	/**
	 * Projects one vector (V) onto another (Target) and returns the projected vector.
	 * If Target is nearly zero in length, returns the zero vector.
	 * @param  V Vector to project.
	 * @param  Target Vector on which we are projecting.
	 * @return V projected on to Target.
	*/
	static ProjectVectorOnToVector(V: Vector,Target: Vector): Vector;
	/**
	 * Projects a vector onto a plane defined by a normalized vector (PlaneNormal).
	 * @param  V Vector to project onto the plane.
	 * @param  PlaneNormal Normal of the plane.
	 * @return Vector projected onto the plane.
	*/
	static ProjectVectorOnToPlane(V: Vector,PlaneNormal: Vector): Vector;
	/**
	 * Projects a point onto a plane defined by a point on the plane and a plane normal.
	 * @param  Point Point to project onto the plane.
	 * @param  PlaneBase A point on the plane.
	 * @param  PlaneNormal Normal of the plane.
	 * @return Point projected onto the plane.
	*/
	static ProjectPointOnToPlane(Point: Vector,PlaneBase: Vector,PlaneNormal: Vector): Vector;
	/**
	 * Determines whether a given set of points are coplanar, with a tolerance. Any three points or less are always coplanar.
	 * @param Points - The set of points to determine coplanarity for.
	 * @param Tolerance - Larger numbers means more variance is allowed.
	 * @return Whether the points are relatively coplanar, based on the tolerance
	*/
	static PointsAreCoplanar(Points: Vector[],Tolerance: number): boolean;
	/**
	 * Modulo (A % B)
	*/
	static Percent_IntInt(A: number,B: number): number;
	/**
	 * Modulo (A % B)
	*/
	static Percent_FloatFloat(A: number,B: number): number;
	/**
	 * Modulo (A % B)
	*/
	static Percent_ByteByte(A: number,B: number): number;
	/**
	 * Bitwise OR (A | B)
	*/
	static BitwiseOR(A: number,B: number): number;
	/**
	 * Returns the local date and time on this computer
	*/
	static Now(): DateTime;
	/**
	 * Returns true if vector A is not equal to vector B (A != B) within a specified error tolerance
	*/
	static NotEqual(A: Vector,B: Vector,ErrorTolerance: number): boolean;
	/**
	 * Returns true if the values are not equal (A != B)
	*/
	static NotEqual(A: Timespan,B: Timespan): boolean;
	/**
	 * Returns true if rotator A is not equal to rotator B (A != B) within a specified error tolerance
	*/
	static NotEqual(A: Rotator,B: Rotator,ErrorTolerance: number): boolean;
	/**
	 * Returns true if A and B are not equal (A != B)
	*/
	static NotEqual(A: UObject,B: UObject): boolean;
	/**
	 * Returns true if A and B are not equal (A != B)
	*/
	static NotEqual(A: string,B: string): boolean;
	/**
	 * Returns true if A is not equal to B (A != B)
	*/
	static NotEqual(A: number,B: number): boolean;
	/**
	 * Returns true if A does not equal B (A != B)
	*/
	static NotEqual(A: number,B: number): boolean;
	/**
	 * Returns true if the values are not equal (A != B)
	*/
	static NotEqual(A: DateTime,B: DateTime): boolean;
	/**
	 * Returns true if A and B are not equal (A != B)
	*/
	static NotEqual(A: UnrealEngineClass,B: UnrealEngineClass): boolean;
	/**
	 * Returns true if A is not equal to B (A != B)
	*/
	static NotEqual(A: number,B: number): boolean;
	/**
	 * Returns true if the values are not equal (A != B)
	*/
	static NotEqualBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Returns the logical complement of the Boolean value (NOT A)
	*/
	static NOTBoolean(A: boolean): boolean;
	/**
	 * Returns Value normalized to the given range.  (e.g. 20 normalized to the range 10->50 would result in 0.25)
	*/
	static NormalizeToRange(Value: number,RangeMin: number,RangeMax: number): number;
	/**
	 * Normalized A-B
	*/
	static Delta(A: Rotator,B: Rotator): Rotator;
	/**
	 * Clamps an angle to the range of [-180, 180].
	 * @param Angle The Angle to clamp.
	 * @return The clamped angle.
	*/
	static NormalizeAxis(Angle: number): number;
	/**
	 * Returns a unit normal version of the vector2d A
	*/
	static Normalize2D(A: Vector2D): Vector2D;
	/**
	 * Returns a unit normal version of the FVector A
	*/
	static Normalize(A: Vector): Vector;
	/**
	 * Negate a vector.
	*/
	static NegateVector(A: Vector): Vector;
	/**
	 * Negate a rotator
	*/
	static InvertRotator(A: Rotator): Rotator;
	/**
	 * Returns true if transform A is nearly equal to B
	 * @param LocationTolerance        How close position of transforms need to be to be considered equal
	 * @param RotationTolerance        How close rotations of transforms need to be to be considered equal
	 * @param Scale3DTolerance         How close scale of transforms need to be to be considered equal
	*/
	static NearlyEqual(A: Transform,B: Transform,LocationTolerance: number,RotationTolerance: number,Scale3DTolerance: number): boolean;
	/**
	 * Returns true if A is nearly equal to B (|A - B| < ErrorTolerance)
	*/
	static NearlyEqual(A: number,B: number,ErrorTolerance: number): boolean;
	/**
	 * Power (Base to the Exp-th power)
	*/
	static Power(Base: number,Exp: number): number;
	/**
	 * Multiplies the input value by pi.
	*/
	static MultiplyByPi(Value: number): number;
	/**
	 * Element-wise Vector multiplication (Result = {A.x*B.x, A.y*B.y, A.z*B.z})
	*/
	static Multiply_VectorVector(A: Vector,B: Vector): Vector;
	/**
	 * Scales Vector A by B
	*/
	static Multiply_VectorInt(A: Vector,B: number): Vector;
	/**
	 * Scales Vector A by B
	*/
	static Multiply_VectorFloat(A: Vector,B: number): Vector;
	/**
	 * Returns Vector A scaled by B
	*/
	static Multiply_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	/**
	 * Scalar multiplication (A * s)
	*/
	static Multiply_TimespanFloat(A: Timespan,Scalar: number): Timespan;
	/**
	 * Returns rotator representing rotator A scaled by B
	*/
	static ScaleRotator(A: Rotator,B: number): Rotator;
	/**
	 * Returns rotator representing rotator A scaled by B
	*/
	static ScaleRotator(A: Rotator,B: number): Rotator;
	/**
	 * Element-wise multiplication of two linear colors (R*R, G*G, B*B, A*A)
	*/
	static Multiply_LinearColorLinearColor(A: LinearColor,B: LinearColor): LinearColor;
	/**
	 * Element-wise multiplication of a linear color by a float (F*R, F*G, F*B, F*A)
	*/
	static Multiply_LinearColorFloat(A: LinearColor,B: number): LinearColor;
	/**
	 * Multiplication (A * B)
	*/
	static Multiply_IntInt(A: number,B: number): number;
	/**
	 * Multiplication (A * B)
	*/
	static Multiply_IntFloat(A: number,B: number): number;
	/**
	 * Multiplication (A * B)
	*/
	static Multiply_FloatFloat(A: number,B: number): number;
	/**
	 * Multiplication (A * B)
	*/
	static Multiply_ByteByte(A: number,B: number): number;
	/**
	 * Mirrors a vector by a normal
	*/
	static MirrorVectorByNormal(InVect: Vector,InNormal: Vector): Vector;
	/**
	 * Returns min of all array entries and the index at which it was found. Returns value of 0 and index of -1 if the supplied array is empty.
	*/
	static MinOfIntArray(IntArray: number[],IndexOfMinValue?: number,MinValue?: number): {IndexOfMinValue: number, MinValue: number};
	/**
	 * Returns min of all array entries and the index at which it was found. Returns value of 0 and index of -1 if the supplied array is empty.
	*/
	static MinOfFloatArray(FloatArray: number[],IndexOfMinValue?: number,MinValue?: number): {IndexOfMinValue: number, MinValue: number};
	/**
	 * Returns min of all array entries and the index at which it was found. Returns value of 0 and index of -1 if the supplied array is empty.
	*/
	static MinOfByteArray(ByteArray: number[],IndexOfMinValue?: number,MinValue?: number): {IndexOfMinValue: number, MinValue: number};
	/**
	 * Finds the minimum area rectangle that encloses all of the points in InVerts
	 * Uses algorithm found in http://www.geometrictools.com/Documentation/MinimumAreaRectangle.pdf
	 * @param               InVerts - Points to enclose in the rectangle
	 * @outparam    OutRectCenter - Center of the enclosing rectangle
	 * @outparam    OutRectSideA - Vector oriented and sized to represent one edge of the enclosing rectangle, orthogonal to OutRectSideB
	 * @outparam    OutRectSideB - Vector oriented and sized to represent one edge of the enclosing rectangle, orthogonal to OutRectSideA
	*/
	static MinimumAreaRectangle(WorldContextObject: UObject,InVerts: Vector[],SampleSurfaceNormal: Vector,OutRectCenter?: Vector,OutRectRotation?: Rotator,OutSideLengthX?: number,OutSideLengthY?: number,bDebugDraw?: boolean): {OutRectCenter: Vector, OutRectRotation: Rotator, OutSideLengthX: number, OutSideLengthY: number};
	/**
	 * Returns the minimum value of A and B
	*/
	static Min(A: number,B: number): number;
	/**
	 * Returns max of all array entries and the index at which it was found. Returns value of 0 and index of -1 if the supplied array is empty.
	*/
	static MaxOfIntArray(IntArray: number[],IndexOfMaxValue?: number,MaxValue?: number): {IndexOfMaxValue: number, MaxValue: number};
	/**
	 * Returns max of all array entries and the index at which it was found. Returns value of 0 and index of -1 if the supplied array is empty.
	*/
	static MaxOfFloatArray(FloatArray: number[],IndexOfMaxValue?: number,MaxValue?: number): {IndexOfMaxValue: number, MaxValue: number};
	/**
	 * Returns max of all array entries and the index at which it was found. Returns value of 0 and index of -1 if the supplied array is empty.
	*/
	static MaxOfByteArray(ByteArray: number[],IndexOfMaxValue?: number,MaxValue?: number): {IndexOfMaxValue: number, MaxValue: number};
	/**
	 * Returns the maximum value of A and B
	*/
	static Max(A: number,B: number): number;
	/**
	 * Returns Value mapped from one range into another.  (e.g. 20 normalized from the range 10->50 to 20->40 would result in 25)
	*/
	static MapRangeUnclamped(Value: number,InRangeA: number,InRangeB: number,OutRangeA: number,OutRangeB: number): number;
	/**
	 * Returns Value mapped from one range into another where the Value is clamped to the Input Range.  (e.g. 0.5 normalized from the range 0->1 to 0->50 would result in 25)
	*/
	static MapRangeClamped(Value: number,InRangeA: number,InRangeB: number,OutRangeA: number,OutRangeB: number): number;
	/**
	 * Makes a 2d vector {X, Y}
	*/
	static MakeVector2D(X: number,Y: number): Vector2D;
	/**
	 * Makes a vector {X, Y, Z}
	*/
	static MakeVector(X: number,Y: number,Z: number): Vector;
	/**
	 * Make a transform from location, rotation and scale
	*/
	static MakeTransform(Location: Vector,Rotation: Rotator,Scale: Vector): Transform;
	/**
	 * Makes a Timespan struct
	*/
	static MakeTimespan(Days: number,Hours: number,Minutes: number,Seconds: number,Milliseconds: number): Timespan;
	/**
	 * Builds a matrix with given Z and Y axes. Z will remain fixed, Y may be changed minimally to enforce orthogonality. X will be computed. Inputs need not be normalized.
	*/
	static MakeRotFromZY(Z: Vector,Y: Vector): Rotator;
	/**
	 * Builds a matrix with given Z and X axes. Z will remain fixed, X may be changed minimally to enforce orthogonality. Y will be computed. Inputs need not be normalized.
	*/
	static MakeRotFromZX(Z: Vector,X: Vector): Rotator;
	/**
	 * Builds a rotation matrix given only a ZAxis. X and Y are unspecified but will be orthonormal. ZAxis need not be normalized.
	*/
	static MakeRotFromZ(Z: Vector): Rotator;
	/**
	 * Builds a matrix with given Y and Z axes. Y will remain fixed, Z may be changed minimally to enforce orthogonality. X will be computed. Inputs need not be normalized.
	*/
	static MakeRotFromYZ(Y: Vector,Z: Vector): Rotator;
	/**
	 * Builds a matrix with given Y and X axes. Y will remain fixed, X may be changed minimally to enforce orthogonality. Z will be computed. Inputs need not be normalized.
	*/
	static MakeRotFromYX(Y: Vector,X: Vector): Rotator;
	/**
	 * Builds a rotation matrix given only a YAxis. X and Z are unspecified but will be orthonormal. YAxis need not be normalized.
	*/
	static MakeRotFromY(Y: Vector): Rotator;
	/**
	 * Builds a matrix with given X and Z axes. X will remain fixed, Z may be changed minimally to enforce orthogonality. Y will be computed. Inputs need not be normalized.
	*/
	static MakeRotFromXZ(X: Vector,Z: Vector): Rotator;
	/**
	 * Builds a matrix with given X and Y axes. X will remain fixed, Y may be changed minimally to enforce orthogonality. Z will be computed. Inputs need not be normalized.
	*/
	static MakeRotFromXY(X: Vector,Y: Vector): Rotator;
	/**
	 * Builds a rotator given only a XAxis. Y and Z are unspecified but will be orthonormal. XAxis need not be normalized.
	*/
	static MakeRotFromX(X: Vector): Rotator;
	/**
	 * Makes a rotator {Roll, Pitch, Yaw} from rotation values supplied in degrees
	*/
	static MakeRotator(Roll: number,Pitch: number,Yaw: number): Rotator;
	/**
	 * Build a reference frame from three axes
	*/
	static MakeRotationFromAxes(Forward: Vector,Right: Vector,Up: Vector): Rotator;
	/**
	 * Makes a SRand-based random number generator
	*/
	static MakeRandomStream(InitialSeed: number): RandomStream;
	/**
	 * Simple function to create a pulsating scalar value
	 * @param  InCurrentTime  Current absolute time
	 * @param  InPulsesPerSecond  How many full pulses per second?
	 * @param  InPhase  Optional phase amount, between 0.0 and 1.0 (to synchronize pulses)
	 * @return  Pulsating value (0.0-1.0)
	*/
	static MakePulsatingValue(InCurrentTime: number,InPulsesPerSecond: number,InPhase: number): number;
	/**
	 * Makes a DateTime struct
	*/
	static MakeDateTime(Year: number,Month: number,Day: number,Hour: number,Minute: number,Second: number,Millisecond: number): DateTime;
	/**
	 * Make a color from individual color components (RGB space)
	*/
	static MakeColor(R: number,G: number,B: number,A: number): LinearColor;
	/**
	 * Returns natural log of A (if e^R == A, returns R)
	*/
	static Loge(A: number): number;
	/**
	 * Computes the intersection point between a line and a plane.
	 * @param               T - The t of the intersection between the line and the plane
	 * @param               Intersection - The point of intersection between the line and the plane
	 * @return              True if the intersection test was successful.
	*/
	static LinePlaneIntersection(LineStart: Vector,LineEnd: Vector,PlaneOrigin: Vector,PlaneNormal: Vector,T?: number,Intersection?: Vector): {T: number, Intersection: Vector, $: boolean};
	/**
	 * Computes the intersection point between a line and a plane.
	 * @param               T - The t of the intersection between the line and the plane
	 * @param               Intersection - The point of intersection between the line and the plane
	 * @return              True if the intersection test was successful.
	*/
	static LinePlaneIntersection(LineStart: Vector,LineEnd: Vector,APlane: Plane,T?: number,Intersection?: Vector): {T: number, Intersection: Vector, $: boolean};
	/**
	 * Linearly interpolates between two colors by the specified Alpha amount (100% of A when Alpha=0 and 100% of B when Alpha=1).  The interpolation is performed in HSV color space taking the shortest path to the new color's hue.  This can give better results than a normal lerp, but is much more expensive.  The incoming colors are in RGB space, and the output color will be RGB.  The alpha value will also be interpolated.
	 * @param       A               The color and alpha to interpolate from as linear RGBA
	 * @param       B               The color and alpha to interpolate to as linear RGBA
	 * @param       Alpha   Scalar interpolation amount (usually between 0.0 and 1.0 inclusive)
	 * @return      The interpolated color in linear RGB space along with the interpolated alpha value
	*/
	static LerpUsingHSV(A: LinearColor,B: LinearColor,Alpha: number): LinearColor;
	/**
	 * Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)
	*/
	static Lerp(A: LinearColor,B: LinearColor,Alpha: number): LinearColor;
	/**
	 * Returns result of vector A rotated by the inverse of Rotator B
	*/
	static UnrotateVector(A: Vector,B: Rotator): Vector;
	/**
	 * Returns true if A is Greater than B (A <= B)
	*/
	static LessEqual_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	/**
	 * Returns true if A is less than or equal to B (A <= B)
	*/
	static LessEqual_IntInt(A: number,B: number): boolean;
	/**
	 * Returns true if A is Less than or equal to B (A <= B)
	*/
	static LessEqual_FloatFloat(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A <= B)
	*/
	static LessEqual_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	/**
	 * Returns true if A is less than or equal to B (A <= B)
	*/
	static LessEqual_ByteByte(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A < B)
	*/
	static Less_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	/**
	 * Returns true if A is less than B (A < B)
	*/
	static Less_IntInt(A: number,B: number): boolean;
	/**
	 * Returns true if A is Less than B (A < B)
	*/
	static Less_FloatFloat(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A < B)
	*/
	static Less_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	/**
	 * Returns true if A is less than B (A < B)
	*/
	static Less_ByteByte(A: number,B: number): boolean;
	/**
	 * Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)
	*/
	static Lerp(A: number,B: number,Alpha: number): number;
	/**
	 * Returns whether A's time is in the morning
	*/
	static IsMorning(A: DateTime): boolean;
	/**
	 * Returns whether given year is a leap year
	*/
	static IsLeapYear(Year: number): boolean;
	/**
	 * Returns whether A's time is in the afternoon
	*/
	static IsAfternoon(A: DateTime): boolean;
	/**
	 * Returns the inverse of the given transform T.
	 * Example: Given a LocalToWorld transform, WorldToLocal will be returned.
	 * @param       T       The transform you wish to invert
	 * @return      The inverse of T.
	*/
	static InvertTransform(T: Transform): Transform;
	/**
	 * Transform a position by the inverse of the supplied transform.
	 * For example, if T was an object's transform, would transform a position from world space to local space.
	*/
	static InverseTransformLocation(T: Transform,Location: Vector): Vector;
	/**
	 * Transform a direction vector by the inverse of the supplied transform - will not change its length.
	 * For example, if T was an object's transform, would transform a direction from world space to local space.
	*/
	static InverseTransformDirection(T: Transform,Direction: Vector): Vector;
	/**
	 * Returns the percentage of the range B-A that corresponds to Value. E.g.,
	 *       A = 0, B = 8, Value = 3 : return value = 3/8, indicating Value is 3/8 from A to B
	 *       A = 8, B = 0, Value = 3 : return value = 5/8, indicating Value is 5/8 from A to B
	 * Named InverseLerp because Lerp( A, B, InverseLerp(A, B, Value) ) == Value
	 * @param A The "from" value this float could be, usually but not necessarily a minimum. Returned as 0.
	 * @param B The "to" value this float could be, usually but not necessarily a maximum. Returned as 1.
	 * @param Value A value intended to be normalized relative to B-A
	 * @return A normalized value considering A and B.
	*/
	static InverseLerp(A: number,B: number,Value: number): number;
	/**
	 * Returns V clamped to be between A and B (inclusive)
	*/
	static InRange(Value: number,Min: number,Max: number,InclusiveMin: boolean,InclusiveMax: boolean): boolean;
	/**
	 * Returns the hypotenuse of a right-angled triangle given the width and height.
	*/
	static Hypotenuse(Width: number,Height: number): number;
	/**
	 * Converts a HSV linear color (where H is in R, S is in G, and V is in B) to RGB
	*/
	static HSVtoRGB(HSV: LinearColor,RGB?: LinearColor): {RGB: LinearColor};
	/**
	 * Make a color from individual color components (HSV space)
	*/
	static HSVToRGB(H: number,S: number,V: number,A: number): LinearColor;
	/**
	 * Snaps a value to the nearest grid multiple. E.g.,
	 *             Location = 5.1, GridSize = 10.0 : return value = 10.0
	 * If GridSize is 0 Location is returned
	 * if GridSize is very small precision issues may occur.
	*/
	static Snaptogrid(Location: number,GridSize: number): number;
	/**
	 * Returns result of vector A rotated by Rotator B
	*/
	static RotateVector(A: Vector,B: Rotator): Vector;
	/**
	 * Returns true if A is Greater than B (A >= B)
	*/
	static GreaterEqual_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	/**
	 * Returns true if A is greater than or equal to B (A >= B)
	*/
	static GreaterEqual_IntInt(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than or equal to B (A >= B)
	*/
	static GreaterEqual_FloatFloat(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A >= B)
	*/
	static GreaterEqual_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	/**
	 * Returns true if A is greater than or equal to B (A >= B)
	*/
	static GreaterEqual_ByteByte(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A > B)
	*/
	static Greater_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	/**
	 * Returns true if A is greater than B (A > B)
	*/
	static Greater_IntInt(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A > B)
	*/
	static Greater_FloatFloat(A: number,B: number): boolean;
	/**
	 * Returns true if A is Greater than B (A > B)
	*/
	static Greater_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	/**
	 * Returns true if A is greater than B (A > B)
	*/
	static Greater_ByteByte(A: number,B: number): boolean;
	/**
	 * Returns the year component of A
	*/
	static GetYear(A: DateTime): number;
	/**
	 * Breaks a vector apart into Yaw, Pitch rotation values given in degrees. (non-clamped)
	*/
	static GetYawPitchFromVector(InVec: Vector,Yaw?: number,Pitch?: number): {Yaw: number, Pitch: number};
	/**
	 * Find the average of an array of vectors
	*/
	static GetVectorArrayAverage(Vectors: Vector[]): Vector;
	/**
	 * Rotate the world up vector by the given rotation
	*/
	static GetUpVector(InRot: Rotator): Vector;
	/**
	 * Returns the total number of seconds in A
	*/
	static GetTotalSeconds(A: Timespan): number;
	/**
	 * Returns the total number of minutes in A
	*/
	static GetTotalMinutes(A: Timespan): number;
	/**
	 * Returns the total number of milliseconds in A
	*/
	static GetTotalMilliseconds(A: Timespan): number;
	/**
	 * Returns the total number of hours in A
	*/
	static GetTotalHours(A: Timespan): number;
	/**
	 * Returns the total number of days in A
	*/
	static GetTotalDays(A: Timespan): number;
	/**
	 * Returns the time elapsed since midnight of A
	*/
	static GetTimeOfDay(A: DateTime): Timespan;
	/**
	 * Returns the seconds component of A
	*/
	static GetSeconds(A: Timespan): number;
	/**
	 * Returns the second component of A
	*/
	static GetSecond(A: DateTime): number;
	/**
	 * Rotate the world right vector by the given rotation
	*/
	static GetRightVector(InRot: Rotator): Vector;
	/**
	 * Returns the value of PI
	*/
	static GetPI(): number;
	/**
	 * Returns the month component of A
	*/
	static GetMonth(A: DateTime): number;
	/**
	 * Returns the minutes component of A
	*/
	static GetMinutes(A: Timespan): number;
	/**
	 * Returns the minute component of A
	*/
	static GetMinute(A: DateTime): number;
	/**
	 * Find the minimum element (X, Y or Z) of a vector
	*/
	static GetMinElement(A: Vector): number;
	/**
	 * Returns the milliseconds component of A
	*/
	static GetMilliseconds(A: Timespan): number;
	/**
	 * Returns the millisecond component of A
	*/
	static GetMillisecond(A: DateTime): number;
	/**
	 * Find the maximum element (X, Y or Z) of a vector
	*/
	static GetMaxElement(A: Vector): number;
	/**
	 * Returns the hours component of A
	*/
	static GetHours(A: Timespan): number;
	/**
	 * Returns the hour component of A (12h format)
	*/
	static GetHour12(A: DateTime): number;
	/**
	 * Returns the hour component of A (24h format)
	*/
	static GetHour(A: DateTime): number;
	/**
	 * Rotate the world forward vector by the given rotation
	*/
	static GetForwardVector(InRot: Rotator): Vector;
	/**
	 * Returns the absolute value of A
	*/
	static GetDuration(A: Timespan): Timespan;
	/**
	 * Find the unit direction vector from one position to another.
	*/
	static GetDirectionVector(From: Vector,To: Vector): Vector;
	/**
	 * Returns the days component of A
	*/
	static GetDays(A: Timespan): number;
	/**
	 * Returns the day of year of A
	*/
	static GetDayOfYear(A: DateTime): number;
	/**
	 * Returns the day component of A (1 to 31)
	*/
	static GetDay(A: DateTime): number;
	/**
	 * Returns the date component of A
	*/
	static GetDate(A: DateTime): DateTime;
	/**
	 * Get the reference frame direction vectors (axes) described by this rotation
	*/
	static GetAxes(A: Rotator,X?: Vector,Y?: Vector,Z?: Vector): {X: Vector, Y: Vector, Z: Vector};
	/**
	 * Rounds A to an integer with truncation towards zero.  (e.g. -1.7 truncated to -1, 2.8 truncated to 2)
	*/
	static Truncate(A: number): number;
	/**
	 * Returns a time span that represents the specified number of seconds
	*/
	static FromSeconds(Seconds: number): Timespan;
	/**
	 * Returns a time span that represents the specified number of minutes
	*/
	static FromMinutes(Minutes: number): Timespan;
	/**
	 * Returns a time span that represents the specified number of milliseconds
	*/
	static FromMilliseconds(Milliseconds: number): Timespan;
	/**
	 * Returns a time span that represents the specified number of hours
	*/
	static FromHours(Hours: number): Timespan;
	/**
	 * Returns a time span that represents the specified number of days
	*/
	static FromDays(Days: number): Timespan;
	/**
	 * Returns the fractional part of a float.
	*/
	static Fraction(A: number): number;
	/**
	 * Returns the number of times Divisor will go into Dividend (i.e., Dividend divided by Divisor), as well as the remainder
	*/
	static Division(Dividend: number,Divisor: number,Remainder?: number): {Remainder: number, $: number};
	/**
	 * Returns the minimum value of A and B
	*/
	static Min(A: number,B: number): number;
	/**
	 * Returns the maximum value of A and B
	*/
	static Max(A: number,B: number): number;
	/**
	 * Returns a new rotation component value
	 * @param InCurrent is the current rotation value
	 * @param InDesired is the desired rotation value
	 * @param  is the rotation amount to apply
	 * @return a new rotation component value clamped in the range (-360,360)
	*/
	static FixedTurn(InCurrent: number,InDesired: number,InDeltaRate: number): number;
	/**
	 * Tries to reach Target at a constant rate.
	 * @param               Current                 Actual position
	 * @param               Target                  Target position
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static FInterpTo_Constant(Current: number,Target: number,DeltaTime: number,InterpSpeed: number): number;
	/**
	 * Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.
	 * @param               Current                 Actual position
	 * @param               Target                  Target position
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated position
	*/
	static FInterpTo(Current: number,Target: number,DeltaTime: number,InterpSpeed: number): number;
	/**
	 * Interpolate between A and B, applying an ease in/out function.  Exp controls the degree of the curve.
	*/
	static FInterpEaseInOut(A: number,B: number,Alpha: number,Exponent: number): number;
	/**
	 * Find a rotation for an object at Start location to point at Target location.
	*/
	static FindLookAtRotation(Start: Vector,Target: Vector): Rotator;
	/**
	 * Rounds A to the largest previous integer
	*/
	static Floor(A: number): number;
	/**
	 * Returns V clamped to be between A and B (inclusive)
	*/
	static Clamp(Value: number,Min: number,Max: number): number;
	/**
	 * Rounds A to the smallest following integer
	*/
	static FCeil(A: number): number;
	/**
	 * Returns exponential(e) to the power A (e^A)
	*/
	static Exp(A: number): number;
	/**
	 * Returns true if vector A is equal to vector B (A == B) within a specified error tolerance
	*/
	static Equal(A: Vector,B: Vector,ErrorTolerance: number): boolean;
	/**
	 * Returns true if transform A is equal to transform B
	*/
	static EqualTransform(A: Transform,B: Transform): boolean;
	/**
	 * Returns true if the values are equal (A == B)
	*/
	static Equal(A: Timespan,B: Timespan): boolean;
	/**
	 * Returns true if rotator A is equal to rotator B (A == B) within a specified error tolerance
	*/
	static Equal(A: Rotator,B: Rotator,ErrorTolerance: number): boolean;
	/**
	 * Returns true if A and B are equal (A == B)
	*/
	static Equal(A: UObject,B: UObject): boolean;
	/**
	 * Returns true if A and B are equal (A == B)
	*/
	static Equal(A: string,B: string): boolean;
	/**
	 * Returns true if A is equal to B (A == B)
	*/
	static Equal(A: number,B: number): boolean;
	/**
	 * Returns true if A is exactly equal to B (A == B)
	*/
	static Equal(A: number,B: number): boolean;
	/**
	 * Returns true if the values are equal (A == B)
	*/
	static Equal(A: DateTime,B: DateTime): boolean;
	/**
	 * Returns true if A and B are equal (A == B)
	*/
	static Equal(A: UnrealEngineClass,B: UnrealEngineClass): boolean;
	/**
	 * Returns true if A is equal to B (A == B)
	*/
	static Equal(A: number,B: number): boolean;
	/**
	 * Returns true if the values are equal (A == B)
	*/
	static EqualBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Easeing  between A and B using a specified easing function
	*/
	static Ease(A: number,B: number,Alpha: number,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): number;
	/**
	 * Returns the dot product of two 2d vectors
	*/
	static DotProduct(A: Vector2D,B: Vector2D): number;
	/**
	 * Returns the dot product of two 3d vectors
	*/
	static DotProduct(A: Vector,B: Vector): number;
	/**
	 * Vector divide by vector
	*/
	static Divide_VectorVector(A: Vector,B: Vector): Vector;
	/**
	 * Vector divide by an integer
	*/
	static Divide_VectorInt(A: Vector,B: number): Vector;
	/**
	 * Vector divide by a float
	*/
	static Divide_VectorFloat(A: Vector,B: number): Vector;
	/**
	 * Returns Vector A divided by B
	*/
	static Divide_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	/**
	 * Division (A / B)
	*/
	static Divide_IntInt(A: number,B: number): number;
	/**
	 * Division (A / B)
	*/
	static Divide_FloatFloat(A: number,B: number): number;
	/**
	 * Division (A / B)
	*/
	static Divide_ByteByte(A: number,B: number): number;
	/**
	 * Returns the tan of A (expects Degrees)
	*/
	static Tan(A: number): number;
	/**
	 * Returns the sin of A (expects Degrees)
	*/
	static Sin(A: number): number;
	/**
	 * Returns radians value based on the input degrees
	*/
	static DegreesToRadians(A: number): number;
	/**
	 * Returns the cos of A (expects Degrees)
	*/
	static Cos(A: number): number;
	/**
	 * Returns the inverse tan (atan2) of A/B (result is in Degrees)
	*/
	static Atan2(A: number,B: number): number;
	/**
	 * Returns the inverse tan (atan) (result is in Degrees)
	*/
	static Atan(A: number): number;
	/**
	 * Returns the inverse sin (arcsin) of A (result is in Degrees)
	*/
	static Asin(A: number): number;
	/**
	 * Returns the inverse cos (arccos) of A (result is in Degrees)
	*/
	static Acos(A: number): number;
	/**
	 * Returns the number of days in the given year
	*/
	static DaysInYear(Year: number): number;
	/**
	 * Returns the number of days in the given year and month
	*/
	static DaysInMonth(Year: number,Month: number): number;
	/**
	 * Returns the minimum date and time value
	*/
	static MinValue(): DateTime;
	/**
	 * Returns the maximum date and time value
	*/
	static MaxValue(): DateTime;
	/**
	 * Converts a date string to a DateTime object
	*/
	static DateTimeFromString(DateTimeString: string,Result?: DateTime): {Result: DateTime, $: boolean};
	/**
	 * Converts a date string in ISO-8601 format to a DateTime object
	*/
	static DateTimeFromIsoString(IsoString: string,Result?: DateTime): {Result: DateTime, $: boolean};
	/**
	 * Returns the cross product of two 2d vectors
	*/
	static CrossProduct(A: Vector2D,B: Vector2D): number;
	/**
	 * Returns the cross product of two 3d vectors
	*/
	static CrossProduct(A: Vector,B: Vector): Vector;
	/**
	 * Creates a directional vector from rotation values {Pitch, Yaw} supplied in degrees with specified Length
	*/
	static CreateVectorFromYawPitch(Yaw: number,Pitch: number,Length: number): Vector;
	/**
	 * Returns the cosine of A (expects Radians)
	*/
	static Cos(A: number): number;
	/**
	 * Returns the given transform, converted to be relative to the given ParentTransform.
	 * Example: AToB = ConvertTransformToRelative(AToWorld, BToWorld) to compute A relative to B.
	 * @param               Transform               The transform you wish to convert
	 * @param               ParentTransform The transform the conversion is relative to (in the same space as Transform)
	 * @return              The new relative transform
	*/
	static ConvertTransformToRelative(Transform: Transform,ParentTransform: Transform): Transform;
	/**
	 * Convert a Vector to a Vector2D
	*/
	static ToVector2D(InVector: Vector): Vector2D;
	/**
	 * Convert a vector to a transform. Uses vector as location
	*/
	static ToTransform(InLocation: Vector): Transform;
	/**
	 * Create a rotator which orients X along the supplied direction vector
	*/
	static RotationFromXVector(InVec: Vector): Rotator;
	/**
	 * Converts a vector to LinearColor
	*/
	static ToLinearColor(InVec: Vector): LinearColor;
	/**
	 * Convert a Vector2D to a Vector
	*/
	static ToVector(InVector2D: Vector2D,Z: number): Vector;
	/**
	 * Get the X direction vector after this rotation
	*/
	static GetRotationXVector(InRot: Rotator): Vector;
	/**
	 * Converts a LinearColor to a vector
	*/
	static ToVector(InLinearColor: LinearColor): Vector;
	/**
	 * Converts a LinearColor to a color
	*/
	static ToColor(InLinearColor: LinearColor): Color;
	/**
	 * Converts an integer to a float
	*/
	static ToFloat(InInt: number): number;
	/**
	 * Converts an integer to a byte (if the integer is too large, returns the low 8 bits)
	*/
	static ToByte(InInt: number): number;
	/**
	 * Converts a int to a bool
	*/
	static ToBool(InInt: number): boolean;
	/**
	 * Convert a float into a vector, where each element is that float
	*/
	static ToVector(InFloat: number): Vector;
	/**
	 * Convert a float into a LinearColor, where each element is that float
	*/
	static ToLinearColor(InFloat: number): LinearColor;
	/**
	 * Converts a color to LinearColor
	*/
	static ToLinearColor(InColor: Color): LinearColor;
	/**
	 * Converts a byte to an integer
	*/
	static ToInt(InByte: number): number;
	/**
	 * Converts a byte to a float
	*/
	static ToFloat(InByte: number): number;
	/**
	 * Converts a bool to an int
	*/
	static ToInt(InBool: boolean): number;
	/**
	 * Converts a bool to a float (0.0f or 1.0f)
	*/
	static ToFloat(InBool: boolean): number;
	/**
	 * Converts a bool to a byte
	*/
	static ToByte(InBool: boolean): number;
	/**
	 * Compose two transforms in order: A * B.
	 * Order matters when composing transforms:
	 * A * B will yield a transform that logically first applies A then B to any subsequent transformation.
	 * Example: LocalToWorld = ComposeTransforms(DeltaRotation, LocalToWorld) will change rotation in local space by DeltaRotation.
	 * Example: LocalToWorld = ComposeTransforms(LocalToWorld, DeltaRotation) will change rotation in world space by DeltaRotation.
	 * @return New transform: A * B
	*/
	static ComposeTransforms(A: Transform,B: Transform): Transform;
	/**
	 * Combine 2 rotations to give you the resulting rotation
	*/
	static CombineRotators(A: Rotator,B: Rotator): Rotator;
	/**
	 * Determine if a class is a child of another class.
	 * @return      true if TestClass == ParentClass, or if TestClass is a child of ParentClass; false otherwise, or if either
	 *                      the value for either parameter is 'None'.
	*/
	static ClassIsChildOf(TestClass: UnrealEngineClass,ParentClass: UnrealEngineClass): boolean;
	/**
	 * Clamp the vector size between a min and max length
	*/
	static ClampVectorSize(A: Vector,Min: number,Max: number): Vector;
	/**
	 * Clamps an angle to the range of [0, 360].
	 * @param Angle The angle to clamp.
	 * @return The clamped angle.
	*/
	static ClampAxis(Angle: number): number;
	/**
	 * Clamps an arbitrary angle to be between the given angles.  Will clamp to nearest boundary.
	 * @param MinAngleDegrees       "from" angle that defines the beginning of the range of valid angles (sweeping clockwise)
	 * @param MaxAngleDegrees       "to" angle that defines the end of the range of valid angles
	 * @return Returns clamped angle in the range -180..180.
	*/
	static ClampAngle(AngleDegrees: number,MinAngleDegrees: number,MaxAngleDegrees: number): number;
	/**
	 * Returns Value clamped to be between A and B (inclusive)
	*/
	static Clamp(Value: number,Min: number,Max: number): number;
	/**
	 * Interpolates towards a varying target color smoothly.
	 * @param               Current                 Current Color
	 * @param               Target                  Target Color
	 * @param               DeltaTime               Time since last tick
	 * @param               InterpSpeed             Interpolation speed
	 * @return              New interpolated Color
	*/
	static CInterpTo(Current: LinearColor,Target: LinearColor,DeltaTime: number,InterpSpeed: number): LinearColor;
	/**
	 * Breaks a 2D vector apart into X, Y.
	*/
	static BreakVector2D(InVec: Vector2D,X?: number,Y?: number): {X: number, Y: number};
	/**
	 * Breaks a vector apart into X, Y, Z
	*/
	static BreakVector(InVec: Vector,X?: number,Y?: number,Z?: number): {X: number, Y: number, Z: number};
	/**
	 * Breaks apart a transform into location, rotation and scale
	*/
	static BreakTransform(InTransform: Transform,Location?: Vector,Rotation?: Rotator,Scale?: Vector): {Location: Vector, Rotation: Rotator, Scale: Vector};
	/**
	 * Breaks a Timespan into its components
	*/
	static BreakTimespan(InTimespan: Timespan,Days?: number,Hours?: number,Minutes?: number,Seconds?: number,Milliseconds?: number): {Days: number, Hours: number, Minutes: number, Seconds: number, Milliseconds: number};
	/**
	 * Breaks apart a rotator into its component axes
	*/
	static BreakRotIntoAxes(InRot: Rotator,X?: Vector,Y?: Vector,Z?: Vector): {X: Vector, Y: Vector, Z: Vector};
	/**
	 * Breaks apart a rotator into {Roll, Pitch, Yaw} angles in degrees
	*/
	static BreakRotator(InRot: Rotator,Roll?: number,Pitch?: number,Yaw?: number): {Roll: number, Pitch: number, Yaw: number};
	/**
	 * Breaks apart a random number generator
	*/
	static BreakRandomStream(InRandomStream: RandomStream,InitialSeed?: number): {InitialSeed: number};
	/**
	 * Breaks a DateTime into its components
	*/
	static BreakDateTime(InDateTime: DateTime,Year?: number,Month?: number,Day?: number,Hour?: number,Minute?: number,Second?: number,Millisecond?: number): {Year: number, Month: number, Day: number, Hour: number, Minute: number, Second: number, Millisecond: number};
	/**
	 * Breaks apart a color into individual RGB components (as well as alpha)
	*/
	static BreakColor(InColor: LinearColor,R?: number,G?: number,B?: number,A?: number): {R: number, G: number, B: number, A: number};
	/**
	 * Returns the logical eXclusive OR of two values (A XOR B)
	*/
	static XORBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Returns the logical OR of two values (A OR B)
	*/
	static ORBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Returns the logical Not OR of two values (A NOR B)
	*/
	static NORBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Returns the logical NAND of two values (A AND B)
	*/
	static NANDBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Returns the logical AND of two values (A AND B)
	*/
	static ANDBoolean(A: boolean,B: boolean): boolean;
	/**
	 * Returns the inverse tan (atan2) of A/B (result is in Radians)
	*/
	static Atan2(A: number,B: number): number;
	/**
	 * Returns the inverse tan (atan) (result is in Radians)
	*/
	static Atan(A: number): number;
	/**
	 * Returns the inverse sine (arcsin) of A (result is in Radians)
	*/
	static Asin(A: number): number;
	/**
	 * Bitwise AND (A & B)
	*/
	static BitwiseAND(A: number,B: number): number;
	/**
	 * Vector addition
	*/
	static Add_VectorVector(A: Vector,B: Vector): Vector;
	/**
	 * Adds an integer to each component of a vector
	*/
	static Add_VectorInt(A: Vector,B: number): Vector;
	/**
	 * Adds a float to each component of a vector
	*/
	static Add_VectorFloat(A: Vector,B: number): Vector;
	/**
	 * Returns addition of Vector A and Vector B (A + B)
	*/
	static Add_Vector2DVector2D(A: Vector2D,B: Vector2D): Vector2D;
	/**
	 * Returns Vector A added by B
	*/
	static Add_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	/**
	 * Addition (A + B)
	*/
	static Add_TimespanTimespan(A: Timespan,B: Timespan): Timespan;
	/**
	 * Addition (A + B)
	*/
	static Add_IntInt(A: number,B: number): number;
	/**
	 * Addition (A + B)
	*/
	static Add_FloatFloat(A: number,B: number): number;
	/**
	 * Addition (A + B)
	*/
	static Add_DateTimeTimespan(A: DateTime,B: Timespan): DateTime;
	/**
	 * Addition (A + B)
	*/
	static Add_ByteByte(A: number,B: number): number;
	/**
	 * Returns the inverse cosine (arccos) of A (result is in Radians)
	*/
	static Acos(A: number): number;
	/**
	 * Returns the absolute (positive) value of A
	*/
	static Absolute(A: number): number;
	/**
	 * Returns the absolute (positive) value of A
	*/
	static Absolute(A: number): number;
}

declare class KismetNodeHelperLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetNodeHelperLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetNodeHelperLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetNodeHelperLibrary;
	static C(Other: UObject): KismetNodeHelperLibrary;
	/**
	 * Sets the bit at index "Index" in the data
	 * @param Data - The integer containing the bits that are being set
	 * @param Index - The bit index into the Data that we are setting
	*/
	static MarkBit(Data?: number,Index?: number): {Data: number};
	/**
	 * Returns whether there exists an unmarked bit in the data
	 * @param Data - The data being tested against
	 * @param NumBits - The logical number of bits we want to track
	 * @return - Whether there is a bit not marked in the data
	*/
	static HasUnmarkedBit(Data: number,NumBits: number): boolean;
	/**
	 * Returns whether there exists a marked bit in the data
	 * @param Data - The data being tested against
	 * @param NumBits - The logical number of bits we want to track
	 * @return - Whether there is a bit marked in the data
	*/
	static HasMarkedBit(Data: number,NumBits: number): boolean;
	/**
	 * @param Enum - Enumeration
	 * @param EnumeratorIndex - Input index
	 * @return - if EnumeratorIndex is valid return EnumeratorIndex, otherwise return MAX value of Enum
	*/
	static GetValidIndex(Enum: Enum,EnumeratorIndex: number): number;
	/**
	 * Gets an already unmarked bit and returns the bit index selected
	 * @param Data - The integer containing the bits that are being set
	 * @param StartIdx - The index to start with when determining the selection'
	 * @param NumBits - The logical number of bits we want to track
	 * @param bRandom - Whether to select a random index or not
	 * @return - The index that was selected (returns INDEX_NONE if there was no unmarked bits to choose from)
	*/
	static GetUnmarkedBit(Data: number,StartIdx: number,NumBits: number,bRandom: boolean): number;
	/**
	 * Gets a random not already marked bit and returns the bit index selected
	 * @param Data - The integer containing the bits that are being set
	 * @param NumBits - The logical number of bits we want to track
	 * @return - The index that was selected (returns INDEX_NONE if there was no unmarked bits to choose from)
	*/
	static GetRandomUnmarkedBit(Data: number,StartIdx: number,NumBits: number): number;
	/**
	 * Gets the first index not already marked starting from a specific index and returns the bit index selected
	 * @param Data - The integer containing the bits that are being set
	 * @param StartIdx - The index to start looking for an available index from
	 * @param NumBits - The logical number of bits we want to track
	 * @return - The index that was selected (returns INDEX_NONE if there was no unmarked bits to choose from)
	*/
	static GetFirstUnmarkedBit(Data: number,StartIdx: number,NumBits: number): number;
	/**
	 * Gets enumerator name as FString. Use DeisplayName when possible.
	 * @param Enum - Enumeration
	 * @param EnumeratorValue - Value of searched enumeration
	 * @return - name of the searched enumerator, or NAME_None
	*/
	static GetEnumeratorUserFriendlyName(Enum: Enum,EnumeratorValue: number): string;
	/**
	 * Gets enumerator name.
	 * @param Enum - Enumeration
	 * @param EnumeratorValue - Value of searched enumeration
	 * @return - name of the searched enumerator, or NAME_None
	*/
	static GetEnumeratorName(Enum: Enum,EnumeratorValue: number): string;
	/**
	 * Clears the bit at index "Index" in the data
	 * @param Data - The integer containing the bits that are being cleared
	 * @param Index - The bit index into the Data that we are clearing
	*/
	static ClearBit(Data?: number,Index?: number): {Data: number};
	/**
	 * Clears all of the bit in the data
	 * @param Data - The integer containing the bits that are being cleared
	*/
	static ClearAllBits(Data?: number): {Data: number};
	/**
	 * Returns whether the bit at index "Index" is set or not in the data
	 * @param Data - The integer containing the bits that are being tested against
	 * @param Index - The bit index into the Data that we are inquiring
	 * @return  - Whether the bit at index "Index" is set or not
	*/
	static BitIsMarked(Data: number,Index: number): boolean;
}

declare type ESearchCase = string;
declare type ESearchDir = string;
declare class KismetStringLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetStringLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetStringLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetStringLibrary;
	static C(Other: UObject): KismetStringLibrary;
	/**
	 * Removes trailing whitespace characters
	*/
	static TrimTrailing(SourceString: string): string;
	/**
	 * Removes whitespace characters from the front of this string.
	*/
	static Trim(SourceString: string): string;
	/**
	 * Returns a string converted to Upper case
	 * @param       SourceString    The string to convert
	 * @return      The string in upper case
	*/
	static ToUpper(SourceString: string): string;
	/**
	 * Returns a string converted to Lower case
	 * @param        SourceString    The string to convert
	 * @return       The string in lower case
	*/
	static ToLower(SourceString: string): string;
	/**
	 * Convert a number of seconds into minutes:seconds.milliseconds format string
	*/
	static TimeSecondsToString(InSeconds: number): string;
	/**
	 * Test whether this string starts with given string.
	 * @param SearchCase            Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase )
	 * @return true if this string begins with specified text, false otherwise
	*/
	static StartsWith(SourceString: string,InPrefix: string,SearchCase: ESearchCase): boolean;
	/**
	 * Splits this string at given string position case sensitive.
	 * @param InStr The string to search and split at
	 * @param LeftS out the string to the left of InStr, not updated if return is false
	 * @param RightS out the string to the right of InStr, not updated if return is false
	 * @param SearchCase             Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase )
	 * @param SearchDir                      Indicates whether the search starts at the begining or at the end ( defaults to ESearchDir::FromStart )
	 * @return true if string is split, otherwise false
	*/
	static Split(SourceString: string,InStr: string,LeftS?: string,RightS?: string,SearchCase?: ESearchCase,SearchDir?: ESearchDir): {LeftS: string, RightS: string, $: boolean};
	/**
	 * Right Pad
	 * * 이 스트링의 오른쪽에 지정된 글자만큼 여백을 메워넣습니다
	 * * @param       SourceString    여백을 메워넣을 스트링
	 * * @param       ChCount                 필요한 여백 양
	 * * @return      여백을 메워넣은 스트링
	*/
	static RightPad(SourceString: string,ChCount: number): string;
	/**
	 * @return the string to the right of the specified location, counting forward from the left (from the beginning of the word).
	*/
	static RightChop(SourceString: string,Count: number): string;
	/**
	 * @return the string to the right of the specified location, counting back from the right (end of the word).
	*/
	static Right(SourceString: string,Count: number): string;
	/**
	 * Returns a copy of this string, with the characters in reverse order
	*/
	static Reverse(SourceString: string): string;
	/**
	 * Replace all occurrences of SearchText with ReplacementText in this string.
	 * @param       SearchText      the text that should be removed from this string
	 * @param       ReplacementText         the text to insert in its place
	 * @param SearchCase    Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase )
	 * @return      the number of occurrences of SearchText that were replaced.
	*/
	static ReplaceInline(SourceString?: string,SearchText?: string,ReplacementText?: string,SearchCase?: ESearchCase): {SourceString: string, $: number};
	/**
	 * Replace all occurrences of a substring in this string
	 * @param From substring to replace
	 * @param To substring to replace From with
	 * @param SearchCase    Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase )
	 * @return a copy of this string with the replacement made
	*/
	static Replace(SourceString: string,From: string,To: string,SearchCase: ESearchCase): string;
	/**
	 * Gets an array of strings from a source string divided up by a separator and empty strings can optionally be culled.
	 * @param SourceString - The string to chop up
	 * @param Delimiter - The string to delimit on
	 * @param CullEmptyStrings = true - Cull (true) empty strings or add them to the array (false)
	 * @return The array of string that have been separated
	*/
	static ParseIntoArray(SourceString: string,Delimiter: string,CullEmptyStrings: boolean): string[];
	/**
	 * Test if the input string are not equal (A != B)
	 * @param A - The string to compare against
	 * @param B - The string to compare
	 * @return Returns true if the input strings are not equal, false if they are equal
	*/
	static NotEqual(A: string,B: string): boolean;
	/**
	 * Test if the input string are not equal (A != B), ignoring case differences
	 * @param A - The string to compare against
	 * @param B - The string to compare
	 * @return Returns true if the input strings are not equal, false if they are equal
	*/
	static NotEqual_StriStri(A: string,B: string): boolean;
	/**
	 * @return the substring from Start position for Count characters.
	*/
	static Mid(SourceString: string,Start: number,Count: number): string;
	/**
	 * Searches this string for a given wild card
	 * @param Wildcard              *?-type wildcard
	 * @param SearchCase    Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase )
	 * @return true if this string matches the *?-type wildcard given.
	 * @warning This is a simple, SLOW routine. Use with caution
	*/
	static MatchesWildcard(SourceString: string,Wildcard: string,SearchCase: ESearchCase): boolean;
	/**
	 * Returns the number of characters in the string
	 * @param SourceString - The string to measure
	 * @return The number of chars in the string
	*/
	static Len(S: string): number;
	/**
	 * Left Pad
	 * * 이 스트링의 왼쪽에 지정된 글자만큼 여백을 메워넣습니다
	 * * @param       SourceString    여백을 메워넣을 스트링
	 * * @param       ChCount                 필요한 여백 양
	 * * @return      여백을 메워넣은 스트링
	*/
	static LeftPad(SourceString: string,ChCount: number): string;
	/**
	 * @return the left most characters from the string chopping the given number of characters from the end
	*/
	static LeftChop(SourceString: string,Count: number): string;
	/**
	 * @return the left most given number of characters
	*/
	static Left(SourceString: string,Count: number): string;
	/**
	 * Concatenates an array of strings into a single string.
	 * @param SourceArray - The array of strings to concatenate.
	 * @param Separator - The string used to separate each element.
	 * @return The final, joined, separated string.
	*/
	static JoinStringArray(SourceArray: string[],Separator: string): string;
	/**
	 * Is Numeric
	 * \v* 스트링에 숫자만 들어있는지 검사합니다.
	 * * @param       SourceString    검사할 스트링
	 * * @return true, 스트링에 숫자만 들어있는 경우
	*/
	static IsNumeric(SourceString: string): boolean;
	/**
	 * Returns a substring from the string starting at the specified position
	 * @param SourceString - The string to get the substring from
	 * @param StartIndex - The location in SourceString to use as the start of the substring
	 * @param Length The length of the requested substring
	 * @return The requested substring
	*/
	static GetSubstring(SourceString: string,StartIndex: number,Length: number): string;
	/**
	 * Gets a single character from the string (as an integer)
	 * @param SourceString - The string to convert
	 * @param Index - Location of the character whose value is required
	 * @return The integer value of the character or 0 if index is out of range
	*/
	static GetCharacterAsNumber(SourceString: string,Index: number): number;
	/**
	 * Returns an array that contains one entry for each character in SourceString
	 * @param        SourceString    The string to break apart into characters
	 * @return       An array containing one entry for each character in SourceString
	*/
	static GetCharacterArrayFromString(SourceString: string): string[];
	/**
	 * Finds the starting index of a substring in the a specified string
	 * @param SearchIn The string to search within
	 * @param Substring The string to look for in the SearchIn string
	 * @param bUseCase Whether or not to be case-sensitive
	 * @param bSearchFromEnd Whether or not to start the search from the end of the string instead of the beginning
	 * @param StartPosition The position to start the search from
	 * @return The index (starting from 0 if bSearchFromEnd is false) of the first occurence of the substring
	*/
	static FindSubstring(SearchIn: string,Substring: string,bUseCase: boolean,bSearchFromEnd: boolean,StartPosition: number): number;
	/**
	 * Test if the input strings are equal (A == B)
	 * @param A - The string to compare against
	 * @param B - The string to compare
	 * @returns True if the strings are equal, false otherwise
	*/
	static Equal(A: string,B: string): boolean;
	/**
	 * Test if the input strings are equal (A == B), ignoring case
	 * @param A - The string to compare against
	 * @param B - The string to compare
	 * @returns True if the strings are equal, false otherwise
	*/
	static EqualEqual_StriStri(A: string,B: string): boolean;
	/**
	 * Test whether this string ends with given string.
	 * @param SearchCase            Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase )
	 * @return true if this string ends with specified text, false otherwise
	*/
	static EndsWith(SourceString: string,InSuffix: string,SearchCase: ESearchCase): boolean;
	/**
	 * Takes an array of strings and removes any zero length entries.
	 * @param       InArray The array to cull
	 * @return      The number of elements left in InArray
	*/
	static CullArray(SourceString: string,InArray?: string[]): {InArray: string[], $: number};
	/**
	 * Converts a vector value to a string, in the form 'X= Y= Z='
	*/
	static ToString(InVec: Vector): string;
	/**
	 * Converts a vector2d value to a string, in the form 'X= Y='
	*/
	static ToString(InVec: Vector2D): string;
	/**
	 * Converts a transform value to a string, in the form 'Translation: X= Y= Z= Rotation: P= Y= R= Scale: X= Y= Z='
	*/
	static ToString(InTrans: Transform): string;
	/**
	 * Converts a string to a name value
	*/
	static StringToName(InString: string): string;
	/**
	 * Converts a string to a int value
	*/
	static StringToInt(InString: string): number;
	/**
	 * Converts a string to a float value
	*/
	static StringToFloat(InString: string): number;
	/**
	 * Converts a rotator value to a string, in the form 'P= Y= R='
	*/
	static ToString(InRot: Rotator): string;
	/**
	 * Converts a UObject value to a string by calling the object's GetName method
	*/
	static ToString(InObj: UObject): string;
	/**
	 * Converts a name value to a string
	*/
	static ToString(InName: string): string;
	/**
	 * Converts an integer value to a string
	*/
	static ToString(InInt: number): string;
	/**
	 * Converts a float value to a string
	*/
	static ToString(InFloat: number): string;
	/**
	 * Converts a linear color value to a string, in the form '(R=,G=,B=,A=)'
	*/
	static ToString(InColor: LinearColor): string;
	/**
	 * Converts a byte value to a string
	*/
	static ToString(InByte: number): string;
	/**
	 * Converts a boolean value to a string, either 'true' or 'false'
	*/
	static ToString(InBool: boolean): string;
	/**
	 * Concatenates two strings together to make a new string
	 * @param A - The original string
	 * @param B - The string to append to A
	 * @returns A new string which is the concatenation of A+B
	*/
	static Append(A: string,B: string): string;
	/**
	 * Converts a vector2d->string, creating a new string in the form AppendTo+Prefix+InVector2d+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InVector2d - The vector2d value to convert. Uses the standard FVector2D::ToString conversion
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InVector2d: Vector2D,Suffix: string): string;
	/**
	 * Converts a vector->string, creating a new string in the form AppendTo+Prefix+InVector+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InVector - The vector value to convert. Uses the standard FVector::ToString conversion
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InVector: Vector,Suffix: string): string;
	/**
	 * Converts a rotator->string, creating a new string in the form AppendTo+Prefix+InRot+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InRot - The rotator value to convert. Uses the standard ToString conversion
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InRot: Rotator,Suffix: string): string;
	/**
	 * Converts a object->string, creating a new string in the form AppendTo+Prefix+object name+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InObj - The object to convert. Will insert the name of the object into the conversion string
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InObj: UObject,Suffix: string): string;
	/**
	 * Converts a color->string, creating a new string in the form AppendTo+Prefix+InName+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InName - The name value to convert
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InName: string,Suffix: string): string;
	/**
	 * Converts a int->string, creating a new string in the form AppendTo+Prefix+InInt+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InInt - The int value to convert
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InInt: number,Suffix: string): string;
	/**
	 * Converts a float->string, create a new string in the form AppendTo+Prefix+InFloat+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InFloat - The float value to convert
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InFloat: number,Suffix: string): string;
	/**
	 * Converts a color->string, creating a new string in the form AppendTo+Prefix+InColor+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InColor - The linear color value to convert. Uses the standard ToString conversion
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InColor: LinearColor,Suffix: string): string;
	/**
	 * Converts a boolean->string, creating a new string in the form AppendTo+Prefix+InBool+Suffix
	 * @param AppendTo - An existing string to use as the start of the conversion string
	 * @param Prefix - A string to use as a prefix, after the AppendTo string
	 * @param InBool - The bool value to convert. Will add "true" or "false" to the conversion string
	 * @param Suffix - A suffix to append to the end of the conversion string
	 * @return A new string built from the passed parameters
	*/
	static BuildString(AppendTo: string,Prefix: string,InBool: boolean,Suffix: string): string;
}

declare class CollisionResponseTemplate { 
	/**
	 * Name
	*/
	Name: string;
	/**
	 * Collision Enabled
	*/
	CollisionEnabled: ECollisionEnabled;
	/**
	 * Object Type Name
	*/
	ObjectTypeName: string;
	/**
	 * Types of objects that this physics objects will collide with.
	*/
	CustomResponses: ResponseChannel[];
	/**
	 * Help message for collision profile *
	*/
	HelpMessage: string;
	/**
	 * Help message for collision profile *
	*/
	bCanModify: boolean;
}

declare class CustomChannelSetup { 
	/**
	 * Which channel you'd like to customize *
	*/
	Channel: ECollisionChannel;
	/**
	 * Name of channel you'd like to show up *
	*/
	Name: string;
	/**
	 * Default Response for the channel
	*/
	DefaultResponse: ECollisionResponse;
	/**
	 * Sets meta data TraceType="1" for the enum entry if true. Otherwise, this channel will be treated as object query channel, so you can query object types*
	*/
	bTraceType: boolean;
	/**
	 * Specifies if this is static object. Otherwise it will be dynamic object. This is used for query all objects vs all static objects vs all dynamic objects *
	*/
	bStaticObject: boolean;
}

declare class CustomProfile { 
	/**
	 * Name
	*/
	Name: string;
	/**
	 * Types of objects that this physics objects will collide with.
	*/
	CustomResponses: ResponseChannel[];
}

declare class Redirector { 
	/**
	 * Old Name
	*/
	OldName: string;
	/**
	 * Types of objects that this physics objects will collide with.
	*/
	NewName: string;
}

declare class CollisionProfile extends DeveloperSettings { 
	/**
	 * This is hacky, but without this edit tag, we can't get valid property handle
	 * and we can't save them properly to config, so we need this tag.
	*/
	Profiles: CollisionResponseTemplate[];
	/**
	 * Default Channel Responses
	*/
	DefaultChannelResponses: CustomChannelSetup[];
	/**
	 * Edit Profiles
	*/
	EditProfiles: CustomProfile[];
	/**
	 * Profile Redirects
	*/
	ProfileRedirects: Redirector[];
	/**
	 * Collision Channel Redirects
	*/
	CollisionChannelRedirects: Redirector[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CollisionProfile;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CollisionProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CollisionProfile;
	static C(Other: UObject): CollisionProfile;
}

declare class KismetSystemLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetSystemLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetSystemLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetSystemLibrary;
	static C(Other: UObject): KismetSystemLibrary;
	/**
	 * Prints a stack trace to the log, so you can see how a blueprint got to this node
	*/
	static StackTrace(): void;
	/**
	 * Sweeps a sphere along the given line and returns the first hit encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param ObjectTypes   Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SphereTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns the first hit encountered.
	 * This finds objects belonging to the channels specified in the ObjectsToTrace input.
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param ObjectsToTrace        Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SingleSphereTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SphereTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SingleSphereTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns all hits encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param ObjectTypes   Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiSphereTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns all hits encountered.
	 * This finds objects belonging to the channels specified in the ObjectsToTrace input.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param ObjectsToTrace        Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiSphereTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns all hits encountered up to and including the first blocking hit.
	 * This trace finds the objects that RESPOND to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a blocking hit, false otherwise.
	*/
	static MultiSphereTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a sphere along the given line and returns all hits encountered up to and including the first blocking hit.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the sphere to sweep
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiSphereTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Returns an array of components that overlap the given sphere.
	 * @param WorldContext  World context
	 * @param SpherePos             Center of sphere.
	 * @param SphereRadius  Size of sphere.
	 * @param Filter                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors             Returned array of actors. Unsorted.
	 * @return                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static SphereOverlapComponents(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Sphere Overlap Components DEPRECATED
	*/
	static SphereOverlapComponents_DEPRECATED(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Returns an array of actors that overlap the given sphere.
	 * @param WorldContext  World context
	 * @param SpherePos             Center of sphere.
	 * @param SphereRadius  Size of sphere.
	 * @param Filter                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors             Returned array of actors. Unsorted.
	 * @return                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static SphereOverlapActors(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Sphere Overlap Actors DEPRECATED
	*/
	static SphereOverlapActors_DEPRECATED(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Displays the built-in leaderboard GUI (iOS and Android only; this function may be renamed or moved in a future release)
	*/
	static ShowPlatformSpecificLeaderboardScreen(CategoryName: string): void;
	/**
	 * Displays the built-in achievements GUI (iOS and Android only; this function may be renamed or moved in a future release)
	 * @param SpecificPlayer Specific player's achievements to show. May not be supported on all platforms. If null, defaults to the player with ControllerId 0
	*/
	static ShowPlatformSpecificAchievementsScreen(SpecificPlayer: PlayerController): void;
	/**
	 * Will show an ad banner (iAd on iOS, or AdMob on Android) on the top or bottom of screen, on top of the GL view (doesn't resize the view)
	 * (iOS and Android only)
	 * @param AdIdIndex The index of the ID to select for the add to show
	 * @param bShowOnBottomOfScreen If true, the iAd will be shown at the bottom of the screen, top otherwise
	*/
	static ShowAdBanner(AdIdIndex: number,bShowOnBottomOfScreen: boolean): void;
	/**
	 * Sets the game window title
	*/
	static SetWindowTitle(Title: string): void;
	/**
	 * Allows or inhibits system default handling of volume up and volume down buttons (Android only)
	 * @param       bEnabled                                If true, allow Android to handle volume up and down events
	*/
	static SetVolumeButtonsHandledBySystem(bEnabled: boolean): void;
	/**
	 * Set a VECTOR property by name
	*/
	static SetVectorPropertyByName(UObject: UObject,PropertyName: string,Value: Vector): void;
	/**
	 * Set a TRANSFORM property by name
	*/
	static SetTransformPropertyByName(UObject: UObject,PropertyName: string,Value: Transform): void;
	/**
	 * Set a TEXT property by name
	*/
	static SetTextPropertyByName(UObject: UObject,PropertyName: string,Value: string): void;
	/**
	 * Sets the state of the transition message rendered by the viewport. (The blue text displayed when the game is paused and so forth.)
	 * @param WorldContextObject    World context
	 * @param State                                 set true to supress transition message
	*/
	static SetSupressViewportTransitionMessage(WorldContextObject: UObject,bState: boolean): void;
	/**
	 * Set a custom structure property by name
	*/
	static SetStructurePropertyByName(UObject: UObject,PropertyName: string,Value: GenericStruct): void;
	/**
	 * Set a STRING property by name
	*/
	static SetStringPropertyByName(UObject: UObject,PropertyName: string,Value: string): void;
	/**
	 * Set a ROTATOR property by name
	*/
	static SetRotatorPropertyByName(UObject: UObject,PropertyName: string,Value: Rotator): void;
	/**
	 * Set an OBJECT property by name
	*/
	static SetObjectPropertyByName(UObject: UObject,PropertyName: string,Value: UObject): void;
	/**
	 * Set a NAME property by name
	*/
	static SetNamePropertyByName(UObject: UObject,PropertyName: string,Value: string): void;
	/**
	 * Set a LINEAR COLOR property by name
	*/
	static SetLinearColorPropertyByName(UObject: UObject,PropertyName: string,Value: LinearColor): void;
	/**
	 * Set an int32 property by name
	*/
	static SetIntPropertyByName(UObject: UObject,PropertyName: string,Value: number): void;
	/**
	 * Set a float property by name
	*/
	static SetFloatPropertyByName(UObject: UObject,PropertyName: string,Value: number): void;
	/**
	 * Set a CollisionProfileName property by name
	*/
	static SetCollisionProfileNameProperty(UObject: UObject,PropertyName: string,Value: CollisionProfileName): void;
	/**
	 * Set an OBJECT property by name
	*/
	static SetClassPropertyByName(UObject: UObject,PropertyName: string,Value: UnrealEngineClass): void;
	/**
	 * Set an uint8 or enum property by name
	*/
	static SetBytePropertyByName(UObject: UObject,PropertyName: string,Value: number): void;
	/**
	 * Set a bool property by name
	*/
	static SetBoolPropertyByName(UObject: UObject,PropertyName: string,Value: boolean): void;
	/**
	 * Set a ASSET property by name
	*/
	static SetAssetPropertyByName(UObject: UObject,PropertyName: string,Value: any): void;
	/**
	 * Set a ASSETCLASS property by name
	*/
	static SetAssetClassPropertyByName(UObject: UObject,PropertyName: string,Value: any): void;
	/**
	 * Perform a latent action with a retriggerable delay (specified in seconds).  Calling again while it is counting down will reset the countdown to Duration.
	 * @param WorldContext  World context.
	 * @param Duration              length of delay (in seconds).
	 * @param LatentInfo    The latent action.
	*/
	static RetriggerableDelay(WorldContextObject: UObject,Duration: number,LatentInfo: LatentActionInfo): void;
	/**
	 * * Resets the gamepad assignment to player controller id (Android only)
	*/
	static ResetGamepadAssignmentToController(ControllerId: number): void;
	/**
	 * Resets the gamepad to player controller id assignments (Android only)
	*/
	static ResetGamepadAssignments(): void;
	/**
	 * Requests permission to send remote notifications to the user's device.
	 * (iOS only)
	*/
	static RegisterForRemoteNotifications(): void;
	/**
	 * Exit the current game
	 * @param       SpecificPlayer  The specific player to quit the game. If not specified, player 0 will quit.
	*/
	static QuitGame(WorldContextObject: UObject,SpecificPlayer: PlayerController,QuitPreference: EQuitPreference): void;
	/**
	 * Prints a warning string to the log and the screen. Meant to be used as a way to inform the user that they misused the node.
	 * WARNING!! Don't change the signature of this function without fixing up all nodes using it in the compiler
	 * @param       InString                The string to log out
	*/
	static PrintWarning(InString: string): void;
	/**
	 * Prints text to the log, and optionally, to the screen
	 * If Print To Log is true, it will be visible in the Output Log window.  Otherwise it will be logged only as 'Verbose', so it generally won't show up.
	 * @param       InText                  The text to log out
	 * @param       bPrintToScreen  Whether or not to print the output to the screen
	 * @param       bPrintToLog             Whether or not to print the output to the log
	 * @param       bPrintToConsole Whether or not to print the output to the console
	 * @param       TextColor               Whether or not to print the output to the console
	 * @param       Duration                The display duration (if Print to Screen is True). Using negative number will result in loading the duration time from the config.
	*/
	static PrintText(WorldContextObject: UObject,InText: string,bPrintToScreen: boolean,bPrintToLog: boolean,TextColor: LinearColor,Duration: number): void;
	/**
	 * Prints a string to the log, and optionally, to the screen
	 * If Print To Log is true, it will be visible in the Output Log window.  Otherwise it will be logged only as 'Verbose', so it generally won't show up.
	 * @param       InString                The string to log out
	 * @param       bPrintToScreen  Whether or not to print the output to the screen
	 * @param       bPrintToLog             Whether or not to print the output to the log
	 * @param       bPrintToConsole Whether or not to print the output to the console
	 * @param       TextColor               Whether or not to print the output to the console
	 * @param       Duration                The display duration (if Print to Screen is True). Using negative number will result in loading the duration time from the config.
	*/
	static PrintString(WorldContextObject: UObject,InString: string,bPrintToScreen: boolean,bPrintToLog: boolean,TextColor: LinearColor,Duration: number): void;
	/**
	 * Interpolate a component to the specified relative location and rotation over the course of OverTime seconds.
	*/
	static MoveComponentTo(Component: SceneComponent,TargetRelativeLocation: Vector,TargetRelativeRotation: Rotator,bEaseOut: boolean,bEaseIn: boolean,OverTime: number,MoveAction: EMoveComponentAction,LatentInfo: LatentActionInfo): void;
	/**
	 * Creates a literal FText
	 * @param       Value   value to set the FText to
	 * @return      The literal FText
	*/
	static MakeLiteralText(Value: string): string;
	/**
	 * Creates a literal string
	 * @param       Value   value to set the string to
	 * @return      The literal string
	*/
	static MakeLiteralString(Value: string): string;
	/**
	 * Creates a literal name
	 * @param       Value   value to set the name to
	 * @return      The literal name
	*/
	static MakeLiteralName(Value: string): string;
	/**
	 * Creates a literal integer
	 * @param       Value   value to set the integer to
	 * @return      The literal integer
	*/
	static MakeLiteralInt(Value: number): number;
	/**
	 * Creates a literal float
	 * @param       Value   value to set the float to
	 * @return      The literal float
	*/
	static MakeLiteralFloat(Value: number): number;
	/**
	 * Creates a literal byte
	 * @param       Value   value to set the byte to
	 * @return      The literal byte
	*/
	static MakeLiteralByte(Value: number): number;
	/**
	 * Creates a literal bool
	 * @param       Value   value to set the bool to
	 * @return      The literal bool
	*/
	static MakeLiteralBool(Value: boolean): boolean;
	/**
	 * Does a collision trace along the given line and returns the first hit encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param ObjectTypes   Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static LineTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Does a collision trace along the given line and returns the first hit encountered.
	 * This finds objects belonging to the channels specified in the ObjectsToTrace input.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param ObjectsToTrace        Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SingleLineTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Does a collision trace along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static LineTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Does a collision trace along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPOND to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SingleLineTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Does a collision trace along the given line and returns all hits encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param ObjectTypes   Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiLineTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Does a collision trace along the given line and returns all hits encountered.
	 * This finds objects belonging to the channels specified in the ObjectsToTrace input.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param ObjectsToTrace        Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiLineTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Does a collision trace along the given line and returns all hits encountered up to and including the first blocking hit.
	 * This trace finds the objects that RESPOND to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param TraceChannel  The channel to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a blocking hit, false otherwise.
	*/
	static MultiLineTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Does a collision trace along the given line and returns all hits encountered up to and including the first blocking hit.
	 * This trace finds the objects that RESPOND to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiLineTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Opens the specified URL in the platform's web browser of choice
	*/
	static LaunchURL(URL: string): void;
	/**
	 * Resumes a paused timer from its current elapsed time.
	 * @param Handle                The handle of the timer to unpause.
	*/
	static UnpauseTimerbyHandle(WorldContextObject: UObject,Handle: TimerHandle): void;
	/**
	 * Resumes a paused timer from its current elapsed time.
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	*/
	static UnpauseTimerbyFunctionName(UObject: UObject,FunctionName: string): void;
	/**
	 * Returns true is a timer for the given handle exists, false otherwise.
	 * @param Handle                The handle to check whether it exists.
	 * @return                              True if the timer exists.
	*/
	static DoesTimerExistbyHandle(WorldContextObject: UObject,Handle: TimerHandle): boolean;
	/**
	 * Returns true is a timer for the given delegate exists, false otherwise.
	 * @param Object         Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName   Delegate function name. Can be a K2 function or a Custom Event.
	 * @return                               True if the timer exists.
	*/
	static DoesTimerExistbyFunctionName(UObject: UObject,FunctionName: string): boolean;
	/**
	 * Set a timer to execute delegate. Setting an existing timer will reset that timer with updated parameters.
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	 * @param Time                  How long to wait before executing the delegate, in seconds. Setting a timer to <= 0 seconds will clear it if it is set.
	 * @param bLooping              true to keep executing the delegate every Time seconds, false to execute delegate only once.
	 * @return                              The timer handle to pass to other timer functions to manipulate this timer.
	*/
	static SetTimerbyFunctionName(UObject: UObject,FunctionName: string,Time: number,bLooping: boolean): TimerHandle;
	/**
	 * Pauses a set timer at its current elapsed time.
	 * @param Handle                The handle of the timer to pause.
	*/
	static PauseTimerbyHandle(WorldContextObject: UObject,Handle: TimerHandle): void;
	/**
	 * Pauses a set timer at its current elapsed time.
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	*/
	static PauseTimerbyFunctionName(UObject: UObject,FunctionName: string): void;
	/**
	 * Returns whether the timer handle is valid. This does not indicate that there is an active timer that this handle references, but rather that it once referenced a valid timer.
	 * @param Handle                The handle of the timer to check validity of.
	 * @return                              Whether the timer handle is valid.
	*/
	static IsValid(Handle: TimerHandle): boolean;
	/**
	 * Returns true if a timer exists and is paused for the given handle, false otherwise.
	 * @param Handle                The handle of the timer to check whether it is paused.
	 * @return                              True if the timer exists and is paused.
	*/
	static IsTimerPausedbyHandle(WorldContextObject: UObject,Handle: TimerHandle): boolean;
	/**
	 * Returns true if a timer exists and is paused for the given delegate, false otherwise.
	 * @param Object         Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName   Delegate function name. Can be a K2 function or a Custom Event.
	 * @return                               True if the timer exists and is paused.
	*/
	static IsTimerPausedbyFunctionName(UObject: UObject,FunctionName: string): boolean;
	/**
	 * Returns true if a timer exists and is active for the given handle, false otherwise.
	 * @param Handle                The handle of the timer to check whether it is active.
	 * @return                              True if the timer exists and is active.
	*/
	static IsTimerActivebyHandle(WorldContextObject: UObject,Handle: TimerHandle): boolean;
	/**
	 * Returns true if a timer exists and is active for the given delegate, false otherwise.
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	 * @return                              True if the timer exists and is active.
	*/
	static IsTimerActivebyFunctionName(UObject: UObject,FunctionName: string): boolean;
	/**
	 * Returns whether the timer handle is valid. This does not indicate that there is an active timer that this handle references, but rather that it once referenced a valid timer.
	 * @param Handle                The handle of the timer to check validity of.
	 * @return                              Return the invalidated timer handle for convenience.
	*/
	static Invalidate(Handle?: TimerHandle): {Handle: TimerHandle, $: TimerHandle};
	/**
	 * Returns time until the timer will next execute its handle.
	 * @param Handle                The handle of the timer to time remaining of.
	 * @return                              How long is remaining in the current iteration of the timer.
	*/
	static GetTimerRemainingTimebyHandle(WorldContextObject: UObject,Handle: TimerHandle): number;
	/**
	 * Returns time until the timer will next execute its delegate.
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	 * @return                              How long is remaining in the current iteration of the timer.
	*/
	static GetTimerRemainingTimebyFunctionName(UObject: UObject,FunctionName: string): number;
	/**
	 * Returns elapsed time for the given handle (time since current countdown iteration began).
	 * @param Handle                The handle of the timer to get the elapsed time of.
	 * @return                              How long has elapsed since the current iteration of the timer began.
	*/
	static GetTimerElapsedTimebyHandle(WorldContextObject: UObject,Handle: TimerHandle): number;
	/**
	 * Returns elapsed time for the given delegate (time since current countdown iteration began).
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	 * @return                              How long has elapsed since the current iteration of the timer began.
	*/
	static GetTimerElapsedTimebyFunctionName(UObject: UObject,FunctionName: string): number;
	/**
	 * Clears a set timer.
	 * @param Handle                The handle of the timer to clear.
	*/
	static ClearTimerbyHandle(WorldContextObject: UObject,Handle: TimerHandle): void;
	/**
	 * Clears a set timer.
	 * @param Object                Object that implements the delegate function. Defaults to self (this blueprint)
	 * @param FunctionName  Delegate function name. Can be a K2 function or a Custom Event.
	*/
	static ClearTimerbyFunctionName(UObject: UObject,FunctionName: string): void;
	/**
	 * Return true if the class is usable : non-null and not pending kill
	*/
	static IsValidClass(Class: UnrealEngineClass): boolean;
	/**
	 * Return true if the object is usable : non-null and not pending kill
	*/
	static IsValid(UObject: UObject): boolean;
	/**
	 * Returns whether the world this object is in is the host or not
	*/
	static IsServer(WorldContextObject: UObject): boolean;
	/**
	 * Returns whether this is a build that is packaged for distribution
	*/
	static IsPackagedForDistribution(): boolean;
	/**
	 * Returns whether the player is logged in to the currently active online subsystem.
	 * @param Player Specific player's login status to get. May not be supported on all platforms. If null, defaults to the player with ControllerId 0.
	*/
	static IsLoggedIn(SpecificPlayer: PlayerController): boolean;
	/**
	 * Returns whether this is running on a dedicated server
	*/
	static IsDedicatedServer(WorldContextObject: UObject): boolean;
	/**
	 * Returns true if controller id assigned to a gamepad (Android only)
	*/
	static IsControllerAssignedToGamepad(ControllerId: number): boolean;
	/**
	 * Hides the ad banner (iAd on iOS, or AdMob on Android). Will force close the ad if it's open
	 * (iOS and Android only)
	*/
	static HideAdBanner(): void;
	/**
	 * Returns true if system default handling of volume up and volume down buttons enabled (Android only)
	*/
	static GetVolumeButtonsHandledBySystem(): boolean;
	/**
	 * Returns the platform specific unique device id
	*/
	static GetUniqueDeviceId(): string;
	/**
	 * Gets the list of support fullscreen resolutions.
	 * @return true if successfully queried the device for available resolutions.
	*/
	static GetSupportedFullscreenResolutions(Resolutions?: IntPoint[]): {Resolutions: IntPoint[], $: boolean};
	/**
	 * Get the clamped state of r.MaterialQualityLevel, see console variable help (allows for scalability, cannot be used in construction scripts)
	 * 0: low
	 * 1: high
	 * 2: medium
	*/
	static GetRenderingMaterialQualityLevel(): number;
	/**
	 * Get the clamped state of r.DetailMode, see console variable help (allows for scalability, cannot be used in construction scripts)
	 * 0: low, show only object with DetailMode low or higher
	 * 1: medium, show all object with DetailMode medium or higher
	 * 2: high, show all objects
	*/
	static GetRenderingDetailMode(): number;
	/**
	 * Returns an array of the user's preferred languages in order of preference
	 * @return An array of language IDs ordered from most preferred to least
	*/
	static GetPreferredLanguages(): string[];
	/**
	 * Get the current user name from the OS
	*/
	static GetPlatformUserName(): string;
	/**
	 * Returns the actual object name.
	*/
	static GetObjectName(UObject: UObject): string;
	/**
	 * Returns the currency symbol associated with the device's locale
	 * @return the currency symbol associated with the device's locale
	*/
	static GetLocalCurrencySymbol(): string;
	/**
	 * Returns the currency code associated with the device's locale
	 * @return the currency code associated with the device's locale
	*/
	static GetLocalCurrencyCode(): string;
	/**
	 * Get the current game time, in seconds. This stops when the game is paused and is affected by slomo.
	 * @param WorldContextObject    World context
	*/
	static GetGameTimeInSeconds(WorldContextObject: UObject): number;
	/**
	 * Get the name of the current game
	*/
	static GetGameName(): string;
	/**
	 * Engine build number, for displaying to end users.
	*/
	static GetEngineVersion(): string;
	/**
	 * Returns the display name (or actor label), for displaying as a debugging aid.
	 * Note: In editor builds, this is the actor label.  In non-editor builds, this is the actual object name.  This function should not be used to uniquely identify actors!
	 * It is not localized and should not be used for display to an end user of a game.
	*/
	static GetDisplayName(UObject: UObject): string;
	/**
	 * Get bounds
	*/
	static GetComponentBounds(Component: SceneComponent,Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	/**
	 * Returns the display name of a class
	*/
	static GetDisplayName(Class: UnrealEngineClass): string;
	/**
	 * Retrieves the total number of Ad IDs that can be selected between
	*/
	static GetAdIDCount(): number;
	/**
	 * Returns an array of unique actors represented by the given list of components.
	 * @param ComponentList         List of components.
	 * @param ClassFilter           If set, will only return results of this class or subclasses of it.
	 * @param OutActorList          Start of line segment.
	*/
	static GetActorListFromComponentList(ComponentList: PrimitiveComponent[],ActorClassFilter: UnrealEngineClass,OutActorList?: Actor[]): {OutActorList: Actor[]};
	/**
	 * Get Actor Bounds
	*/
	static GetActorBounds(Actor: Actor,Origin?: Vector,BoxExtent?: Vector): {Origin: Vector, BoxExtent: Vector};
	/**
	 * Forces closed any displayed ad. Can lead to loss of revenue
	 * (iOS and Android only)
	*/
	static ForceCloseAdBanner(): void;
	/**
	 * Flush all persistent debug lines and shapes.
	 * @param WorldContext  World context
	*/
	static FlushPersistentDebugLines(WorldContextObject: UObject): void;
	/**
	 * Removes all debug strings.
	 * @param WorldContext  World context
	*/
	static FlushDebugStrings(WorldContextObject: UObject): void;
	/**
	 * Executes a console command, optionally on a specific controller
	 * @param       Command                 Command to send to the console
	 * @param       SpecificPlayer  If specified, the console command will be routed through the specified player
	*/
	static ExecuteConsoleCommand(WorldContextObject: UObject,Command: string,SpecificPlayer: PlayerController): void;
	/**
	 * Draw a debug string at a 3d world location.
	*/
	static DrawDebugString(WorldContextObject: UObject,TextLocation: Vector,Text: string,TestBaseActor: Actor,TextColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug sphere
	*/
	static DrawDebugSphere(WorldContextObject: UObject,Center: Vector,Radius: number,Segments: number,LineColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug point
	*/
	static DrawDebugPoint(WorldContextObject: UObject,Position: Vector,Size: number,PointColor: LinearColor,Duration: number): void;
	/**
	 * Draws a debug plane.
	*/
	static DrawDebugPlane(WorldContextObject: UObject,PlaneCoordinates: Plane,Location: Vector,Size: number,PlaneColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug line
	*/
	static DrawDebugLine(WorldContextObject: UObject,LineStart: Vector,LineEnd: Vector,LineColor: LinearColor,Duration: number,Thickness: number): void;
	/**
	 * Draws a debug frustum.
	*/
	static DrawDebugFrustum(WorldContextObject: UObject,FrustumTransform: Transform,FrustumColor: LinearColor,Duration: number): void;
	/**
	 * Draws a 2D Histogram of size 'DrawSize' based FDebugFloatHistory struct, using DrawTransform for the position in the world.
	*/
	static DrawDebugFloatHistoryTransform(WorldContextObject: UObject,FloatHistory: DebugFloatHistory,DrawTransform: Transform,DrawSize: Vector2D,DrawColor: LinearColor,Duration: number): void;
	/**
	 * Draws a 2D Histogram of size 'DrawSize' based FDebugFloatHistory struct, using DrawLocation for the location in the world, rotation will face camera of first player.
	*/
	static DrawDebugFloatHistoryLocation(WorldContextObject: UObject,FloatHistory: DebugFloatHistory,DrawLocation: Vector,DrawSize: Vector2D,DrawColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug cylinder
	*/
	static DrawDebugCylinder(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,Segments: number,LineColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug coordinate system.
	*/
	static DrawDebugCoordinateSystem(WorldContextObject: UObject,AxisLoc: Vector,AxisRot: Rotator,Scale: number,Duration: number): void;
	/**
	 * Draw a debug cone
	 * Angles are specified in degrees
	*/
	static DrawDebugCone(WorldContextObject: UObject,Origin: Vector,Direction: Vector,Length: number,AngleWidth: number,AngleHeight: number,NumSides: number,LineColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug cone
	*/
	static DrawDebugCone(WorldContextObject: UObject,Origin: Vector,Direction: Vector,Length: number,AngleWidth: number,AngleHeight: number,NumSides: number,LineColor: LinearColor): void;
	/**
	 * Draw a debug circle!
	*/
	static DrawDebugCircle(WorldContextObject: UObject,Center: Vector,Radius: number,NumSegments: number,LineColor: LinearColor,Duration: number,Thickness: number,YAxis: Vector,ZAxis: Vector,bDrawAxis: boolean): void;
	/**
	 * Draw a debug capsule
	*/
	static DrawDebugCapsule(WorldContextObject: UObject,Center: Vector,HalfHeight: number,Radius: number,Rotation: Rotator,LineColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug camera shape.
	*/
	static DrawDebugCamera(CameraActor: CameraActor,CameraColor: LinearColor,Duration: number): void;
	/**
	 * Draw a debug box
	*/
	static DrawDebugBox(WorldContextObject: UObject,Center: Vector,Extent: Vector,LineColor: LinearColor,Rotation: Rotator,Duration: number): void;
	/**
	 * Draw directional arrow, pointing from LineStart to LineEnd.
	*/
	static DrawDebugArrow(WorldContextObject: UObject,LineStart: Vector,LineEnd: Vector,ArrowSize: number,LineColor: LinearColor,Duration: number): void;
	/**
	 * Does Implement Interface
	*/
	static DoesImplementInterface(TestObject: UObject,Interface: UnrealEngineClass): boolean;
	/**
	 * Perform a latent action with a delay (specified in seconds).  Calling again while it is counting down will be ignored.
	 * @param WorldContext  World context.
	 * @param Duration              length of delay (in seconds).
	 * @param LatentInfo    The latent action.
	*/
	static Delay(WorldContextObject: UObject,Duration: number,LatentInfo: LatentActionInfo): void;
	/**
	 * Mark as modified.
	*/
	static CreateCopyForUndoBuffer(ObjectToModify: UObject): void;
	/**
	 * Conv Asset to Object
	*/
	static Conv_AssetToObject(Asset: any): UObject;
	/**
	 * Conv Asset Class to Class
	*/
	static Conv_AssetClassToClass(AssetClass: any): UnrealEngineClass;
	/**
	 * Allows or inhibits screensaver
	 * @param       bAllowScreenSaver               If false, don't allow screensaver if possible, otherwise allow default behavior
	*/
	static ControlScreensaver(bAllowScreenSaver: boolean): void;
	/**
	 * Returns an array of components that overlap the given component.
	 * @param Component                             Component to test with.
	 * @param ComponentTransform    Defines where to place the component for overlap testing.
	 * @param Filter                                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter                   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors                             Returned array of actors. Unsorted.
	 * @return                                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static ComponentOverlapComponents(Component: PrimitiveComponent,ComponentTransform: Transform,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Component Overlap Components DEPRECATED
	*/
	static ComponentOverlapComponents_DEPRECATED(Component: PrimitiveComponent,ComponentTransform: Transform,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Returns an array of actors that overlap the given component.
	 * @param Component                             Component to test with.
	 * @param ComponentTransform    Defines where to place the component for overlap testing.
	 * @param Filter                                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter                   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors                             Returned array of actors. Unsorted.
	 * @return                                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static ComponentOverlapActors(Component: PrimitiveComponent,ComponentTransform: Transform,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Component Overlap Actors DEPRECATED
	*/
	static ComponentOverlapActors_DEPRECATED(Component: PrimitiveComponent,ComponentTransform: Transform,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Deletes all unreferenced objects, keeping only referenced objects (this command will be queued and happen at the end of the frame)
	 * Note: This can be a slow operation, and should only be performed where a hitch would be acceptable
	*/
	static CollectGarbage(): void;
	/**
	 * Sweeps a capsule along the given line and returns the first hit encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param ObjectTypes   Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static CapsuleTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns the first hit encountered.
	 * This finds objects belonging to the channels specified in the ObjectsToTrace input.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param ObjectsToTrace        Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SingleCapsuleTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPOND to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static CapsuleTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                Properties of the trace hit.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static SingleCapsuleTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns all hits encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param ObjectTypes   Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiCapsuleTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns all hits encountered.
	 * This finds objects belonging to the channels specified in the ObjectsToTrace input.
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param ObjectsToTrace        Array of Object Types to trace
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiCapsuleTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns all hits encountered up to and including the first blocking hit.
	 * This trace finds the objects that RESPOND to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a blocking hit, false otherwise.
	*/
	static MultiCapsuleTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a capsule along the given line and returns all hits encountered up to and including the first blocking hit.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param WorldContext  World context
	 * @param Start                 Start of line segment.
	 * @param End                   End of line segment.
	 * @param Radius                Radius of the capsule to sweep
	 * @param HalfHeight    Distance from center of capsule to tip of hemisphere endcap.
	 * @param TraceChannel
	 * @param bTraceComplex True to test against complex collision, false to test against simplified collision.
	 * @param OutHits               A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                              True if there was a hit, false otherwise.
	*/
	static MultiCapsuleTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Returns an array of components that overlap the given capsule.
	 * @param WorldContext  World context
	 * @param CapsulePos    Center of the capsule.
	 * @param Radius                Radius of capsule hemispheres and radius of center cylinder portion.
	 * @param HalfHeight    Half-height of the capsule (from center of capsule to tip of hemisphere.
	 * @param Filter                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors             Returned array of actors. Unsorted.
	 * @return                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static CapsuleOverlapComponents(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Capsule Overlap Components DEPRECATED
	*/
	static CapsuleOverlapComponents_DEPRECATED(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Returns an array of actors that overlap the given capsule.
	 * @param WorldContext  World context
	 * @param CapsulePos    Center of the capsule.
	 * @param Radius                Radius of capsule hemispheres and radius of center cylinder portion.
	 * @param HalfHeight    Half-height of the capsule (from center of capsule to tip of hemisphere.
	 * @param Filter                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors             Returned array of actors. Unsorted.
	 * @return                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static CapsuleOverlapActors(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Capsule Overlap Actors DEPRECATED
	*/
	static CapsuleOverlapActors_DEPRECATED(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Sweeps a box along the given line and returns the first hit encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param Start                  Start of line segment.
	 * @param End                    End of line segment.
	 * @param Orientation
	 * @param HalfSize               Radius of the sphere to sweep
	 * @param ObjectTypes    Array of Object Types to trace
	 * @param bTraceComplex  True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                 Properties of the trace hit.
	 * @return                               True if there was a hit, false otherwise.
	*/
	static BoxTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a box along the given line and returns the first blocking hit encountered.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param Start                  Start of line segment.
	 * @param End                    End of line segment.
	 * @param HalfSize           Distance from the center of box along each axis
	 * @param Orientation    Orientation of the box
	 * @param TraceChannel
	 * @param bTraceComplex  True to test against complex collision, false to test against simplified collision.
	 * @param OutHit                 Properties of the trace hit.
	 * @return                               True if there was a hit, false otherwise.
	*/
	static BoxTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	/**
	 * Sweeps a box along the given line and returns all hits encountered.
	 * This only finds objects that are of a type specified by ObjectTypes.
	 * @param Start                  Start of line segment.
	 * @param End                    End of line segment.
	 * @param Orientation
	 * @param HalfSize               Radius of the sphere to sweep
	 * @param ObjectTypes    Array of Object Types to trace
	 * @param bTraceComplex  True to test against complex collision, false to test against simplified collision.
	 * @param OutHits                A list of hits, sorted along the trace from start to finish.  The blocking hit will be the last hit, if there was one.
	 * @return                               True if there was a hit, false otherwise.
	*/
	static MultiBoxTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Sweeps a box along the given line and returns all hits encountered.
	 * This trace finds the objects that RESPONDS to the given TraceChannel
	 * @param Start                  Start of line segment.
	 * @param End                    End of line segment.
	 * @param HalfSize           Distance from the center of box along each axis
	 * @param Orientation    Orientation of the box
	 * @param TraceChannel
	 * @param bTraceComplex  True to test against complex collision, false to test against simplified collision.
	 * @param OutHits                A list of hits, sorted along the trace from start to finish. The blocking hit will be the last hit, if there was one.
	 * @return                               True if there was a blocking hit, false otherwise.
	*/
	static MultiBoxTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	/**
	 * Returns an array of components that overlap the given axis-aligned box.
	 * @param WorldContext  World context
	 * @param BoxPos                Center of box.
	 * @param BoxExtent             Extents of box.
	 * @param Filter                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors             Returned array of actors. Unsorted.
	 * @return                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static BoxOverlapComponents(WorldContextObject: UObject,BoxPos: Vector,Extent: Vector,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Box Overlap Components DEPRECATED
	*/
	static BoxOverlapComponents_DEPRECATED(WorldContextObject: UObject,BoxPos: Vector,Extent: Vector,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	/**
	 * Returns an array of actors that overlap the given axis-aligned box.
	 * @param WorldContext  World context
	 * @param BoxPos                Center of box.
	 * @param BoxExtent             Extents of box.
	 * @param Filter                Option to restrict results to only static or only dynamic.  For efficiency.
	 * @param ClassFilter   If set, will only return results of this class or subclasses of it.
	 * @param ActorsToIgnore                Ignore these actors in the list
	 * @param OutActors             Returned array of actors. Unsorted.
	 * @return                              true if there was an overlap that passed the filters, false otherwise.
	*/
	static BoxOverlapActors(WorldContextObject: UObject,BoxPos: Vector,BoxExtent: Vector,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Box Overlap Actors DEPRECATED
	*/
	static BoxOverlapActors_DEPRECATED(WorldContextObject: UObject,BoxPos: Vector,BoxExtent: Vector,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	/**
	 * Add Float History Sample
	*/
	static AddFloatHistorySample(Value: number,FloatHistory: DebugFloatHistory): DebugFloatHistory;
}

declare class FormatTextArgument { 
	/**
	 * Argument Name
	*/
	ArgumentName: string;
	/**
	 * Text Value
	*/
	TextValue: string;
}

declare type ERoundingMode = string;
declare class KismetTextLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetTextLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetTextLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetTextLibrary;
	static C(Other: UObject): KismetTextLibrary;
	/**
	 * Removes trailing whitespace characters.
	*/
	static TextTrimTrailing(InText: string): string;
	/**
	 * Removes whitespace characters from the front and end of the text.
	*/
	static TextTrimPrecedingAndTrailing(InText: string): string;
	/**
	 * Removes whitespace characters from the front of the text.
	*/
	static TextTrimPreceding(InText: string): string;
	/**
	 * Returns true if text is transient.
	*/
	static TextIsTransient(InText: string): boolean;
	/**
	 * Returns true if text is empty.
	*/
	static TextIsEmpty(InText: string): boolean;
	/**
	 * Returns true if text is culture invariant.
	*/
	static TextIsCultureInvariant(InText: string): boolean;
	/**
	 * Returns true if A and B are linguistically not equal (A != B).
	*/
	static NotEqual(A: string,B: string): boolean;
	/**
	 * Returns true if A and B are linguistically not equal (A != B), ignoring case.
	*/
	static NotEqual_IgnoreCase_TextText(A: string,B: string): boolean;
	/**
	 * Returns an empty piece of text.
	*/
	static GetEmptyText(): string;
	/**
	 * Used for formatting text using the FText::Format function and utilized by the UK2Node_FormatText
	*/
	static Format(InPattern: string,InArgs: FormatTextArgument[]): string;
	/**
	 * Attempts to find existing Text using the representation found in the loc tables for the specified namespace and key.
	*/
	static FindTextInLocalizationTable(Namespace: string,Key: string,OutText?: string): {OutText: string, $: boolean};
	/**
	 * Returns true if A and B are linguistically equal (A == B).
	*/
	static Equal(A: string,B: string): boolean;
	/**
	 * Returns true if A and B are linguistically equal (A == B), ignoring case.
	*/
	static EqualEqual_IgnoreCase_TextText(A: string,B: string): boolean;
	/**
	 * Converts localizable text to the string
	*/
	static ToString(InText: string): string;
	/**
	 * Converts string to localizable text
	*/
	static ToText(InString: string): string;
	/**
	 * Converts string to localizable text
	*/
	static ToText(InName: string): string;
	/**
	 * Converts a passed in integer to a text based on formatting options
	*/
	static ToText(Value: number,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number): string;
	/**
	 * Converts a passed in float to a text based on formatting options
	*/
	static ToText(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number): string;
	/**
	 * Converts a byte value to text
	*/
	static ToText(Value: number): string;
	/**
	 * Converts a boolean value to text, either 'true' or 'false'
	*/
	static ToText(InBool: boolean): string;
	/**
	 * Converts a passed in time span to a text, formatted as a time span
	*/
	static AsTimespan(InTimespan: Timespan): string;
	/**
	 * Converts a passed in date & time to a text, formatted as a time
	*/
	static AsTime(In: DateTime): string;
	/**
	 * Converts a passed in float to a text, formatted as a percent
	*/
	static AsPercent(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number): string;
	/**
	 * Converts a passed in date & time to a text, formatted as a date & time
	*/
	static AsDateTime(In: DateTime): string;
	/**
	 * Converts a passed in date & time to a text, formatted as a date
	*/
	static AsDate(InDateTime: DateTime): string;
	/**
	 * Converts a passed in integer to a text formatted as a currency
	*/
	static AsCurrency(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number,CurrencyCode: string): string;
	/**
	 * Converts a passed in float to a text formatted as a currency
	*/
	static AsCurrency(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number,CurrencyCode: string): string;
}

declare class VisualLoggerKismetLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerKismetLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerKismetLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerKismetLibrary;
	static C(Other: UObject): VisualLoggerKismetLibrary;
	/**
	 * Logs simple text string with Visual Logger - recording for Visual Logs has to be enabled to record this data
	*/
	static LogText(WorldContextObject: UObject,Text: string,LogCategory: string): void;
	/**
	 * Logs location as sphere with given radius - recording for Visual Logs has to be enabled to record this data
	*/
	static LogLocation(WorldContextObject: UObject,Location: Vector,Text: string,ObjectColor: LinearColor,Radius: number,LogCategory: string): void;
	/**
	 * Logs box shape - recording for Visual Logs has to be enabled to record this data
	*/
	static LogBoxShape(WorldContextObject: UObject,BoxShape: Box,Text: string,ObjectColor: LinearColor,LogCategory: string): void;
}

declare class BakedStateExitTransition { 
	/**
	 * The node property index for this rule
	*/
	CanTakeDelegateIndex: number;
	/**
	 * The blend graph result node index
	*/
	CustomResultNodeIndex: number;
	/**
	 * The index into the machine table of transitions
	*/
	TransitionIndex: number;
	/**
	 * For transitions that go automatically at the end of the sequence, this is the index for the sole sequence player node in the graph
	*/
	StateSequencePlayerToQueryIndex: number;
	/**
	 * What the transition rule node needs to return to take this transition (for bidirectional transitions)
	*/
	bDesiredTransitionReturnValue: boolean;
	/**
	 * Pose Evaluator Links
	*/
	PoseEvaluatorLinks: number[];
}

declare class BakedAnimationState { 
	/**
	 * The name of this state
	*/
	StateName: string;
	/**
	 * Set of legal transitions out of this state; already in priority order
	*/
	Transitions: BakedStateExitTransition[];
	/**
	 * The root node index (into the AnimNodeProperties array of the UAnimBlueprintGeneratedClass)
	*/
	StateRootNodeIndex: number;
	/**
	 * Start Notify
	*/
	StartNotify: number;
	/**
	 * End Notify
	*/
	EndNotify: number;
	/**
	 * Fully Blended Notify
	*/
	FullyBlendedNotify: number;
	/**
	 * Is AConduit
	*/
	bIsAConduit: boolean;
	/**
	 * Entry Rule Node Index
	*/
	EntryRuleNodeIndex: number;
	/**
	 * Indices into the property array for player nodes in the state
	*/
	PlayerNodeIndices: number[];
}

declare class AnimationStateBase { 
	/**
	 * The name of this state
	*/
	StateName: string;
}

declare class AnimationTransitionBetweenStates extends AnimationStateBase { 
	/**
	 * Transition-only: State being transitioned from
	*/
	PreviousState: number;
	/**
	 * Transition-only: State being transitioned to
	*/
	NextState: number;
	/**
	 * Crossfade Duration
	*/
	CrossfadeDuration: number;
	/**
	 * Start Notify
	*/
	StartNotify: number;
	/**
	 * End Notify
	*/
	EndNotify: number;
	/**
	 * Interrupt Notify
	*/
	InterruptNotify: number;
	/**
	 * Blend Mode
	*/
	BlendMode: EAlphaBlendOption;
	/**
	 * Custom Curve
	*/
	CustomCurve: CurveFloat;
	/**
	 * Logic Type
	*/
	LogicType: ETransitionLogicType;
}

declare class BakedAnimationStateMachine { 
	/**
	 * Name of this machine (primarily for debugging purposes)
	*/
	MachineName: string;
	/**
	 * Index of the initial state that the machine will start in
	*/
	InitialState: number;
	/**
	 * List of all states this machine can be in
	*/
	States: BakedAnimationState[];
	/**
	 * List of all transitions between states
	*/
	Transitions: AnimationTransitionBetweenStates[];
}

declare class AnimBlueprintGeneratedClass extends BlueprintGeneratedClass { 
	/**
	 * List of state machines present in this blueprint class
	*/
	BakedStateMachines: BakedAnimationStateMachine[];
	/**
	 * Target skeleton for this blueprint class
	*/
	TargetSkeleton: Skeleton;
	/**
	 * A list of anim notifies that state machines (or anything else) may reference
	*/
	AnimNotifies: AnimNotifyEvent[];
	/**
	 * The index of the root node in the animation tree
	*/
	RootAnimNodeIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimBlueprintGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimBlueprintGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimBlueprintGeneratedClass;
	static C(Other: UObject): AnimBlueprintGeneratedClass;
}

declare class CircleElement2D { 
	/**
	 * Center
	*/
	Center: Vector2D;
	/**
	 * Radius
	*/
	Radius: number;
}

declare class BoxElement2D { 
	/**
	 * Center of the box
	*/
	Center: Vector2D;
	/**
	 * Width of the box
	*/
	Width: number;
	/**
	 * Height of the box
	*/
	Height: number;
	/**
	 * Rotation of the box (in degrees)
	*/
	Angle: number;
}

declare class ConvexElement2D { 
	/**
	 * Vertices that lie on the convex hull
	*/
	VertexData: Vector2D[];
}

declare class AggregateGeometry2D { 
	/**
	 * Circle Elements
	*/
	CircleElements: CircleElement2D[];
	/**
	 * Box Elements
	*/
	BoxElements: BoxElement2D[];
	/**
	 * Convex Elements
	*/
	ConvexElements: ConvexElement2D[];
}

declare class BodySetup2D extends BodySetup { 
	/**
	 * Agg Geom 2D
	*/
	AggGeom2D: AggregateGeometry2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BodySetup2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BodySetup2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BodySetup2D;
	static C(Other: UObject): BodySetup2D;
}

declare class BoneMaskFilter extends UObject { 
	/**
	 * Blend Poses
	*/
	BlendPoses: InputBlendPose[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BoneMaskFilter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BoneMaskFilter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BoneMaskFilter;
	static C(Other: UObject): BoneMaskFilter;
}

declare class BookMark2D extends UObject { 
	/**
	 * Zoom of the camera
	*/
	Zoom2D: number;
	/**
	 * Location of the camera
	*/
	Location: IntPoint;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BookMark2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BookMark2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BookMark2D;
	static C(Other: UObject): BookMark2D;
}

declare class ButtonStyleAsset extends UObject { 
	/**
	 * The actual data describing the button's appearance.
	*/
	ButtonStyle: ButtonStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ButtonStyleAsset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ButtonStyleAsset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ButtonStyleAsset;
	static C(Other: UObject): ButtonStyleAsset;
}

declare class ActorChannel extends Channel { 
	/**
	 * Variables.
	*/
	Actor: Actor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorChannel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorChannel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorChannel;
	static C(Other: UObject): ActorChannel;
}

declare class ControlChannel extends Channel { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ControlChannel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ControlChannel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlChannel;
	static C(Other: UObject): ControlChannel;
}

declare class VoiceChannel extends Channel { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VoiceChannel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VoiceChannel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoiceChannel;
	static C(Other: UObject): VoiceChannel;
}

declare class CheckBoxStyleAsset extends UObject { 
	/**
	 * The actual data describing the Check Box's appearance.
	*/
	CheckBoxStyle: CheckBoxStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CheckBoxStyleAsset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CheckBoxStyleAsset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CheckBoxStyleAsset;
	static C(Other: UObject): CheckBoxStyleAsset;
}

declare class PluginCommandlet extends Commandlet { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginCommandlet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PluginCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginCommandlet;
	static C(Other: UObject): PluginCommandlet;
}

declare class SmokeTestCommandlet extends Commandlet { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SmokeTestCommandlet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SmokeTestCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmokeTestCommandlet;
	static C(Other: UObject): SmokeTestCommandlet;
}

declare class CurveEdPresetCurve extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CurveEdPresetCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CurveEdPresetCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEdPresetCurve;
	static C(Other: UObject): CurveEdPresetCurve;
}

declare class AnimationSettings extends DeveloperSettings { 
	/**
	 * compression upgrade version
	*/
	CompressCommandletVersion: number;
	/**
	 * Key End Effectors Match Name Array
	*/
	KeyEndEffectorsMatchNameArray: string[];
	/**
	 * Default Compression Algorithm
	*/
	DefaultCompressionAlgorithm: UnrealEngineClass;
	/**
	 * Rotation Compression Format
	*/
	RotationCompressionFormat: AnimationCompressionFormat;
	/**
	 * Translation Compression Format
	*/
	TranslationCompressionFormat: AnimationCompressionFormat;
	/**
	 * Alternative Compression Threshold
	*/
	AlternativeCompressionThreshold: number;
	/**
	 * Force Recompression
	*/
	ForceRecompression: boolean;
	/**
	 * Only Check for Missing Skeletal Meshes
	*/
	bOnlyCheckForMissingSkeletalMeshes: boolean;
	/**
	 * Force Below Threshold
	*/
	bForceBelowThreshold: boolean;
	/**
	 * First Recompress Using Current or Default
	*/
	bFirstRecompressUsingCurrentOrDefault: boolean;
	/**
	 * Raise Max Error to Existing
	*/
	bRaiseMaxErrorToExisting: boolean;
	/**
	 * Try Fixed Bitwise Compression
	*/
	bTryFixedBitwiseCompression: boolean;
	/**
	 * Try Per Track Bitwise Compression
	*/
	bTryPerTrackBitwiseCompression: boolean;
	/**
	 * Try Linear Key Removal Compression
	*/
	bTryLinearKeyRemovalCompression: boolean;
	/**
	 * Try Interval Key Removal
	*/
	bTryIntervalKeyRemoval: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimationSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimationSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationSettings;
	static C(Other: UObject): AnimationSettings;
}

declare class AudioQualitySettings { 
	/**
	 * Display Name
	*/
	DisplayName: string;
	/**
	 * The number of audio channels that can be used at once
	 * NOTE: Some platforms may cap this value to a lower setting regardless of what the settings request
	*/
	MaxChannels: number;
}

declare class AudioSettings extends DeveloperSettings { 
	/**
	 * The SoundClass assigned to newly created sounds
	*/
	DefaultSoundClassName: StringAssetReference;
	/**
	 * The SoundMix to use as base when no other system has specified a Base SoundMix
	*/
	DefaultBaseSoundMix: StringAssetReference;
	/**
	 * Sound class to be used for the VOIP audio component
	*/
	VoiPSoundClass: StringAssetReference;
	/**
	 * Low Pass Filter Resonance
	*/
	LowPassFilterResonance: number;
	/**
	 * How many streaming sounds can be played at the same time (if more are played they will be sorted by priority)
	*/
	MaximumConcurrentStreams: number;
	/**
	 * Quality Levels
	*/
	QualityLevels: AudioQualitySettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AudioSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AudioSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSettings;
	static C(Other: UObject): AudioSettings;
}

declare type ERenderFocusRule = string;
declare type EUIScalingRule = string;
declare class DPICustomScalingRule extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DPICustomScalingRule;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DPICustomScalingRule;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DPICustomScalingRule;
	static C(Other: UObject): DPICustomScalingRule;
}

declare class UserInterfaceSettings extends DeveloperSettings { 
	/**
	 * Rule to determine if we should render the Focus Brush for widgets that have user focus.
	*/
	RenderFocusRule: ERenderFocusRule;
	/**
	 * Widget to use when the Default Cursor is requested.
	*/
	DefaultCursor: StringClassReference;
	/**
	 * Widget to use when the TextEditBeam Cursor is requested.
	*/
	TextEditBeamCursor: StringClassReference;
	/**
	 * Widget to use when the Crosshairs Cursor is requested.
	*/
	CrosshairsCursor: StringClassReference;
	/**
	 * Widget to use when the GrabHand Cursor is requested.
	*/
	GrabHandCursor: StringClassReference;
	/**
	 * Widget to use when the GrabHandClosed Cursor is requested.
	*/
	GrabHandClosedCursor: StringClassReference;
	/**
	 * Widget to use when the SlashedCircle Cursor is requested.
	*/
	SlashedCircleCursor: StringClassReference;
	/**
	 * An optional application scale to apply on top of the custom scaling rules.  So if you want to expose a property in your game title, you can modify this underlying value to scale the entire UI.
	*/
	ApplicationScale: number;
	/**
	 * The rule used when trying to decide what scale to apply.
	*/
	UIScaleRule: EUIScalingRule;
	/**
	 * Set DPI Scale Rule to Custom, and this class will be used instead of any of the built-in rules.
	*/
	CustomScalingRuleClass: StringClassReference;
	/**
	 * Controls how the UI is scaled at different resolutions based on the DPI Scale Rule
	*/
	UIScaleCurve: RuntimeFloatCurve;
	/**
	 * Cursor Classes
	*/
	CursorClasses: UObject[];
	/**
	 * Custom Scaling Rule Class Instance
	*/
	CustomScalingRuleClassInstance: UnrealEngineClass;
	/**
	 * Custom Scaling Rule
	*/
	CustomScalingRule: DPICustomScalingRule;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UserInterfaceSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UserInterfaceSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserInterfaceSettings;
	static C(Other: UObject): UserInterfaceSettings;
}

declare class StreamingSettings extends DeveloperSettings { 
	/**
	 * Enables separate thread for package streaming. Requires restart to take effect.
	*/
	AsyncLoadingThreadEnabled: boolean;
	/**
	 * Enables log warning if time limit for time-sliced package streaming has been exceeded.
	*/
	WarnIfTimeLimitExceeded: boolean;
	/**
	 * Multiplier for time limit exceeded warning time threshold.
	*/
	TimeLimitExceededMultiplier: number;
	/**
	 * Minimum time the time limit exceeded warning will be triggered by.
	*/
	TimeLimitExceededMinTime: number;
	/**
	 * Minimum time the time limit exceeded warning will be triggered by.
	*/
	MinBulkDataSizeForAsyncLoading: number;
	/**
	 * Constrain bandwidth if wanted. Value is in MByte/ sec.
	*/
	AsyncIOBandwidthLimit: number;
	/**
	 * Whether to allow background level streaming.
	*/
	UseBackgroundLevelStreaming: boolean;
	/**
	 * Whether to use the entire time limit even if blocked on I/O.
	*/
	AsyncLoadingUseFullTimeLimit: boolean;
	/**
	 * Maximum amount of time to spend doing asynchronous loading (ms per frame).
	*/
	AsyncLoadingTimeLimit: number;
	/**
	 * Additional time to spend asynchronous loading during a high priority load.
	*/
	PriorityAsyncLoadingExtraTime: number;
	/**
	 * Maximum allowed time to spend for actor registration steps during level streaming (ms per frame).
	*/
	LevelStreamingActorsUpdateTimeLimit: number;
	/**
	 * Batching granularity used to register actor components during level streaming.
	*/
	LevelStreamingComponentsRegistrationGranularity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): StreamingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): StreamingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamingSettings;
	static C(Other: UObject): StreamingSettings;
}

declare class GarbageCollectionSettings extends DeveloperSettings { 
	/**
	 * Time in seconds (game time) we should wait between purging object references to objects that are pending kill.
	*/
	TimeBetweenPurgingPendingKillObjects: number;
	/**
	 * If enabled, streaming will be flushed each time garbage collection is triggered.
	*/
	FlushStreamingOnGC: boolean;
	/**
	 * If enabled, garbage collection will use multiple threads.
	*/
	AllowParallelGC: boolean;
	/**
	 * Maximum number of times GC can be skipped if worker threads are currently modifying UObject state. 0 = never force GC
	*/
	NumRetriesBeforeForcingGC: number;
	/**
	 * Maximum Object Count Not Considered By GC. Works only in cooked builds.
	*/
	MaxObjectsNotConsideredByGC: number;
	/**
	 * Size Of Permanent Object Pool (bytes). Works only in cooked builds.
	*/
	SizeOfPermanentObjectPool: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GarbageCollectionSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GarbageCollectionSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GarbageCollectionSettings;
	static C(Other: UObject): GarbageCollectionSettings;
}

declare class NetworkSettings extends DeveloperSettings { 
	/**
	 * If true, libcurl authenticates the peer's certificate. Disable to allow self-signed certificates.
	*/
	bVerifyPeer: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NetworkSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NetworkSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetworkSettings;
	static C(Other: UObject): NetworkSettings;
}

declare type ESettingsLockedAxis = string;
declare type ESettingsDOF = string;
declare class PhysicalSurfaceName { 
	/**
	 * Type
	*/
	Type: EPhysicalSurface;
	/**
	 * Name
	*/
	Name: string;
}

declare class PhysicsSettings extends DeveloperSettings { 
	/**
	 * Default gravity.
	*/
	DefaultGravityZ: number;
	/**
	 * Default terminal velocity for Physics Volumes.
	*/
	DefaultTerminalVelocity: number;
	/**
	 * Default fluid friction for Physics Volumes.
	*/
	DefaultFluidFriction: number;
	/**
	 * Threshold for ragdoll bodies above which they will be added to an aggregate before being added to the scene
	*/
	RagdollAggregateThreshold: number;
	/**
	 * Triangles from triangle meshes (BSP) with an area less than or equal to this value will be removed from physics collision data. Set to less than 0 to disable.
	*/
	TriangleMeshTriangleMinAreaThreshold: number;
	/**
	 * Enables the use of an async scene
	*/
	bEnableAsyncScene: boolean;
	/**
	 * Enables shape sharing between sync and async scene for static rigid actors
	*/
	bEnableShapeSharing: boolean;
	/**
	 * Enables persistent contact manifolds. This will generate fewer contact points, but with more accuracy. Reduces stability of stacking, but can help energy conservation.
	*/
	bEnablePCM: boolean;
	/**
	 * Whether to warn when physics locks are used incorrectly. Turning this off is not recommended and should only be used by very advanced users.
	*/
	bWarnMissingLocks: boolean;
	/**
	 * Can 2D physics be used (Box2D)?
	*/
	bEnable2DPhysics: boolean;
	/**
	 * Locked Axis
	*/
	LockedAxis: ESettingsLockedAxis;
	/**
	 * Useful for constraining all objects in the world, for example if you are making a 2D game using 3D environments.
	*/
	DefaultDegreesOfFreedom: ESettingsDOF;
	/**
	 * Minimum relative velocity required for an object to bounce. A typical value for simulation stability is about 0.2 * gravity
	*/
	BounceThresholdVelocity: number;
	/**
	 * Friction combine mode, controls how friction is computed for multiple materials.
	*/
	FrictionCombineMode: EFrictionCombineMode;
	/**
	 * Restitution combine mode, controls how restitution is computed for multiple materials.
	*/
	RestitutionCombineMode: EFrictionCombineMode;
	/**
	 * Max angular velocity that a simulated object can achieve.
	*/
	MaxAngularVelocity: number;
	/**
	 * Max velocity which may be used to depenetrate simulated physics objects. 0 means no maximum.
	*/
	MaxDepenetrationVelocity: number;
	/**
	 * If true, simulate physics for this component on a dedicated server.
	 * This should be set if simulating physics and replicating with a dedicated server.
	*/
	bSimulateSkeletalMeshOnDedicatedServer: boolean;
	/**
	 * If true, static meshes will use per poly collision as complex collision by default. If false the default behavior is the same as UseSimpleAsComplex.
	*/
	bDefaultHasComplexCollision: boolean;
	/**
	 * Max Physics Delta Time to be clamped.
	*/
	MaxPhysicsDeltaTime: number;
	/**
	 * Whether to substep the physics simulation. This feature is still experimental. Certain functionality might not work correctly
	*/
	bSubstepping: boolean;
	/**
	 * Whether to substep the async physics simulation. This feature is still experimental. Certain functionality might not work correctly
	*/
	bSubsteppingAsync: boolean;
	/**
	 * Max delta time (in seconds) for an individual simulation substep.
	*/
	MaxSubstepDeltaTime: number;
	/**
	 * Max number of substeps for physics simulation.
	*/
	MaxSubsteps: number;
	/**
	 * Physics delta time smoothing factor for sync scene.
	*/
	SyncSceneSmoothingFactor: number;
	/**
	 * Physics delta time smoothing factor for async scene.
	*/
	AsyncSceneSmoothingFactor: number;
	/**
	 * Physics delta time initial average.
	*/
	InitialAverageFrameRate: number;
	/**
	 * PhysicalMaterial Surface Types
	*/
	PhysicalSurfaces: PhysicalSurfaceName[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PhysicsSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsSettings;
	static C(Other: UObject): PhysicsSettings;
}

declare type ETranslucentSortPolicy = string;
declare type ECustomDepthStencil = string;
declare type EAntiAliasingMethodUI = string;
declare type EEarlyZPass = string;
declare type EClearSceneOptions = string;
declare class RendererSettings extends DeveloperSettings { 
	/**
	 * If true, mobile renders in full HDR. Disable this setting for games that do not require lighting features for better performance on slow devices.
	*/
	bMobileHDR: boolean;
	/**
	 * The number of dynamic point lights to support on mobile devices. Setting this to 0 for games which do not require dynamic point lights will reduce the number of shaders generated. Changing this setting requires restarting the editor.
	*/
	MobileNumDynamicPointLights: any;
	/**
	 * If this setting is enabled, the same shader will be used for any number of dynamic point lights (up to the maximum specified above) hitting a surface. This is slightly slower but reduces the number of shaders generated. Changing this setting requires restarting the editor.
	*/
	bMobileDynamicPointLightsUseStaticBranch: boolean;
	/**
	 * Allows occluded meshes to be culled and no rendered.
	*/
	bOcclusionCulling: boolean;
	/**
	 * Screen radius at which lights are culled. Larger values can improve performance but causes lights to pop off when they affect a small area of the screen.
	*/
	MinScreenRadiusForLights: number;
	/**
	 * Screen radius at which objects are culled for the early Z pass. Larger values can improve performance but very large values can degrade performance if large occluders are not rendered.
	*/
	MinScreenRadiusForEarlyZPass: number;
	/**
	 * Screen radius at which objects are culled for cascaded shadow map depth passes. Larger values can improve performance but can cause artifacts as objects stop casting shadows.
	*/
	MinScreenRadiusForCSMdepth: number;
	/**
	 * Displays a warning when no precomputed visibility data is available for the current camera location. This can be helpful if you are making a game that relies on precomputed visibility, e.g. a first person mobile game.
	*/
	bPrecomputedVisibilityWarning: boolean;
	/**
	 * When enabled textures will stream in based on what is visible on screen.
	*/
	bTextureStreaming: boolean;
	/**
	 * Whether to use DXT5 for normal maps, otherwise BC5 will be used, which is not supported on all hardware. Changing this setting requires restarting the editor.
	*/
	bUseDXT5NormalMaps: boolean;
	/**
	 * Whether to allow any static lighting to be generated and used, like lightmaps and shadowmaps. Games that only use dynamic lighting should set this to 0 to save some static lighting overhead. Changing this setting requires restarting the editor.
	*/
	bAllowStaticLighting: boolean;
	/**
	 * Whether to allow any static lighting to use normal maps for lighting computations.
	*/
	bUseNormalMapsForStaticLighting: boolean;
	/**
	 * Whether to build distance fields of static meshes, needed for distance field AO, which is used to implement Movable SkyLight shadows, and ray traced distance field shadows on directional lights.  Enabling will increase mesh build times and memory usage.  Changing this setting requires restarting the editor.
	*/
	bGenerateMeshDistanceFields: boolean;
	/**
	 * Whether to generate a low-resolution base color texture for landscapes for rendering real-time global illumination.  This feature requires GenerateMeshDistanceFields is also enabled, and will increase mesh build times and memory usage.
	*/
	bGenerateLandscapeGIData: boolean;
	/**
	 * When adaptive tessellation is enabled it will try to tessellate a mesh so that each triangle contains the specified number of pixels. The tessellation multiplier specified in the material can increase or decrease the amount of tessellation.
	*/
	TessellationAdaptivePixelsPerTriangle: number;
	/**
	 * Allow translucency to be rendered to a separate render targeted and composited after depth of field. Prevents translucency from appearing out of focus.
	*/
	bSeparateTranslucency: boolean;
	/**
	 * The sort mode for translucent primitives, affecting how they are ordered and how they change order as the camera moves.
	*/
	TranslucentSortPolicy: ETranslucentSortPolicy;
	/**
	 * The axis that sorting will occur along when Translucent Sort Policy is set to SortAlongAxis.
	*/
	TranslucentSortAxis: Vector;
	/**
	 * Whether the custom depth pass for tagging primitives for postprocessing passes is enabled. Enabling it on demand can save memory but may cause a hitch the first time the feature is used.
	*/
	CustomDepthStencil: ECustomDepthStencil;
	/**
	 * Whether the default for Bloom is enabled or not (postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	bDefaultFeatureBloom: boolean;
	/**
	 * Whether the default for AmbientOcclusion is enabled or not (postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	bDefaultFeatureAmbientOcclusion: boolean;
	/**
	 * Whether the default for AmbientOcclusionStaticFraction is enabled or not (only useful for baked lighting and if AO is on, allows to have SSAO affect baked lighting as well, costs performance, postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	bDefaultFeatureAmbientOcclusionStaticFraction: boolean;
	/**
	 * Whether the default for AutoExposure is enabled or not (postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	bDefaultFeatureAutoExposure: boolean;
	/**
	 * Whether the default for MotionBlur is enabled or not (postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	bDefaultFeatureMotionBlur: boolean;
	/**
	 * Whether the default for LensFlare is enabled or not (postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	bDefaultFeatureLensFlare: boolean;
	/**
	 * What anti-aliasing mode is used by default (postprocess volume/camera/game setting can still override and enable or disable it independently)
	*/
	DefaultFeatureAntiAliasing: EAntiAliasingMethodUI;
	/**
	 * Whether to use a depth only pass to initialize Z culling for the base pass. Need to reload the level!
	*/
	EarlyZPass: EEarlyZPass;
	/**
	 * Whether to render movable objects in the early Z pass. Need to reload the level!
	*/
	bEarlyZPassMovable: boolean;
	/**
	 * Experimental decal feature (see r.DBuffer, ideally combined with 'Movables in early Z-pass' and 'Early Z-pass')
	*/
	bDBuffer: boolean;
	/**
	 * Select how the g-buffer is cleared in game mode (only affects deferred shading).
	*/
	ClearSceneMethod: EClearSceneOptions;
	/**
	 * Enables materials with time-based World Position Offset and/or World Displacement to output accurate velocities. This incurs a performance cost. If this is disabled, those materials will not output velocities. Changing this setting requires restarting the editor.
	*/
	bBasePassOutputsVelocity: boolean;
	/**
	 * Screen radius at which wireframe objects are culled. Larger values can improve performance when viewing a scene in wireframe.
	*/
	WireframeCullThreshold: number;
	/**
	 * UIScale Rule
	*/
	UIScaleRule: EUIScalingRule;
	/**
	 * UIScale Curve
	*/
	UIScaleCurve: RuntimeFloatCurve;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RendererSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RendererSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RendererSettings;
	static C(Other: UObject): RendererSettings;
}

declare class TextureLODGroup { 
	/**
	 * Minimum LOD mip count below which the code won't bias.
	*/
	Group: TextureGroup;
	/**
	 * Group LOD bias.
	*/
	LODBias: number;
	/**
	 * Number of mip-levels that can be streamed. -1 means all mips can stream.
	*/
	NumStreamedMips: number;
	/**
	 * Defines how the the mip-map generation works, e.g. sharpening
	*/
	MipGenSettings: TextureMipGenSettings;
	/**
	 * Min LODSize
	*/
	MinLODSize: number;
	/**
	 * Max LODSize
	*/
	MaxLODSize: number;
	/**
	 * Min Mag Filter
	*/
	MinMagFilter: string;
	/**
	 * Mip Filter
	*/
	MipFilter: string;
}

declare class TextureLODSettings extends UObject { 
	/**
	 * Array of LOD settings with entries per group.
	*/
	TextureLODGroups: TextureLODGroup[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextureLODSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextureLODSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureLODSettings;
	static C(Other: UObject): TextureLODSettings;
}

declare class DeviceProfile extends TextureLODSettings { 
	/**
	 * The type of this profile, I.e. IOS, Windows, PS4 etc
	*/
	DeviceType: string;
	/**
	 * The name of the parent profile of this object
	*/
	BaseProfileName: string;
	/**
	 * The parent object of this profile, it is the object matching this DeviceType with the BaseProfileName
	*/
	Parent: UObject;
	/**
	 * The collection of CVars which is set from this profile
	*/
	CVars: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DeviceProfile;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DeviceProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeviceProfile;
	static C(Other: UObject): DeviceProfile;
}

declare class DeviceProfileManager extends UObject { 
	/**
	 * Holds the collection of managed profiles.
	*/
	Profiles: UObject[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DeviceProfileManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DeviceProfileManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeviceProfileManager;
	static C(Other: UObject): DeviceProfileManager;
}

declare class DistributionFloatConstant extends DistributionFloat { 
	/**
	 * This float will be returned for all values of time.
	*/
	Constant: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatConstant;
	static C(Other: UObject): DistributionFloatConstant;
}

declare type DistributionParamMode = string;
declare class DistributionFloatParameterBase extends DistributionFloatConstant { 
	/**
	 * todo document
	*/
	ParameterName: string;
	/**
	 * todo document
	*/
	MinInput: number;
	/**
	 * todo document
	*/
	MaxInput: number;
	/**
	 * todo document
	*/
	MinOutput: number;
	/**
	 * todo document
	*/
	MaxOutput: number;
	/**
	 * todo document
	*/
	ParamMode: DistributionParamMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatParameterBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatParameterBase;
	static C(Other: UObject): DistributionFloatParameterBase;
}

declare class DistributionFloatParticleParameter extends DistributionFloatParameterBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatParticleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatParticleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatParticleParameter;
	static C(Other: UObject): DistributionFloatParticleParameter;
}

declare class DistributionFloatConstantCurve extends DistributionFloat { 
	/**
	 * Keyframe data for how output constant varies over time.
	*/
	ConstantCurve: InterpCurveFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatConstantCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatConstantCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatConstantCurve;
	static C(Other: UObject): DistributionFloatConstantCurve;
}

declare class DistributionFloatUniform extends DistributionFloat { 
	/**
	 * Low end of output float distribution.
	*/
	Min: number;
	/**
	 * High end of output float distribution.
	*/
	Max: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatUniform;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatUniform;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatUniform;
	static C(Other: UObject): DistributionFloatUniform;
}

declare class InterpCurvePointVector2D { 
	/**
	 * In Val
	*/
	InVal: number;
	/**
	 * Out Val
	*/
	OutVal: Vector2D;
	/**
	 * Arrive Tangent
	*/
	ArriveTangent: Vector2D;
	/**
	 * Leave Tangent
	*/
	LeaveTangent: Vector2D;
	/**
	 * Interp Mode
	*/
	InterpMode: EInterpCurveMode;
}

declare class InterpCurveVector2D { 
	/**
	 * Points
	*/
	Points: InterpCurvePointVector2D[];
	/**
	 * Is Looped
	*/
	bIsLooped: boolean;
	/**
	 * Loop Key Offset
	*/
	LoopKeyOffset: number;
}

declare class DistributionFloatUniformCurve extends DistributionFloat { 
	/**
	 * Keyframe data for how output constant varies over time.
	*/
	ConstantCurve: InterpCurveVector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatUniformCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatUniformCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatUniformCurve;
	static C(Other: UObject): DistributionFloatUniformCurve;
}

declare type EDistributionVectorLockFlags = string;
declare class DistributionVectorConstant extends DistributionVector { 
	/**
	 * This FVector will be returned for all input times.
	*/
	Constant: Vector;
	/**
	 * If true, X == Y == Z ie. only one degree of freedom. If false, each axis is picked independently.
	*/
	bLockAxes: boolean;
	/**
	 * Locked Axes
	*/
	LockedAxes: EDistributionVectorLockFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorConstant;
	static C(Other: UObject): DistributionVectorConstant;
}

declare class DistributionVectorParameterBase extends DistributionVectorConstant { 
	/**
	 * Parameter Name
	*/
	ParameterName: string;
	/**
	 * Min Input
	*/
	MinInput: Vector;
	/**
	 * Max Input
	*/
	MaxInput: Vector;
	/**
	 * Min Output
	*/
	MinOutput: Vector;
	/**
	 * Max Output
	*/
	MaxOutput: Vector;
	/**
	 * Param Modes
	*/
	ParamModes: DistributionParamMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorParameterBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorParameterBase;
	static C(Other: UObject): DistributionVectorParameterBase;
}

declare class DistributionVectorParticleParameter extends DistributionVectorParameterBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorParticleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorParticleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorParticleParameter;
	static C(Other: UObject): DistributionVectorParticleParameter;
}

declare class DistributionVectorConstantCurve extends DistributionVector { 
	/**
	 * Keyframe data for each component (X,Y,Z) over time.
	*/
	ConstantCurve: InterpCurveVector;
	/**
	 * If true, X == Y == Z ie. only one degree of freedom. If false, each axis is picked independently.
	*/
	bLockAxes: boolean;
	/**
	 * Locked Axes
	*/
	LockedAxes: EDistributionVectorLockFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorConstantCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorConstantCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorConstantCurve;
	static C(Other: UObject): DistributionVectorConstantCurve;
}

declare type EDistributionVectorMirrorFlags = string;
declare class DistributionVectorUniform extends DistributionVector { 
	/**
	 * Upper end of FVector magnitude range.
	*/
	Max: Vector;
	/**
	 * Lower end of FVector magnitude range.
	*/
	Min: Vector;
	/**
	 * If true, X == Y == Z ie. only one degree of freedom. If false, each axis is picked independently.
	*/
	bLockAxes: boolean;
	/**
	 * Locked Axes
	*/
	LockedAxes: EDistributionVectorLockFlags;
	/**
	 * Mirror Flags
	*/
	MirrorFlags: EDistributionVectorMirrorFlags;
	/**
	 * Use Extremes
	*/
	bUseExtremes: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorUniform;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorUniform;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorUniform;
	static C(Other: UObject): DistributionVectorUniform;
}

declare class TwoVectors { 
	/**
	 * V 1
	*/
	v1: Vector;
	/**
	 * V 2
	*/
	v2: Vector;
}

declare class InterpCurvePointTwoVectors { 
	/**
	 * In Val
	*/
	InVal: number;
	/**
	 * Out Val
	*/
	OutVal: TwoVectors;
	/**
	 * Arrive Tangent
	*/
	ArriveTangent: TwoVectors;
	/**
	 * Leave Tangent
	*/
	LeaveTangent: TwoVectors;
	/**
	 * Interp Mode
	*/
	InterpMode: EInterpCurveMode;
}

declare class InterpCurveTwoVectors { 
	/**
	 * Points
	*/
	Points: InterpCurvePointTwoVectors[];
	/**
	 * Is Looped
	*/
	bIsLooped: boolean;
	/**
	 * Loop Key Offset
	*/
	LoopKeyOffset: number;
}

declare class DistributionVectorUniformCurve extends DistributionVector { 
	/**
	 * Keyframe data for how output constant varies over time.
	*/
	ConstantCurve: InterpCurveTwoVectors;
	/**
	 * If true, X == Y == Z ie. only one degree of freedom. If false, each axis is picked independently.
	*/
	bLockAxes1: boolean;
	/**
	 * Lock Axes 2
	*/
	bLockAxes2: boolean;
	/**
	 * Locked Axes
	*/
	LockedAxes: EDistributionVectorLockFlags;
	/**
	 * Mirror Flags
	*/
	MirrorFlags: EDistributionVectorMirrorFlags;
	/**
	 * Use Extremes
	*/
	bUseExtremes: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorUniformCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorUniformCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorUniformCurve;
	static C(Other: UObject): DistributionVectorUniformCurve;
}

declare class BlueprintComponentDelegateBinding { 
	/**
	 * Name of component property that contains delegate we want to assign to.
	*/
	ComponentPropertyName: string;
	/**
	 * Name of property on the component that we want to assign to.
	*/
	DelegatePropertyName: string;
	/**
	 * Name of function that we want to bind to the delegate.
	*/
	FunctionNameToBind: string;
}

declare class ComponentDelegateBinding extends DynamicBlueprintBinding { 
	/**
	 * Component Delegate Bindings
	*/
	ComponentDelegateBindings: BlueprintComponentDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ComponentDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ComponentDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ComponentDelegateBinding;
	static C(Other: UObject): ComponentDelegateBinding;
}

declare class InputDelegateBinding extends DynamicBlueprintBinding { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputDelegateBinding;
	static C(Other: UObject): InputDelegateBinding;
}

declare class BlueprintInputDelegateBinding { 
	/**
	 * Consume Input
	*/
	bConsumeInput: boolean;
	/**
	 * Execute when Paused
	*/
	bExecuteWhenPaused: boolean;
	/**
	 * Override Parent Binding
	*/
	bOverrideParentBinding: boolean;
}

declare class BlueprintInputActionDelegateBinding extends BlueprintInputDelegateBinding { 
	/**
	 * Input Action Name
	*/
	InputActionName: string;
	/**
	 * Input Key Event
	*/
	InputKeyEvent: EInputEvent;
	/**
	 * Function Name to Bind
	*/
	FunctionNameToBind: string;
}

declare class InputActionDelegateBinding extends InputDelegateBinding { 
	/**
	 * Input Action Delegate Bindings
	*/
	InputActionDelegateBindings: BlueprintInputActionDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputActionDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputActionDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputActionDelegateBinding;
	static C(Other: UObject): InputActionDelegateBinding;
}

declare class BlueprintInputAxisDelegateBinding extends BlueprintInputDelegateBinding { 
	/**
	 * Input Axis Name
	*/
	InputAxisName: string;
	/**
	 * Function Name to Bind
	*/
	FunctionNameToBind: string;
}

declare class InputAxisDelegateBinding extends InputDelegateBinding { 
	/**
	 * Input Axis Delegate Bindings
	*/
	InputAxisDelegateBindings: BlueprintInputAxisDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputAxisDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputAxisDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputAxisDelegateBinding;
	static C(Other: UObject): InputAxisDelegateBinding;
}

declare class BlueprintInputAxisKeyDelegateBinding extends BlueprintInputDelegateBinding { 
	/**
	 * Axis Key
	*/
	AxisKey: Key;
	/**
	 * Function Name to Bind
	*/
	FunctionNameToBind: string;
}

declare class InputAxisKeyDelegateBinding extends InputDelegateBinding { 
	/**
	 * Input Axis Key Delegate Bindings
	*/
	InputAxisKeyDelegateBindings: BlueprintInputAxisKeyDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputAxisKeyDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputAxisKeyDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputAxisKeyDelegateBinding;
	static C(Other: UObject): InputAxisKeyDelegateBinding;
}

declare class InputVectorAxisDelegateBinding extends InputAxisKeyDelegateBinding { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputVectorAxisDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputVectorAxisDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputVectorAxisDelegateBinding;
	static C(Other: UObject): InputVectorAxisDelegateBinding;
}

declare class BlueprintInputKeyDelegateBinding extends BlueprintInputDelegateBinding { 
	/**
	 * Input Chord
	*/
	InputChord: InputChord;
	/**
	 * Input Key Event
	*/
	InputKeyEvent: EInputEvent;
	/**
	 * Function Name to Bind
	*/
	FunctionNameToBind: string;
}

declare class InputKeyDelegateBinding extends InputDelegateBinding { 
	/**
	 * Input Key Delegate Bindings
	*/
	InputKeyDelegateBindings: BlueprintInputKeyDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputKeyDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputKeyDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputKeyDelegateBinding;
	static C(Other: UObject): InputKeyDelegateBinding;
}

declare class BlueprintInputTouchDelegateBinding extends BlueprintInputDelegateBinding { 
	/**
	 * Input Key Event
	*/
	InputKeyEvent: EInputEvent;
	/**
	 * Function Name to Bind
	*/
	FunctionNameToBind: string;
}

declare class InputTouchDelegateBinding extends InputDelegateBinding { 
	/**
	 * Input Touch Delegate Bindings
	*/
	InputTouchDelegateBindings: BlueprintInputTouchDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputTouchDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputTouchDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputTouchDelegateBinding;
	static C(Other: UObject): InputTouchDelegateBinding;
}

declare class EdGraphNode_Documentation extends EdGraphNode { 
	/**
	 * Documentation Link
	*/
	Link: string;
	/**
	 * Documentation Excerpt
	*/
	Excerpt: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphNode_Documentation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphNode_Documentation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Documentation;
	static C(Other: UObject): EdGraphNode_Documentation;
}

declare class ImportantToggleSettingInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ImportantToggleSettingInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ImportantToggleSettingInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImportantToggleSettingInterface;
	static C(Other: UObject): ImportantToggleSettingInterface;
}

declare class EndUserSettings extends UObject { 
	/**
	 * Determines whether the engine sends anonymous usage information about game sessions to Epic Games in order to improve Unreal Engine. Information will never be shared with 3rd parties.
	*/
	bSendAnonymousUsageDataToEpic: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndUserSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EndUserSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndUserSettings;
	static C(Other: UObject): EndUserSettings;
}

declare class GameEngine extends Engine { 
	/**
	 * Maximium delta time the engine uses to populate FApp::DeltaTime. If 0, unbound.
	*/
	MaxDeltaTime: number;
	/**
	 * Maximium time (in seconds) between the flushes of the logs on the server (best effort). If 0, this will happen every tick.
	*/
	ServerFlushLogInterval: number;
	/**
	 * Game Instance
	*/
	GameInstance: GameInstance;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameEngine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameEngine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameEngine;
	static C(Other: UObject): GameEngine;
}

declare class InputAxisProperties { 
	/**
	 * What the dead zone of the axis is.  For control axes such as analog sticks.
	*/
	DeadZone: number;
	/**
	 * Scaling factor to multiply raw value by.
	*/
	Sensitivity: number;
	/**
	 * For applying curves to [0..1] axes, e.g. analog sticks
	*/
	Exponent: number;
	/**
	 * Inverts reported values for this axis
	*/
	bInvert: boolean;
}

declare class InputAxisConfigEntry { 
	/**
	 * Axis Key these properties apply to
	*/
	AxisKeyName: string;
	/**
	 * Properties for the Axis Key
	*/
	AxisProperties: InputAxisProperties;
}

declare class InputActionKeyMapping { 
	/**
	 * Friendly name of action, e.g "jump"
	*/
	ActionName: string;
	/**
	 * Key to bind it to.
	*/
	Key: Key;
	/**
	 * true if one of the Shift keys must be down when the KeyEvent is received to be acknowledged
	*/
	bShift: boolean;
	/**
	 * true if one of the Ctrl keys must be down when the KeyEvent is received to be acknowledged
	*/
	bCtrl: boolean;
	/**
	 * true if one of the Alt keys must be down when the KeyEvent is received to be acknowledged
	*/
	bAlt: boolean;
	/**
	 * true if one of the Cmd keys must be down when the KeyEvent is received to be acknowledged
	*/
	bCmd: boolean;
}

declare class InputAxisKeyMapping { 
	/**
	 * Friendly name of axis, e.g "MoveForward"
	*/
	AxisName: string;
	/**
	 * Key to bind it to.
	*/
	Key: Key;
	/**
	 * Multiplier to use for the mapping when accumulating the axis value
	*/
	Scale: number;
}

declare class InputSettings extends UObject { 
	/**
	 * List of Axis Properties
	*/
	AxisConfig: InputAxisConfigEntry[];
	/**
	 * Alt Enter Toggles Fullscreen
	*/
	bAltEnterTogglesFullscreen: boolean;
	/**
	 * Allow mouse to be used for touch
	*/
	bUseMouseForTouch: boolean;
	/**
	 * Mouse smoothing control
	*/
	bEnableMouseSmoothing: boolean;
	/**
	 * Scale the mouse based on the player camera manager's field of view
	*/
	bEnableFOVScaling: boolean;
	/**
	 * The scaling value to multiply the field of view by
	*/
	FOVScale: number;
	/**
	 * If a key is pressed twice in this amount of time it is considered a "double click"
	*/
	DoubleClickTime: number;
	/**
	 * List of Action Mappings
	*/
	ActionMappings: InputActionKeyMapping[];
	/**
	 * List of Axis Mappings
	*/
	AxisMappings: InputAxisKeyMapping[];
	/**
	 * Should the touch input interface be shown always, or only when the platform has a touch screen?
	*/
	bAlwaysShowTouchInterface: boolean;
	/**
	 * Whether or not to show the console on 4 finger tap, on mobile platforms
	*/
	bShowConsoleOnFourFingerTap: boolean;
	/**
	 * The default on-screen touch input interface for the game (can be null to disable the onscreen interface)
	*/
	DefaultTouchInterface: StringAssetReference;
	/**
	 * The key which opens the console.
	*/
	ConsoleKey: Key;
	/**
	 * The keys which open the console.
	*/
	ConsoleKeys: Key[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputSettings;
	static C(Other: UObject): InputSettings;
}

declare class InterpFilter_Classes extends InterpFilter { 
	/**
	 * Which class to filter groups by.
	*/
	ClassToFilterBy: UnrealEngineClass;
	/**
	 * List of allowed track classes.  If empty, then all track classes will be included.  Only groups that
	 *               contain at least one of these types of tracks will be displayed.
	*/
	TrackClasses: UnrealEngineClass[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpFilter_Classes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpFilter_Classes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpFilter_Classes;
	static C(Other: UObject): InterpFilter_Classes;
}

declare class InterpFilter_Custom extends InterpFilter { 
	/**
	 * Which groups are included in this filter.
	*/
	GroupsToInclude: InterpGroup[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpFilter_Custom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpFilter_Custom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpFilter_Custom;
	static C(Other: UObject): InterpFilter_Custom;
}

declare class CameraPreviewInfo { 
	/**
	 * Pawn Class
	*/
	PawnClass: UnrealEngineClass;
	/**
	 * Anim Seq
	*/
	AnimSeq: AnimSequence;
	/**
	 * for now this is read-only. It has maintenance issue to be resolved if I enable this.
	*/
	Location: Vector;
	/**
	 * Rotation
	*/
	Rotation: Rotator;
	/**
	 * APawn Inst - CameraAnimInst doesn't really exist in editor *
	*/
	PawnInst: Pawn;
}

declare class InterpGroupCamera extends InterpGroup { 
	/**
	 * Camera Anim Inst
	*/
	CameraAnimInst: CameraAnim;
	/**
	 * this is interaction property info for CameraAnim
	 * this information isn't really saved with it
	*/
	Target: CameraPreviewInfo;
	/**
	 * When compress, tolerance option *
	*/
	CompressTolerance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpGroupCamera;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpGroupCamera;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpGroupCamera;
	static C(Other: UObject): InterpGroupCamera;
}

declare class InterpGroupInstCamera extends InterpGroupInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpGroupInstCamera;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpGroupInstCamera;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpGroupInstCamera;
	static C(Other: UObject): InterpGroupInstCamera;
}

declare class InterpGroupInstDirector extends InterpGroupInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpGroupInstDirector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpGroupInstDirector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpGroupInstDirector;
	static C(Other: UObject): InterpGroupInstDirector;
}

declare class BoolTrackKey { 
	/**
	 * Time
	*/
	Time: number;
	/**
	 * Value
	*/
	Value: boolean;
}

declare class InterpTrackBoolProp extends InterpTrack { 
	/**
	 * Array of booleans to set.
	*/
	BoolTrack: BoolTrackKey[];
	/**
	 * Name of property in Group  AActor  which this track will modify over time.
	*/
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackBoolProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackBoolProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackBoolProp;
	static C(Other: UObject): InterpTrackBoolProp;
}

declare class DirectorTrackCut { 
	/**
	 * Time to perform the cut.
	*/
	Time: number;
	/**
	 * Time taken to move view to new camera.
	*/
	TransitionTime: number;
	/**
	 * GroupName of UInterpGroup to cut viewpoint to.
	*/
	TargetCamGroup: string;
	/**
	 * Shot number for developer reference
	*/
	ShotNumber: number;
}

declare class InterpTrackDirector extends InterpTrack { 
	/**
	 * Array of cuts between cameras.
	*/
	CutTrack: DirectorTrackCut[];
	/**
	 * True to allow clients to simulate their own camera cuts.  Can help with latency-induced timing issues.
	*/
	bSimulateCameraCutsOnClients: boolean;
	/**
	 * The camera actor which the track is currently focused on. Only valid if this track or it's group is selected
	*/
	PreviewCamera: CameraActor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackDirector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackDirector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackDirector;
	static C(Other: UObject): InterpTrackDirector;
}

declare class EventTrackKey { 
	/**
	 * Time
	*/
	Time: number;
	/**
	 * Event Name
	*/
	EventName: string;
}

declare class InterpTrackEvent extends InterpTrack { 
	/**
	 * Array of events to fire off.
	*/
	EventTrack: EventTrackKey[];
	/**
	 * If events should be fired when passed playing the sequence forwards.
	*/
	bFireEventsWhenForwards: boolean;
	/**
	 * If events should be fired when passed playing the sequence backwards.
	*/
	bFireEventsWhenBackwards: boolean;
	/**
	 * If true, events on this track are fired even when jumping forwads through a sequence - for example, skipping a cinematic.
	*/
	bFireEventsWhenJumpingForwards: boolean;
	/**
	 * If checked each key's event name is the exact name of the custom event function in level script that will be called
	*/
	bUseCustomEventName: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackEvent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackEvent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackEvent;
	static C(Other: UObject): InterpTrackEvent;
}

declare class InterpTrackFloatBase extends InterpTrack { 
	/**
	 * Actually track data containing keyframes of float as it varies over time.
	*/
	FloatTrack: InterpCurveFloat;
	/**
	 * Tension of curve, used for keypoints using automatic tangents.
	*/
	CurveTension: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatBase;
	static C(Other: UObject): InterpTrackFloatBase;
}

declare class AnimControlTrackKey { 
	/**
	 * Position in the Matinee sequence to start playing this animation.
	*/
	StartTime: number;
	/**
	 * Animation Sequence to play
	*/
	AnimSeq: AnimSequence;
	/**
	 * Time to start playing AnimSequence at.
	*/
	AnimStartOffset: number;
	/**
	 * Time to end playing the AnimSequence at.
	*/
	AnimEndOffset: number;
	/**
	 * Playback speed of this animation.
	*/
	AnimPlayRate: number;
	/**
	 * Should this animation loop.
	*/
	bLooping: boolean;
	/**
	 * Whether to play the animation in reverse or not.
	*/
	bReverse: boolean;
}

declare class InterpTrackAnimControl extends InterpTrackFloatBase { 
	/**
	 * Name of slot to use when playing animation. Passed to Actor.
	 * When multiple tracks use the same slot name, they are each given a different ChannelIndex when SetAnimPosition is called.
	*/
	SlotName: string;
	/**
	 * Track of different animations to play and when to start playing them.
	*/
	AnimSeqs: AnimControlTrackKey[];
	/**
	 * Skip all anim notifiers *
	*/
	bSkipAnimNotifiers: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackAnimControl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackAnimControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackAnimControl;
	static C(Other: UObject): InterpTrackAnimControl;
}

declare class InterpTrackFade extends InterpTrackFloatBase { 
	/**
	 * InterpTrackFade
	 * Special float property track that controls camera fading over time.
	 * Should live in a Director group.
	*/
	bPersistFade: boolean;
	/**
	 * True to set master audio volume along with the visual fade.
	*/
	bFadeAudio: boolean;
	/**
	 * Color to fade to.
	*/
	FadeColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFade;
	static C(Other: UObject): InterpTrackFade;
}

declare class InterpTrackFloatAnimBPParam extends InterpTrackFloatBase { 
	/**
	 * Materials whose parameters we want to change and the references to those materials.
	*/
	AnimBlueprintClass: UnrealEngineClass;
	/**
	 * Name of parameter in the MaterialInstance which this track will modify over time.
	*/
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatAnimBPParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatAnimBPParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatAnimBPParam;
	static C(Other: UObject): InterpTrackFloatAnimBPParam;
}

declare class InterpTrackFloatMaterialParam extends InterpTrackFloatBase { 
	/**
	 * Materials whose parameters we want to change and the references to those materials.
	*/
	TargetMaterials: MaterialInterface[];
	/**
	 * Name of parameter in the MaterialInstance which this track will modify over time.
	*/
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatMaterialParam;
	static C(Other: UObject): InterpTrackFloatMaterialParam;
}

declare class InterpTrackFloatParticleParam extends InterpTrackFloatBase { 
	/**
	 * Name of property in the Emitter which this track mill modify over time.
	*/
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatParticleParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatParticleParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatParticleParam;
	static C(Other: UObject): InterpTrackFloatParticleParam;
}

declare class InterpTrackFloatProp extends InterpTrackFloatBase { 
	/**
	 * Name of property in Group  AActor  which this track mill modify over time.
	*/
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatProp;
	static C(Other: UObject): InterpTrackFloatProp;
}

declare type EInterpMoveAxis = string;
declare class InterpTrackMoveAxis extends InterpTrackFloatBase { 
	/**
	 * The axis which this track will use when transforming an actor
	*/
	MoveAxis: EInterpMoveAxis;
	/**
	 * Lookup track to use when looking at different groups for transform information
	*/
	LookupTrack: InterpLookupTrack;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackMoveAxis;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackMoveAxis;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackMoveAxis;
	static C(Other: UObject): InterpTrackMoveAxis;
}

declare class InterpTrackSlomo extends InterpTrackFloatBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackSlomo;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackSlomo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackSlomo;
	static C(Other: UObject): InterpTrackSlomo;
}

declare class InterpCurvePointLinearColor { 
	/**
	 * In Val
	*/
	InVal: number;
	/**
	 * Out Val
	*/
	OutVal: LinearColor;
	/**
	 * Arrive Tangent
	*/
	ArriveTangent: LinearColor;
	/**
	 * Leave Tangent
	*/
	LeaveTangent: LinearColor;
	/**
	 * Interp Mode
	*/
	InterpMode: EInterpCurveMode;
}

declare class InterpCurveLinearColor { 
	/**
	 * Points
	*/
	Points: InterpCurvePointLinearColor[];
	/**
	 * Is Looped
	*/
	bIsLooped: boolean;
	/**
	 * Loop Key Offset
	*/
	LoopKeyOffset: number;
}

declare class InterpTrackLinearColorBase extends InterpTrack { 
	/**
	 * Actually track data containing keyframes of a FVector as it varies over time.
	*/
	LinearColorTrack: InterpCurveLinearColor;
	/**
	 * Tension of curve, used for keypoints using automatic tangents.
	*/
	CurveTension: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackLinearColorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackLinearColorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackLinearColorBase;
	static C(Other: UObject): InterpTrackLinearColorBase;
}

declare class InterpTrackLinearColorProp extends InterpTrackLinearColorBase { 
	/**
	 * Name of property in Group  AActor  which this track mill modify over time.
	*/
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackLinearColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackLinearColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackLinearColorProp;
	static C(Other: UObject): InterpTrackLinearColorProp;
}

declare class ParticleReplayTrackKey { 
	/**
	 * Position along timeline
	*/
	Time: number;
	/**
	 * Time length this clip should be captured/played for
	*/
	Duration: number;
	/**
	 * Replay clip ID number that identifies the clip we should capture to or playback from
	*/
	ClipIDNumber: number;
}

declare class InterpTrackParticleReplay extends InterpTrack { 
	/**
	 * Array of keys
	*/
	TrackKeys: ParticleReplayTrackKey[];
	/**
	 * True in the editor if track should be used to capture replay frames instead of play them back
	*/
	bIsCapturingReplay: boolean;
	/**
	 * Current replay fixed time quantum between frames (one over frame rate)
	*/
	FixedTimeStep: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackParticleReplay;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackParticleReplay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackParticleReplay;
	static C(Other: UObject): InterpTrackParticleReplay;
}

declare type ETrackToggleAction = string;
declare class ToggleTrackKey { 
	/**
	 * Time
	*/
	Time: number;
	/**
	 * Toggle Action
	*/
	ToggleAction: ETrackToggleAction;
}

declare class InterpTrackToggle extends InterpTrack { 
	/**
	 * Array of events to fire off.
	*/
	ToggleTrack: ToggleTrackKey[];
	/**
	 * If true, the track will call ActivateSystem on the emitter each update (the old 'incorrect' behavior).
	 * If false (the default), the System will only be activated if it was previously inactive.
	*/
	bActivateSystemEachUpdate: boolean;
	/**
	 * If true, the track will activate the system w/ the 'Just Attached' flag.
	*/
	bActivateWithJustAttachedFlag: boolean;
	/**
	 * If events should be fired when passed playing the sequence forwards.
	*/
	bFireEventsWhenForwards: boolean;
	/**
	 * If events should be fired when passed playing the sequence backwards.
	*/
	bFireEventsWhenBackwards: boolean;
	/**
	 * If true, events on this track are fired even when jumping forwads through a sequence - for example, skipping a cinematic.
	*/
	bFireEventsWhenJumpingForwards: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackToggle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackToggle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackToggle;
	static C(Other: UObject): InterpTrackToggle;
}

declare class InterpTrackVectorBase extends InterpTrack { 
	/**
	 * Actually track data containing keyframes of a FVector as it varies over time.
	*/
	VectorTrack: InterpCurveVector;
	/**
	 * Tension of curve, used for keypoints using automatic tangents.
	*/
	CurveTension: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVectorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVectorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVectorBase;
	static C(Other: UObject): InterpTrackVectorBase;
}

declare class InterpTrackAudioMaster extends InterpTrackVectorBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackAudioMaster;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackAudioMaster;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackAudioMaster;
	static C(Other: UObject): InterpTrackAudioMaster;
}

declare class InterpTrackColorProp extends InterpTrackVectorBase { 
	/**
	 * Name of property in Group  AActor  which this track mill modify over time.
	*/
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackColorProp;
	static C(Other: UObject): InterpTrackColorProp;
}

declare class InterpTrackColorScale extends InterpTrackVectorBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackColorScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackColorScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackColorScale;
	static C(Other: UObject): InterpTrackColorScale;
}

declare class SoundTrackKey { 
	/**
	 * Time
	*/
	Time: number;
	/**
	 * Volume
	*/
	Volume: number;
	/**
	 * Pitch
	*/
	Pitch: number;
	/**
	 * Sound
	*/
	Sound: SoundBase;
}

declare class InterpTrackSound extends InterpTrackVectorBase { 
	/**
	 * Array of sounds to play at specific times.
	*/
	Sounds: SoundTrackKey[];
	/**
	 * if set, sound plays only when playing the matinee in reverse instead of when the matinee plays forward
	*/
	bPlayOnReverse: boolean;
	/**
	 * If true, sounds on this track will not be forced to finish when the matinee sequence finishes.
	*/
	bContinueSoundOnMatineeEnd: boolean;
	/**
	 * If true, don't show subtitles for sounds played by this track.
	*/
	bSuppressSubtitles: boolean;
	/**
	 * If true and track is controlling a pawn, makes the pawn "speak" the given audio.
	*/
	bTreatAsDialogue: boolean;
	/**
	 * Attach
	*/
	bAttach: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackSound;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackSound;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackSound;
	static C(Other: UObject): InterpTrackSound;
}

declare class InterpTrackVectorMaterialParam extends InterpTrackVectorBase { 
	/**
	 * Materials whose parameters we want to change and the references to those materials.
	*/
	TargetMaterials: MaterialInterface[];
	/**
	 * Name of parameter in the MaterialInstance which this track will modify over time.
	*/
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVectorMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVectorMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVectorMaterialParam;
	static C(Other: UObject): InterpTrackVectorMaterialParam;
}

declare class InterpTrackVectorProp extends InterpTrackVectorBase { 
	/**
	 * Name of property in Group  AActor  which this track mill modify over time.
	*/
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVectorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVectorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVectorProp;
	static C(Other: UObject): InterpTrackVectorProp;
}

declare type EVisibilityTrackAction = string;
declare type EVisibilityTrackCondition = string;
declare class VisibilityTrackKey { 
	/**
	 * Time
	*/
	Time: number;
	/**
	 * Action
	*/
	Action: EVisibilityTrackAction;
	/**
	 * Condition that must be satisfied for this key event to fire
	*/
	ActiveCondition: EVisibilityTrackCondition;
}

declare class InterpTrackVisibility extends InterpTrack { 
	/**
	 * Array of events to fire off.
	*/
	VisibilityTrack: VisibilityTrackKey[];
	/**
	 * If events should be fired when passed playing the sequence forwards.
	*/
	bFireEventsWhenForwards: boolean;
	/**
	 * If events should be fired when passed playing the sequence backwards.
	*/
	bFireEventsWhenBackwards: boolean;
	/**
	 * If true, events on this track are fired even when jumping forwads through a sequence - for example, skipping a cinematic.
	*/
	bFireEventsWhenJumpingForwards: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVisibility;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVisibility;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVisibility;
	static C(Other: UObject): InterpTrackVisibility;
}

declare class InterpTrackInstAnimControl extends InterpTrackInst { 
	/**
	 * Last Update Position
	*/
	LastUpdatePosition: number;
	/**
	 * Init Position
	*/
	InitPosition: Vector;
	/**
	 * Init Rotation
	*/
	InitRotation: Rotator;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstAnimControl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstAnimControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstAnimControl;
	static C(Other: UObject): InterpTrackInstAnimControl;
}

declare class InterpTrackInstAudioMaster extends InterpTrackInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstAudioMaster;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstAudioMaster;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstAudioMaster;
	static C(Other: UObject): InterpTrackInstAudioMaster;
}

declare class InterpTrackInstColorScale extends InterpTrackInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstColorScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstColorScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstColorScale;
	static C(Other: UObject): InterpTrackInstColorScale;
}

declare class InterpTrackInstEvent extends InterpTrackInst { 
	/**
	 * Position we were in last time we evaluated Events.
	 * During UpdateTrack, events between this time and the current time will be fired.
	*/
	LastUpdatePosition: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstEvent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstEvent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstEvent;
	static C(Other: UObject): InterpTrackInstEvent;
}

declare class InterpTrackInstFade extends InterpTrackInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFade;
	static C(Other: UObject): InterpTrackInstFade;
}

declare class InterpTrackInstFloatAnimBPParam extends InterpTrackInst { 
	/**
	 * MIDs we're using to set the desired parameter.
	*/
	AnimScriptInstance: AnimInstance;
	/**
	 * Saved values for restoring state when exiting Matinee.
	*/
	ResetFloat: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatAnimBPParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatAnimBPParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatAnimBPParam;
	static C(Other: UObject): InterpTrackInstFloatAnimBPParam;
}

declare class PrimitiveMaterialRef { 
	/**
	 * Primitive
	*/
	Primitive: PrimitiveComponent;
	/**
	 * Decal
	*/
	Decal: DecalComponent;
	/**
	 * Element Index
	*/
	ElementIndex: number;
}

declare class InterpTrackInstFloatMaterialParam extends InterpTrackInst { 
	/**
	 * MIDs we're using to set the desired parameter.
	*/
	MaterialInstances: MaterialInstanceDynamic[];
	/**
	 * Saved values for restoring state when exiting Matinee.
	*/
	ResetFloats: number[];
	/**
	 * Primitive components on which materials have been overridden.
	*/
	PrimitiveMaterialRefs: PrimitiveMaterialRef[];
	/**
	 * track we are an instance of - used in the editor to propagate changes to the track's Materials array immediately
	*/
	InstancedTrack: InterpTrackFloatMaterialParam;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatMaterialParam;
	static C(Other: UObject): InterpTrackInstFloatMaterialParam;
}

declare class InterpTrackInstFloatParticleParam extends InterpTrackInst { 
	/**
	 * Saved value for restoring state when exiting Matinee.
	*/
	ResetFloat: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatParticleParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatParticleParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatParticleParam;
	static C(Other: UObject): InterpTrackInstFloatParticleParam;
}

declare class InterpTrackInstParticleReplay extends InterpTrackInst { 
	/**
	 * Position we were in last time we evaluated.
	 * During UpdateTrack, events between this time and the current time will be processed.
	*/
	LastUpdatePosition: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstParticleReplay;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstParticleReplay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstParticleReplay;
	static C(Other: UObject): InterpTrackInstParticleReplay;
}

declare class InterpTrackInstProperty extends InterpTrackInst { 
	/**
	 * Function to call after updating the value of the color property.
	*/
	InterpProperty: Property;
	/**
	 * Pointer to the UObject instance that is the outer of the color property we are interpolating on, this is used to process the property update callback.
	*/
	PropertyOuterObjectInst: UObject;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstProperty;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstProperty;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstProperty;
	static C(Other: UObject): InterpTrackInstProperty;
}

declare class InterpTrackInstBoolProp extends InterpTrackInstProperty { 
	/**
	 * Mask that indicates which bit the boolean property actually uses of the value pointed to by BoolProp.
	*/
	BoolProperty: BoolProperty;
	/**
	 * Saved value for restoring state when exiting Matinee.
	*/
	ResetBool: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstBoolProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstBoolProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstBoolProp;
	static C(Other: UObject): InterpTrackInstBoolProp;
}

declare class InterpTrackInstColorProp extends InterpTrackInstProperty { 
	/**
	 * Saved value for restoring state when exiting Matinee.
	*/
	ResetColor: Color;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstColorProp;
	static C(Other: UObject): InterpTrackInstColorProp;
}

declare class InterpTrackInstFloatProp extends InterpTrackInstProperty { 
	/**
	 * Saved value for restoring state when exiting Matinee.
	*/
	ResetFloat: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatProp;
	static C(Other: UObject): InterpTrackInstFloatProp;
}

declare class InterpTrackInstLinearColorProp extends InterpTrackInstProperty { 
	/**
	 * Saved value for restoring state when exiting Matinee.
	*/
	ResetColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstLinearColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstLinearColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstLinearColorProp;
	static C(Other: UObject): InterpTrackInstLinearColorProp;
}

declare class InterpTrackInstVectorProp extends InterpTrackInstProperty { 
	/**
	 * Saved value for restoring state when exiting Matinee.
	*/
	ResetVector: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstVectorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstVectorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstVectorProp;
	static C(Other: UObject): InterpTrackInstVectorProp;
}

declare class InterpTrackInstSlomo extends InterpTrackInst { 
	/**
	 * Backup of initial LevelInfo MatineeTimeDilation setting when interpolation started.
	*/
	OldTimeDilation: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstSlomo;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstSlomo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstSlomo;
	static C(Other: UObject): InterpTrackInstSlomo;
}

declare class InterpTrackInstSound extends InterpTrackInst { 
	/**
	 * Last Update Position
	*/
	LastUpdatePosition: number;
	/**
	 * Play Audio Comp
	*/
	PlayAudioComp: AudioComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstSound;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstSound;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstSound;
	static C(Other: UObject): InterpTrackInstSound;
}

declare class InterpTrackInstToggle extends InterpTrackInst { 
	/**
	 * Action
	*/
	Action: ETrackToggleAction;
	/**
	 * Position we were in last time we evaluated.
	 * During UpdateTrack, toggles between this time and the current time will be processed.
	*/
	LastUpdatePosition: number;
	/**
	 * Cached 'active' state for the toggleable actor before we possessed it; restored when Matinee exits
	*/
	bSavedActiveState: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstToggle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstToggle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstToggle;
	static C(Other: UObject): InterpTrackInstToggle;
}

declare class InterpTrackInstVectorMaterialParam extends InterpTrackInst { 
	/**
	 * MIDs we're using to set the desired parameter.
	*/
	MaterialInstances: MaterialInstanceDynamic[];
	/**
	 * Saved values for restoring state when exiting Matinee.
	*/
	ResetVectors: Vector[];
	/**
	 * Primitive components on which materials have been overridden.
	*/
	PrimitiveMaterialRefs: PrimitiveMaterialRef[];
	/**
	 * Track we are an instance of - used in the editor to propagate changes to the track's Materials array immediately.
	*/
	InstancedTrack: InterpTrackVectorMaterialParam;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstVectorMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstVectorMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstVectorMaterialParam;
	static C(Other: UObject): InterpTrackInstVectorMaterialParam;
}

declare class InterpTrackInstVisibility extends InterpTrackInst { 
	/**
	 * Action
	*/
	Action: EVisibilityTrackAction;
	/**
	 * Position we were in last time we evaluated.
	 * During UpdateTrack, events between this time and the current time will be processed.
	*/
	LastUpdatePosition: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstVisibility;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstVisibility;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstVisibility;
	static C(Other: UObject): InterpTrackInstVisibility;
}

declare class IntSerialization extends UObject { 
	/**
	 * New types
	*/
	UnsignedInt16Variable: any;
	/**
	 * Unsigned Int 32Variable
	*/
	UnsignedInt32Variable: any;
	/**
	 * Unsigned Int 64Variable
	*/
	UnsignedInt64Variable: any;
	/**
	 * Signed Int 8Variable
	*/
	SignedInt8Variable: any;
	/**
	 * Signed Int 16Variable
	*/
	SignedInt16Variable: any;
	/**
	 * Signed Int 64Variable
	*/
	SignedInt64Variable: any;
	/**
	 * Existing types
	*/
	UnsignedInt8Variable: number;
	/**
	 * Signed Int 32Variable
	*/
	SignedInt32Variable: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IntSerialization;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IntSerialization;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IntSerialization;
	static C(Other: UObject): IntSerialization;
}

declare class LevelStreamingAlwaysLoaded extends LevelStreaming { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelStreamingAlwaysLoaded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelStreamingAlwaysLoaded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelStreamingAlwaysLoaded;
	static C(Other: UObject): LevelStreamingAlwaysLoaded;
}

declare class LevelStreamingKismet extends LevelStreaming { 
	/**
	 * Whether the level should be loaded at startup
	*/
	bInitiallyLoaded: boolean;
	/**
	 * Whether the level should be visible at startup if it is loaded
	*/
	bInitiallyVisible: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelStreamingKismet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelStreamingKismet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelStreamingKismet;
	static C(Other: UObject): LevelStreamingKismet;
}

declare class LevelStreamingPersistent extends LevelStreaming { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelStreamingPersistent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelStreamingPersistent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelStreamingPersistent;
	static C(Other: UObject): LevelStreamingPersistent;
}

declare class LightmappedSurfaceCollection extends UObject { 
	/**
	 * The UModel these surfaces come from.
	*/
	SourceModel: Model;
	/**
	 * An array of the surface indices grouped into a single static lighting mapping.
	*/
	Surfaces: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightmappedSurfaceCollection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightmappedSurfaceCollection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightmappedSurfaceCollection;
	static C(Other: UObject): LightmappedSurfaceCollection;
}

declare class LightmassPrimitiveSettingsObject extends UObject { 
	/**
	 * Lightmass Settings
	*/
	LightmassSettings: LightmassPrimitiveSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightmassPrimitiveSettingsObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightmassPrimitiveSettingsObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightmassPrimitiveSettingsObject;
	static C(Other: UObject): LightmassPrimitiveSettingsObject;
}

declare class EngineMessage extends LocalMessage { 
	/**
	 * Message displayed in message dialog when player pawn fails to spawn because no playerstart was available.
	*/
	FailedPlaceMessage: string;
	/**
	 * Message when player join attempt is refused because the server is at capacity.
	*/
	MaxedOutMessage: string;
	/**
	 * Message when a new player enters the game.
	*/
	EnteredMessage: string;
	/**
	 * Message when a player leaves the game.
	*/
	LeftMessage: string;
	/**
	 * Message when a player changes his name.
	*/
	GlobalNameChange: string;
	/**
	 * Message when a new spectator enters the server (if spectator has a player name).
	*/
	SpecEnteredMessage: string;
	/**
	 * Message when a new player enters the server (if player is unnamed).
	*/
	NewPlayerMessage: string;
	/**
	 * Message when a new spectator enters the server (if spectator is unnamed).
	*/
	NewSpecMessage: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EngineMessage;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EngineMessage;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EngineMessage;
	static C(Other: UObject): EngineMessage;
}

declare class MaterialExpressionAbs extends MaterialExpression { 
	/**
	 * Link to the input expression to be evaluated
	*/
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAbs;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAbs;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAbs;
	static C(Other: UObject): MaterialExpressionAbs;
}

declare class MaterialExpressionActorPositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionActorPositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionActorPositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionActorPositionWS;
	static C(Other: UObject): MaterialExpressionActorPositionWS;
}

declare class MaterialExpressionAdd extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAdd;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAdd;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAdd;
	static C(Other: UObject): MaterialExpressionAdd;
}

declare class MaterialExpressionAppendVector extends MaterialExpression { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAppendVector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAppendVector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAppendVector;
	static C(Other: UObject): MaterialExpressionAppendVector;
}

declare class MaterialExpressionAtmosphericFogColor extends MaterialExpression { 
	/**
	 * World Position
	*/
	WorldPosition: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAtmosphericFogColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAtmosphericFogColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAtmosphericFogColor;
	static C(Other: UObject): MaterialExpressionAtmosphericFogColor;
}

declare class MaterialExpressionBlackBody extends MaterialExpression { 
	/**
	 * Temperature
	*/
	Temp: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionBlackBody;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionBlackBody;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionBlackBody;
	static C(Other: UObject): MaterialExpressionBlackBody;
}

declare class MaterialExpressionBreakMaterialAttributes extends MaterialExpression { 
	/**
	 * Struct
	*/
	Struct: ExpressionInput;
	/**
	 * Material Attributes
	*/
	MaterialAttributes: MaterialAttributesInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionBreakMaterialAttributes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionBreakMaterialAttributes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionBreakMaterialAttributes;
	static C(Other: UObject): MaterialExpressionBreakMaterialAttributes;
}

declare class MaterialExpressionBumpOffset extends MaterialExpression { 
	/**
	 * Defaults to 'ConstCoordinate' if not specified
	*/
	Coordinate: ExpressionInput;
	/**
	 * Height
	*/
	Height: ExpressionInput;
	/**
	 * Height Ratio Input
	*/
	HeightRatioInput: ExpressionInput;
	/**
	 * Height Ratio
	*/
	HeightRatio: number;
	/**
	 * Perceived height as a fraction of width.
	*/
	ReferencePlane: number;
	/**
	 * only used if Coordinate is not hooked up
	*/
	ConstCoordinate: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionBumpOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionBumpOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionBumpOffset;
	static C(Other: UObject): MaterialExpressionBumpOffset;
}

declare class MaterialExpressionCameraPositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCameraPositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCameraPositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCameraPositionWS;
	static C(Other: UObject): MaterialExpressionCameraPositionWS;
}

declare class MaterialExpressionCameraVectorWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCameraVectorWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCameraVectorWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCameraVectorWS;
	static C(Other: UObject): MaterialExpressionCameraVectorWS;
}

declare class MaterialExpressionCeil extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCeil;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCeil;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCeil;
	static C(Other: UObject): MaterialExpressionCeil;
}

declare type EClampMode = string;
declare class MaterialExpressionClamp extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	/**
	 * Defaults to 'MinDefault' if not specified
	*/
	Min: ExpressionInput;
	/**
	 * Defaults to 'MaxDefault' if not specified
	*/
	Max: ExpressionInput;
	/**
	 * Clamp Mode
	*/
	ClampMode: EClampMode;
	/**
	 * Min Default
	*/
	MinDefault: number;
	/**
	 * Max Default
	*/
	MaxDefault: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionClamp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionClamp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionClamp;
	static C(Other: UObject): MaterialExpressionClamp;
}

declare class MaterialExpressionCollectionParameter extends MaterialExpression { 
	/**
	 * The Parameter Collection to use.
	*/
	Collection: MaterialParameterCollection;
	/**
	 * Name of the parameter being referenced.
	*/
	ParameterName: string;
	/**
	 * Id that is set from the name, and used to handle renaming of collection parameters.
	*/
	ParameterId: Guid;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCollectionParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCollectionParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCollectionParameter;
	static C(Other: UObject): MaterialExpressionCollectionParameter;
}

declare class MaterialExpressionComponentMask extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	/**
	 * R
	*/
	R: boolean;
	/**
	 * G
	*/
	G: boolean;
	/**
	 * B
	*/
	B: boolean;
	/**
	 * A
	*/
	A: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionComponentMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionComponentMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionComponentMask;
	static C(Other: UObject): MaterialExpressionComponentMask;
}

declare class MaterialExpressionConstant extends MaterialExpression { 
	/**
	 * R
	*/
	R: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant;
	static C(Other: UObject): MaterialExpressionConstant;
}

declare class MaterialExpressionConstant2Vector extends MaterialExpression { 
	/**
	 * R
	*/
	R: number;
	/**
	 * G
	*/
	G: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant2Vector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant2Vector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant2Vector;
	static C(Other: UObject): MaterialExpressionConstant2Vector;
}

declare class MaterialExpressionConstant3Vector extends MaterialExpression { 
	/**
	 * Constant
	*/
	Constant: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant3Vector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant3Vector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant3Vector;
	static C(Other: UObject): MaterialExpressionConstant3Vector;
}

declare class MaterialExpressionConstant4Vector extends MaterialExpression { 
	/**
	 * Constant
	*/
	Constant: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant4Vector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant4Vector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant4Vector;
	static C(Other: UObject): MaterialExpressionConstant4Vector;
}

declare class MaterialExpressionConstantBiasScale extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	/**
	 * Bias
	*/
	Bias: number;
	/**
	 * Scale
	*/
	Scale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstantBiasScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstantBiasScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstantBiasScale;
	static C(Other: UObject): MaterialExpressionConstantBiasScale;
}

declare class MaterialExpressionCosine extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	/**
	 * Period
	*/
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCosine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCosine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCosine;
	static C(Other: UObject): MaterialExpressionCosine;
}

declare class MaterialExpressionCrossProduct extends MaterialExpression { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCrossProduct;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCrossProduct;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCrossProduct;
	static C(Other: UObject): MaterialExpressionCrossProduct;
}

declare type ECustomMaterialOutputType = string;
declare class CustomInput { 
	/**
	 * Input Name
	*/
	InputName: string;
	/**
	 * Input
	*/
	Input: ExpressionInput;
}

declare class MaterialExpressionCustom extends MaterialExpression { 
	/**
	 * Code
	*/
	Code: string;
	/**
	 * Output Type
	*/
	OutputType: ECustomMaterialOutputType;
	/**
	 * Description
	*/
	Description: string;
	/**
	 * Inputs
	*/
	Inputs: CustomInput[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCustom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCustom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCustom;
	static C(Other: UObject): MaterialExpressionCustom;
}

declare class MaterialExpressionDDX extends MaterialExpression { 
	/**
	 * The value we want to compute ddx/ddy from
	*/
	Value: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDDX;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDDX;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDDX;
	static C(Other: UObject): MaterialExpressionDDX;
}

declare class MaterialExpressionDDY extends MaterialExpression { 
	/**
	 * The value we want to compute ddx/ddy from
	*/
	Value: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDDY;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDDY;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDDY;
	static C(Other: UObject): MaterialExpressionDDY;
}

declare class MaterialExpressionDecalMipmapLevel extends MaterialExpression { 
	/**
	 * Defaults to '(Const Width, Const Height)' if not specified
	*/
	TextureSize: ExpressionInput;
	/**
	 * only used if TextureSize is not hooked up
	*/
	ConstWidth: number;
	/**
	 * Const Height
	*/
	ConstHeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDecalMipmapLevel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDecalMipmapLevel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDecalMipmapLevel;
	static C(Other: UObject): MaterialExpressionDecalMipmapLevel;
}

declare class MaterialExpressionDepthFade extends MaterialExpression { 
	/**
	 * Defaults to 'OpacityDefault' if not specified
	*/
	InOpacity: ExpressionInput;
	/**
	 * Defaults to 'FadeDistanceDefault' if not specified
	*/
	FadeDistance: ExpressionInput;
	/**
	 * Opacity which will be scaled by the result of the fade.  This is used when InOpacity is unconnected.
	*/
	OpacityDefault: number;
	/**
	 * World space distance over which the fade should take place.  This is used when FadeDistance is unconnected.
	*/
	FadeDistanceDefault: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDepthFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDepthFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDepthFade;
	static C(Other: UObject): MaterialExpressionDepthFade;
}

declare type EDepthOfFieldFunctionValue = string;
declare class MaterialExpressionDepthOfFieldFunction extends MaterialExpression { 
	/**
	 * Determines the mapping place to use on the terrain.
	*/
	FunctionValue: EDepthOfFieldFunctionValue;
	/**
	 * usually nothing or PixelDepth
	*/
	Depth: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDepthOfFieldFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDepthOfFieldFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDepthOfFieldFunction;
	static C(Other: UObject): MaterialExpressionDepthOfFieldFunction;
}

declare class MaterialExpressionDeriveNormalZ extends MaterialExpression { 
	/**
	 * In XY
	*/
	InXY: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDeriveNormalZ;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDeriveNormalZ;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDeriveNormalZ;
	static C(Other: UObject): MaterialExpressionDeriveNormalZ;
}

declare class MaterialExpressionDesaturation extends MaterialExpression { 
	/**
	 * Outputs: Lerp(Input,dot(Input,LuminanceFactors)),Fraction)
	*/
	Input: ExpressionInput;
	/**
	 * Fraction
	*/
	Fraction: ExpressionInput;
	/**
	 * Luminance Factors
	*/
	LuminanceFactors: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDesaturation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDesaturation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDesaturation;
	static C(Other: UObject): MaterialExpressionDesaturation;
}

declare class MaterialExpressionDistance extends MaterialExpression { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistance;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistance;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistance;
	static C(Other: UObject): MaterialExpressionDistance;
}

declare class MaterialExpressionDistanceCullFade extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistanceCullFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistanceCullFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistanceCullFade;
	static C(Other: UObject): MaterialExpressionDistanceCullFade;
}

declare class MaterialExpressionDistanceFieldGradient extends MaterialExpression { 
	/**
	 * Defaults to current world position if not specified
	*/
	Position: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistanceFieldGradient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistanceFieldGradient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistanceFieldGradient;
	static C(Other: UObject): MaterialExpressionDistanceFieldGradient;
}

declare class MaterialExpressionDistanceToNearestSurface extends MaterialExpression { 
	/**
	 * Defaults to current world position if not specified
	*/
	Position: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistanceToNearestSurface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistanceToNearestSurface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistanceToNearestSurface;
	static C(Other: UObject): MaterialExpressionDistanceToNearestSurface;
}

declare class MaterialExpressionDivide extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDivide;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDivide;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDivide;
	static C(Other: UObject): MaterialExpressionDivide;
}

declare class MaterialExpressionDotProduct extends MaterialExpression { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDotProduct;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDotProduct;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDotProduct;
	static C(Other: UObject): MaterialExpressionDotProduct;
}

declare class MaterialExpressionDynamicParameter extends MaterialExpression { 
	/**
	 * The names of the parameters.
	 * These will show up in Cascade when editing a particle system
	 * that uses the material it is in...
	*/
	ParamNames: string[];
	/**
	 * Default Value
	*/
	DefaultValue: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDynamicParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDynamicParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDynamicParameter;
	static C(Other: UObject): MaterialExpressionDynamicParameter;
}

declare class MaterialExpressionEyeAdaptation extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionEyeAdaptation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionEyeAdaptation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionEyeAdaptation;
	static C(Other: UObject): MaterialExpressionEyeAdaptation;
}

declare class MaterialExpressionFeatureLevelSwitch extends MaterialExpression { 
	/**
	 * Default connection, used when a certain feature level doesn't have an override.
	*/
	Default: ExpressionInput;
	/**
	 * Inputs
	*/
	Inputs: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFeatureLevelSwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFeatureLevelSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFeatureLevelSwitch;
	static C(Other: UObject): MaterialExpressionFeatureLevelSwitch;
}

declare class MaterialExpressionFloor extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFloor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFloor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFloor;
	static C(Other: UObject): MaterialExpressionFloor;
}

declare class MaterialExpressionFmod extends MaterialExpression { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFmod;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFmod;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFmod;
	static C(Other: UObject): MaterialExpressionFmod;
}

declare class MaterialExpressionFontSample extends MaterialExpression { 
	/**
	 * font resource that will be sampled
	*/
	Font: Font;
	/**
	 * allow access to the various font pages
	*/
	FontTexturePage: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFontSample;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFontSample;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFontSample;
	static C(Other: UObject): MaterialExpressionFontSample;
}

declare class MaterialExpressionFontSampleParameter extends MaterialExpressionFontSample { 
	/**
	 * name to be referenced when we want to find and set thsi parameter
	*/
	ParameterName: string;
	/**
	 * GUID that should be unique within the material, this is used for parameter renaming.
	*/
	ExpressionGUID: Guid;
	/**
	 * The name of the parameter Group to display in MaterialInstance Editor. Default is None group
	*/
	Group: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFontSampleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFontSampleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFontSampleParameter;
	static C(Other: UObject): MaterialExpressionFontSampleParameter;
}

declare class MaterialExpressionFrac extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFrac;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFrac;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFrac;
	static C(Other: UObject): MaterialExpressionFrac;
}

declare class MaterialExpressionFresnel extends MaterialExpression { 
	/**
	 * Defaults to 'Exponent' if not specified
	*/
	ExponentIn: ExpressionInput;
	/**
	 * The exponent to pass into the pow() function
	*/
	Exponent: number;
	/**
	 * Defaults to 'BaseReflectFraction' if not specified
	*/
	BaseReflectFractionIn: ExpressionInput;
	/**
	 * Specifies the fraction of specular reflection when the surfaces is viewed from straight on.
	 * A value of 1 effectively disables Fresnel.
	*/
	BaseReflectFraction: number;
	/**
	 * Defaults to Pixel World Normal if not specified
	*/
	Normal: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFresnel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFresnel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFresnel;
	static C(Other: UObject): MaterialExpressionFresnel;
}

declare type EFunctionInputType = string;
declare class MaterialExpressionFunctionInput extends MaterialExpression { 
	/**
	 * Used for previewing when editing the function, also temporarily used to connect to the outside material when compiling that material.
	*/
	Preview: ExpressionInput;
	/**
	 * The input's name, which will be drawn on the connector in function call expressions that use this function.
	*/
	InputName: string;
	/**
	 * The input's description, which will be used as a tooltip on the connector in function call expressions that use this function.
	*/
	Description: string;
	/**
	 * Id of this input, used to maintain references through name changes.
	*/
	Id: Guid;
	/**
	 * Type of this input.
	 * Input code chunks will be cast to this type, and a compiler error will be emitted if the cast fails.
	*/
	InputType: EFunctionInputType;
	/**
	 * Value used to preview this input when editing the material function.
	*/
	PreviewValue: Vector4;
	/**
	 * Whether to use the preview value or texture as the default value for this input.
	*/
	bUsePreviewValueAsDefault: boolean;
	/**
	 * Controls where the input is displayed relative to the other inputs.
	*/
	SortPriority: number;
	/**
	 * true when this expression is being compiled in a function preview,
	 * false when this expression is being compiled into a material that uses the function.
	 * Only valid in Compile()
	*/
	bCompilingFunctionPreview: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFunctionInput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFunctionInput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFunctionInput;
	static C(Other: UObject): MaterialExpressionFunctionInput;
}

declare class MaterialExpressionFunctionOutput extends MaterialExpression { 
	/**
	 * The output's name, which will be drawn on the connector in function call expressions that use this function.
	*/
	OutputName: string;
	/**
	 * The output's description, which will be used as a tooltip on the connector in function call expressions that use this function.
	*/
	Description: string;
	/**
	 * Controls where the output is displayed relative to the other outputs.
	*/
	SortPriority: number;
	/**
	 * Stores the expression in the material function connected to this output.
	*/
	A: ExpressionInput;
	/**
	 * Whether this output was previewed the last time this function was edited.
	*/
	bLastPreviewed: boolean;
	/**
	 * Id of this input, used to maintain references through name changes.
	*/
	Id: Guid;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFunctionOutput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFunctionOutput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFunctionOutput;
	static C(Other: UObject): MaterialExpressionFunctionOutput;
}

declare class MaterialExpressionGIReplace extends MaterialExpression { 
	/**
	 * Used for direct lighting computations e.g. real-time shaders
	*/
	Default: ExpressionInput;
	/**
	 * Used for baked indirect lighting e.g. Lightmass
	*/
	StaticIndirect: ExpressionInput;
	/**
	 * Used for dynamic indirect lighting e.g. Light Propagation Volumes
	*/
	DynamicIndirect: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionGIReplace;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionGIReplace;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionGIReplace;
	static C(Other: UObject): MaterialExpressionGIReplace;
}

declare class MaterialExpressionIf extends MaterialExpression { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * AGreater Than B
	*/
	AGreaterThanB: ExpressionInput;
	/**
	 * AEquals B
	*/
	AEqualsB: ExpressionInput;
	/**
	 * ALess Than B
	*/
	ALessThanB: ExpressionInput;
	/**
	 * Equals Threshold
	*/
	EqualsThreshold: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	/**
	 * Const AEquals B
	*/
	ConstAEqualsB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionIf;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionIf;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionIf;
	static C(Other: UObject): MaterialExpressionIf;
}

declare class MaterialExpressionLightmapUVs extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLightmapUVs;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLightmapUVs;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLightmapUVs;
	static C(Other: UObject): MaterialExpressionLightmapUVs;
}

declare class MaterialExpressionLightmassReplace extends MaterialExpression { 
	/**
	 * Realtime
	*/
	Realtime: ExpressionInput;
	/**
	 * Lightmass
	*/
	Lightmass: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLightmassReplace;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLightmassReplace;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLightmassReplace;
	static C(Other: UObject): MaterialExpressionLightmassReplace;
}

declare class MaterialExpressionLightVector extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLightVector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLightVector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLightVector;
	static C(Other: UObject): MaterialExpressionLightVector;
}

declare class MaterialExpressionLinearInterpolate extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * Defaults to 'ConstAlpha' if not specified
	*/
	Alpha: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	/**
	 * only used if Alpha is not hooked up
	*/
	ConstAlpha: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLinearInterpolate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLinearInterpolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLinearInterpolate;
	static C(Other: UObject): MaterialExpressionLinearInterpolate;
}

declare class MaterialExpressionLogarithm2 extends MaterialExpression { 
	/**
	 * X
	*/
	X: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLogarithm2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLogarithm2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLogarithm2;
	static C(Other: UObject): MaterialExpressionLogarithm2;
}

declare class MaterialExpressionMakeMaterialAttributes extends MaterialExpression { 
	/**
	 * Base Color
	*/
	BaseColor: ExpressionInput;
	/**
	 * Metallic
	*/
	Metallic: ExpressionInput;
	/**
	 * Specular
	*/
	Specular: ExpressionInput;
	/**
	 * Roughness
	*/
	Roughness: ExpressionInput;
	/**
	 * Emissive Color
	*/
	EmissiveColor: ExpressionInput;
	/**
	 * Opacity
	*/
	Opacity: ExpressionInput;
	/**
	 * Opacity Mask
	*/
	OpacityMask: ExpressionInput;
	/**
	 * Normal
	*/
	Normal: ExpressionInput;
	/**
	 * World Position Offset
	*/
	WorldPositionOffset: ExpressionInput;
	/**
	 * World Displacement
	*/
	WorldDisplacement: ExpressionInput;
	/**
	 * Tessellation Multiplier
	*/
	TessellationMultiplier: ExpressionInput;
	/**
	 * Subsurface Color
	*/
	SubsurfaceColor: ExpressionInput;
	/**
	 * Clear Coat
	*/
	ClearCoat: ExpressionInput;
	/**
	 * Clear Coat Roughness
	*/
	ClearCoatRoughness: ExpressionInput;
	/**
	 * Ambient Occlusion
	*/
	AmbientOcclusion: ExpressionInput;
	/**
	 * Refraction
	*/
	Refraction: ExpressionInput;
	/**
	 * Customized UVs
	*/
	CustomizedUVs: ExpressionInput;
	/**
	 * Pixel Depth Offset
	*/
	PixelDepthOffset: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMakeMaterialAttributes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMakeMaterialAttributes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMakeMaterialAttributes;
	static C(Other: UObject): MaterialExpressionMakeMaterialAttributes;
}

declare class FunctionExpressionInput { 
	/**
	 * Reference to the FunctionInput in the material function.
	 * This is a reference to a private object so it can't be saved, and must be generated by UpdateFromFunctionResource or SetMaterialFunction.
	*/
	ExpressionInput: MaterialExpressionFunctionInput;
	/**
	 * Id of the FunctionInput, used to link ExpressionInput.
	*/
	ExpressionInputId: Guid;
	/**
	 * Actual input struct which stores information about how this input is connected in the material.
	*/
	Input: ExpressionInput;
}

declare class FunctionExpressionOutput { 
	/**
	 * Reference to the FunctionOutput in the material function.
	 * This is a reference to a private object so it can't be saved, and must be generated by UpdateFromFunctionResource or SetMaterialFunction.
	*/
	ExpressionOutput: MaterialExpressionFunctionOutput;
	/**
	 * Id of the FunctionOutput, used to link ExpressionOutput.
	*/
	ExpressionOutputId: Guid;
	/**
	 * Actual output struct which stores information about how this output is connected in the material.
	*/
	Output: ExpressionOutput;
}

declare class MaterialExpressionMaterialFunctionCall extends MaterialExpression { 
	/**
	 * The function to call.
	*/
	MaterialFunction: MaterialFunction;
	/**
	 * Array of all the function inputs that this function exposes.
	*/
	FunctionInputs: FunctionExpressionInput[];
	/**
	 * Array of all the function outputs that this function exposes.
	*/
	FunctionOutputs: FunctionExpressionOutput[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMaterialFunctionCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMaterialFunctionCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMaterialFunctionCall;
	static C(Other: UObject): MaterialExpressionMaterialFunctionCall;
}

declare class MaterialExpressionMax extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMax;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMax;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMax;
	static C(Other: UObject): MaterialExpressionMax;
}

declare class MaterialExpressionMin extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMin;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMin;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMin;
	static C(Other: UObject): MaterialExpressionMin;
}

declare class MaterialExpressionMultiply extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMultiply;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMultiply;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMultiply;
	static C(Other: UObject): MaterialExpressionMultiply;
}

declare type ENoiseFunction = string;
declare class MaterialExpressionNoise extends MaterialExpression { 
	/**
	 * 2 to 3 dimensional vector
	*/
	Position: ExpressionInput;
	/**
	 * scalar, to clamp the Levels at pixel level, can be computed like this: max(length(ddx(Position)), length(ddy(Position))
	*/
	FilterWidth: ExpressionInput;
	/**
	 * can also be done with a multiply on the Position
	*/
	Scale: number;
	/**
	 * Quality - 0 = 빠르며, 다른 구현을 선택할 수 있고, 퍼포먼스와 모양에 영향을 끼칠 수 있습니다.
	*/
	Quality: number;
	/**
	 * Noise function, affects performance and look
	*/
	NoiseFunction: ENoiseFunction;
	/**
	 * How multiple frequencies are getting combined
	*/
	bTurbulence: boolean;
	/**
	 * 1 = fast but little detail, .. larger numbers cost more performance, only used for turbulence
	*/
	Levels: number;
	/**
	 * Output Min
	*/
	OutputMin: number;
	/**
	 * Output Max
	*/
	OutputMax: number;
	/**
	 * usually 2 but higher values allow efficient use of few levels
	*/
	LevelScale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionNoise;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionNoise;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionNoise;
	static C(Other: UObject): MaterialExpressionNoise;
}

declare class MaterialExpressionNormalize extends MaterialExpression { 
	/**
	 * Vector Input
	*/
	VectorInput: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionNormalize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionNormalize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionNormalize;
	static C(Other: UObject): MaterialExpressionNormalize;
}

declare class MaterialExpressionObjectBounds extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectBounds;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectBounds;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectBounds;
	static C(Other: UObject): MaterialExpressionObjectBounds;
}

declare class MaterialExpressionObjectOrientation extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectOrientation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectOrientation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectOrientation;
	static C(Other: UObject): MaterialExpressionObjectOrientation;
}

declare class MaterialExpressionObjectPositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectPositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectPositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectPositionWS;
	static C(Other: UObject): MaterialExpressionObjectPositionWS;
}

declare class MaterialExpressionObjectRadius extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectRadius;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectRadius;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectRadius;
	static C(Other: UObject): MaterialExpressionObjectRadius;
}

declare class MaterialExpressionOneMinus extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionOneMinus;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionOneMinus;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionOneMinus;
	static C(Other: UObject): MaterialExpressionOneMinus;
}

declare class MaterialExpressionPanner extends MaterialExpression { 
	/**
	 * Defaults to 'ConstCoordinate' if not specified
	*/
	Coordinate: ExpressionInput;
	/**
	 * Defaults to Game Time if not specified
	*/
	Time: ExpressionInput;
	/**
	 * Speed X
	*/
	SpeedX: number;
	/**
	 * Speed Y
	*/
	SpeedY: number;
	/**
	 * only used if Coordinate is not hooked up
	*/
	ConstCoordinate: any;
	/**
	 * Output only the fractional part of the pan calculation for greater precision.
	 * Output is greater than or equal to 0 and less than 1.
	*/
	bFractionalPart: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPanner;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPanner;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPanner;
	static C(Other: UObject): MaterialExpressionPanner;
}

declare class MaterialExpressionParameter extends MaterialExpression { 
	/**
	 * The name of the parameter
	*/
	ParameterName: string;
	/**
	 * GUID that should be unique within the material, this is used for parameter renaming.
	*/
	ExpressionGUID: Guid;
	/**
	 * The name of the parameter Group to display in MaterialInstance Editor. Default is None group
	*/
	Group: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParameter;
	static C(Other: UObject): MaterialExpressionParameter;
}

declare class MaterialExpressionScalarParameter extends MaterialExpressionParameter { 
	/**
	 * Default Value
	*/
	DefaultValue: number;
	/**
	 * Sets the lower bound for the slider on this parameter in the material instance editor.
	*/
	SliderMin: number;
	/**
	 * Sets the upper bound for the slider on this parameter in the material instance editor.
	 * The slider will be disabled if SliderMax <= SliderMin.
	*/
	SliderMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionScalarParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionScalarParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionScalarParameter;
	static C(Other: UObject): MaterialExpressionScalarParameter;
}

declare class MaterialExpressionStaticBoolParameter extends MaterialExpressionParameter { 
	/**
	 * Default Value
	*/
	DefaultValue: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticBoolParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticBoolParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticBoolParameter;
	static C(Other: UObject): MaterialExpressionStaticBoolParameter;
}

declare class MaterialExpressionStaticSwitchParameter extends MaterialExpressionStaticBoolParameter { 
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticSwitchParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticSwitchParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticSwitchParameter;
	static C(Other: UObject): MaterialExpressionStaticSwitchParameter;
}

declare class MaterialExpressionStaticComponentMaskParameter extends MaterialExpressionParameter { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	/**
	 * Default R
	*/
	DefaultR: boolean;
	/**
	 * Default G
	*/
	DefaultG: boolean;
	/**
	 * Default B
	*/
	DefaultB: boolean;
	/**
	 * Default A
	*/
	DefaultA: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticComponentMaskParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticComponentMaskParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticComponentMaskParameter;
	static C(Other: UObject): MaterialExpressionStaticComponentMaskParameter;
}

declare class MaterialExpressionVectorParameter extends MaterialExpressionParameter { 
	/**
	 * Default Value
	*/
	DefaultValue: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionVectorParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionVectorParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVectorParameter;
	static C(Other: UObject): MaterialExpressionVectorParameter;
}

declare class MaterialExpressionParticleColor extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleColor;
	static C(Other: UObject): MaterialExpressionParticleColor;
}

declare class MaterialExpressionParticleDirection extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleDirection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleDirection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleDirection;
	static C(Other: UObject): MaterialExpressionParticleDirection;
}

declare class MaterialExpressionParticleMacroUV extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleMacroUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleMacroUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleMacroUV;
	static C(Other: UObject): MaterialExpressionParticleMacroUV;
}

declare class MaterialExpressionParticleMotionBlurFade extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleMotionBlurFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleMotionBlurFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleMotionBlurFade;
	static C(Other: UObject): MaterialExpressionParticleMotionBlurFade;
}

declare class MaterialExpressionParticlePositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticlePositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticlePositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticlePositionWS;
	static C(Other: UObject): MaterialExpressionParticlePositionWS;
}

declare class MaterialExpressionParticleRadius extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleRadius;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleRadius;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleRadius;
	static C(Other: UObject): MaterialExpressionParticleRadius;
}

declare class MaterialExpressionParticleRelativeTime extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleRelativeTime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleRelativeTime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleRelativeTime;
	static C(Other: UObject): MaterialExpressionParticleRelativeTime;
}

declare class MaterialExpressionParticleSize extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleSize;
	static C(Other: UObject): MaterialExpressionParticleSize;
}

declare class MaterialExpressionParticleSpeed extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleSpeed;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleSpeed;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleSpeed;
	static C(Other: UObject): MaterialExpressionParticleSpeed;
}

declare class MaterialExpressionPerInstanceFadeAmount extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPerInstanceFadeAmount;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPerInstanceFadeAmount;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPerInstanceFadeAmount;
	static C(Other: UObject): MaterialExpressionPerInstanceFadeAmount;
}

declare class MaterialExpressionPerInstanceRandom extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPerInstanceRandom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPerInstanceRandom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPerInstanceRandom;
	static C(Other: UObject): MaterialExpressionPerInstanceRandom;
}

declare class MaterialExpressionPixelDepth extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPixelDepth;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPixelDepth;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPixelDepth;
	static C(Other: UObject): MaterialExpressionPixelDepth;
}

declare class MaterialExpressionPixelNormalWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPixelNormalWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPixelNormalWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPixelNormalWS;
	static C(Other: UObject): MaterialExpressionPixelNormalWS;
}

declare class MaterialExpressionPower extends MaterialExpression { 
	/**
	 * Base
	*/
	Base: ExpressionInput;
	/**
	 * Defaults to 'ConstExponent' if not specified
	*/
	Exponent: ExpressionInput;
	/**
	 * only used if Exponent is not hooked up
	*/
	ConstExponent: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPower;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPower;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPower;
	static C(Other: UObject): MaterialExpressionPower;
}

declare class MaterialExpressionPrecomputedAOMask extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPrecomputedAOMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPrecomputedAOMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPrecomputedAOMask;
	static C(Other: UObject): MaterialExpressionPrecomputedAOMask;
}

declare class MaterialExpressionQualitySwitch extends MaterialExpression { 
	/**
	 * Default connection, used when a specific quality level input is missing.
	*/
	Default: ExpressionInput;
	/**
	 * Inputs
	*/
	Inputs: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionQualitySwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionQualitySwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionQualitySwitch;
	static C(Other: UObject): MaterialExpressionQualitySwitch;
}

declare class MaterialExpressionReflectionVectorWS extends MaterialExpression { 
	/**
	 * Defaults to Reflection Vector if not specified
	*/
	CustomWorldNormal: ExpressionInput;
	/**
	 * Normalize Custom World Normal - (true): 지정된 월드 노멀이 정규화됩니다. (false): WorldNormal 이 그대로 사용되며, 더 빠르지만 노멀 길이가 1 이 아닌 경우 부작용이 있을 수 있습니다.
	*/
	bNormalizeCustomWorldNormal: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionReflectionVectorWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionReflectionVectorWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionReflectionVectorWS;
	static C(Other: UObject): MaterialExpressionReflectionVectorWS;
}

declare class MaterialExpressionRotateAboutAxis extends MaterialExpression { 
	/**
	 * Normalized Rotation Axis
	*/
	NormalizedRotationAxis: ExpressionInput;
	/**
	 * Rotation Angle
	*/
	RotationAngle: ExpressionInput;
	/**
	 * Pivot Point
	*/
	PivotPoint: ExpressionInput;
	/**
	 * Position
	*/
	Position: ExpressionInput;
	/**
	 * Period
	*/
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionRotateAboutAxis;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionRotateAboutAxis;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionRotateAboutAxis;
	static C(Other: UObject): MaterialExpressionRotateAboutAxis;
}

declare class MaterialExpressionRotator extends MaterialExpression { 
	/**
	 * Defaults to 'ConstCoordinate' if not specified
	*/
	Coordinate: ExpressionInput;
	/**
	 * Defaults to Game Time if not specified
	*/
	Time: ExpressionInput;
	/**
	 * Center X
	*/
	CenterX: number;
	/**
	 * Center Y
	*/
	CenterY: number;
	/**
	 * Speed
	*/
	Speed: number;
	/**
	 * only used if Coordinate is not hooked up
	*/
	ConstCoordinate: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionRotator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionRotator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionRotator;
	static C(Other: UObject): MaterialExpressionRotator;
}

declare type EMaterialSceneAttributeInputMode = string;
declare class MaterialExpressionSceneColor extends MaterialExpression { 
	/**
	 * Coordinates - UV coordinates to apply to the scene color lookup.
	 * OffsetFraction -      An offset to apply to the scene color lookup in a 2d fraction of the screen.
	*/
	InputMode: EMaterialSceneAttributeInputMode;
	/**
	 * Defaults to 'ConstInput' if not specified
	*/
	Input: ExpressionInput;
	/**
	 * Offset Fraction
	*/
	OffsetFraction: ExpressionInput;
	/**
	 * only used if Input is not hooked up
	*/
	ConstInput: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneColor;
	static C(Other: UObject): MaterialExpressionSceneColor;
}

declare class MaterialExpressionSceneDepth extends MaterialExpression { 
	/**
	 * Coordinates - UV coordinates to apply to the scene depth lookup.
	 * OffsetFraction - An offset to apply to the scene depth lookup in a 2d fraction of the screen.
	*/
	InputMode: EMaterialSceneAttributeInputMode;
	/**
	 * Defaults to 'ConstInput' if not specified
	*/
	Input: ExpressionInput;
	/**
	 * Coordinates
	*/
	Coordinates: ExpressionInput;
	/**
	 * only used if Input is not hooked up
	*/
	ConstInput: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneDepth;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneDepth;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneDepth;
	static C(Other: UObject): MaterialExpressionSceneDepth;
}

declare class MaterialExpressionSceneTexelSize extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneTexelSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneTexelSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneTexelSize;
	static C(Other: UObject): MaterialExpressionSceneTexelSize;
}

declare type ESceneTextureId = string;
declare class MaterialExpressionSceneTexture extends MaterialExpression { 
	/**
	 * Ignored if not specified
	*/
	Coordinates: ExpressionInput;
	/**
	 * Which scene texture (screen aligned texture) we want to make a lookup into
	*/
	SceneTextureId: ESceneTextureId;
	/**
	 * Clamps texture coordinates to the range 0 to 1. Incurs a performance cost.
	*/
	bClampUVs: boolean;
	/**
	 * Whether to use point sampled texture lookup (default) or using [bi-linear] filtered (can be slower, avoid faceted lock with distortions), some SceneTextures cannot be filtered
	*/
	bFiltered: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneTexture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneTexture;
	static C(Other: UObject): MaterialExpressionSceneTexture;
}

declare class MaterialExpressionScreenPosition extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionScreenPosition;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionScreenPosition;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionScreenPosition;
	static C(Other: UObject): MaterialExpressionScreenPosition;
}

declare class MaterialExpressionSine extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	/**
	 * Period
	*/
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSine;
	static C(Other: UObject): MaterialExpressionSine;
}

declare type ESpeedTreeGeometryType = string;
declare type ESpeedTreeWindType = string;
declare type ESpeedTreeLODType = string;
declare class MaterialExpressionSpeedTree extends MaterialExpression { 
	/**
	 * The type of SpeedTree geometry on which this material will be used
	*/
	GeometryType: ESpeedTreeGeometryType;
	/**
	 * The type of wind effect used on this tree. This can only go as high as it was in the SpeedTree Modeler, but you can set it to a lower option for lower quality wind and faster rendering.
	*/
	WindType: ESpeedTreeWindType;
	/**
	 * The type of LOD to use
	*/
	LODType: ESpeedTreeLODType;
	/**
	 * The threshold for triangles to be removed from the bilboard mesh when not facing the camera (0 = none pass, 1 = all pass).
	*/
	BillboardThreshold: number;
	/**
	 * Support accurate velocities from wind. This will incur extra cost per vertex.
	*/
	bAccurateWindVelocities: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpeedTree;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSpeedTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpeedTree;
	static C(Other: UObject): MaterialExpressionSpeedTree;
}

declare class MaterialExpressionSphereMask extends MaterialExpression { 
	/**
	 * 1 to 4 dimensional vector, should be the same type as B
	*/
	A: ExpressionInput;
	/**
	 * 1 to 4 dimensional vector, should be the same type as A
	*/
	B: ExpressionInput;
	/**
	 * Defaults to 'AttenuationRadius' if not specified
	*/
	Radius: ExpressionInput;
	/**
	 * Defaults to 'HardnessPercent' if not specified
	*/
	Hardness: ExpressionInput;
	/**
	 * in the unit that A and B are measured
	*/
	AttenuationRadius: number;
	/**
	 * in percent 0%=soft .. 100%=hard
	*/
	HardnessPercent: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSphereMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSphereMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSphereMask;
	static C(Other: UObject): MaterialExpressionSphereMask;
}

declare class MaterialExpressionSphericalParticleOpacity extends MaterialExpression { 
	/**
	 * Defaults to 'ConstantDensity' if not specified
	*/
	Density: ExpressionInput;
	/**
	 * Constant density of the particle sphere.  Will be overridden if Density is connected.
	*/
	ConstantDensity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSphericalParticleOpacity;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSphericalParticleOpacity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSphericalParticleOpacity;
	static C(Other: UObject): MaterialExpressionSphericalParticleOpacity;
}

declare class MaterialExpressionSquareRoot extends MaterialExpression { 
	/**
	 * Input
	*/
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSquareRoot;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSquareRoot;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSquareRoot;
	static C(Other: UObject): MaterialExpressionSquareRoot;
}

declare class MaterialExpressionStaticBool extends MaterialExpression { 
	/**
	 * Value
	*/
	Value: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticBool;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticBool;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticBool;
	static C(Other: UObject): MaterialExpressionStaticBool;
}

declare class MaterialExpressionStaticSwitch extends MaterialExpression { 
	/**
	 * Default Value
	*/
	DefaultValue: boolean;
	/**
	 * A
	*/
	A: ExpressionInput;
	/**
	 * B
	*/
	B: ExpressionInput;
	/**
	 * Ignored if not specified
	*/
	Value: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticSwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticSwitch;
	static C(Other: UObject): MaterialExpressionStaticSwitch;
}

declare class MaterialExpressionSubtract extends MaterialExpression { 
	/**
	 * Defaults to 'ConstA' if not specified
	*/
	A: ExpressionInput;
	/**
	 * Defaults to 'ConstB' if not specified
	*/
	B: ExpressionInput;
	/**
	 * only used if A is not hooked up
	*/
	ConstA: number;
	/**
	 * only used if B is not hooked up
	*/
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSubtract;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSubtract;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSubtract;
	static C(Other: UObject): MaterialExpressionSubtract;
}

declare type EMaterialSamplerType = string;
declare class MaterialExpressionTextureBase extends MaterialExpression { 
	/**
	 * Texture
	*/
	Texture: Texture;
	/**
	 * Sampler Type
	*/
	SamplerType: EMaterialSamplerType;
	/**
	 * Is default selected texture when using mesh paint mode texture painting
	*/
	IsDefaultMeshpaintTexture: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureBase;
	static C(Other: UObject): MaterialExpressionTextureBase;
}

declare class MaterialExpressionTextureObject extends MaterialExpressionTextureBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureObject;
	static C(Other: UObject): MaterialExpressionTextureObject;
}

declare type ETextureMipValueMode = string;
declare type ESamplerSourceMode = string;
declare class MaterialExpressionTextureSample extends MaterialExpressionTextureBase { 
	/**
	 * Defaults to 'ConstCoordinate' if not specified
	*/
	Coordinates: ExpressionInput;
	/**
	 * Defaults to 'Texture' if not specified
	*/
	TextureObject: ExpressionInput;
	/**
	 * Defaults to 'ConstMipValue' if not specified
	*/
	MipValue: ExpressionInput;
	/**
	 * Coordinates derivative over the X axis
	*/
	CoordinatesDX: ExpressionInput;
	/**
	 * Coordinates derivative over the Y axis
	*/
	CoordinatesDY: ExpressionInput;
	/**
	 * Defines how the MipValue property is applied to the texture lookup
	*/
	MipValueMode: ETextureMipValueMode;
	/**
	 * Controls where the sampler for this texture lookup will come from.
	 * Choose 'from texture asset' to make use of the UTexture addressing settings,
	 * Otherwise use one of the global samplers, which will not consume a sampler slot.
	 * This allows materials to use more than 16 unique textures on SM5 platforms.
	*/
	SamplerSource: ESamplerSourceMode;
	/**
	 * only used if Coordinates is not hooked up
	*/
	ConstCoordinate: any;
	/**
	 * only used if MipValue is not hooked up
	*/
	ConstMipValue: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSample;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSample;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSample;
	static C(Other: UObject): MaterialExpressionTextureSample;
}

declare class MaterialExpressionParticleSubUV extends MaterialExpressionTextureSample { 
	/**
	 * Blend
	*/
	bBlend: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleSubUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleSubUV;
	static C(Other: UObject): MaterialExpressionParticleSubUV;
}

declare class MaterialExpressionTextureSampleParameter extends MaterialExpressionTextureSample { 
	/**
	 * Parameter Name
	*/
	ParameterName: string;
	/**
	 * GUID that should be unique within the material, this is used for parameter renaming.
	*/
	ExpressionGUID: Guid;
	/**
	 * The name of the parameter Group to display in MaterialInstance Editor. Default is None group
	*/
	Group: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameter;
	static C(Other: UObject): MaterialExpressionTextureSampleParameter;
}

declare class MaterialExpressionTextureObjectParameter extends MaterialExpressionTextureSampleParameter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureObjectParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureObjectParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureObjectParameter;
	static C(Other: UObject): MaterialExpressionTextureObjectParameter;
}

declare class MaterialExpressionTextureSampleParameter2D extends MaterialExpressionTextureSampleParameter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameter2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameter2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameter2D;
	static C(Other: UObject): MaterialExpressionTextureSampleParameter2D;
}

declare type ETextureColorChannel = string;
declare class MaterialExpressionAntialiasedTextureMask extends MaterialExpressionTextureSampleParameter2D { 
	/**
	 * Threshold
	*/
	Threshold: number;
	/**
	 * Channel
	*/
	Channel: ETextureColorChannel;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAntialiasedTextureMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAntialiasedTextureMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAntialiasedTextureMask;
	static C(Other: UObject): MaterialExpressionAntialiasedTextureMask;
}

declare class MaterialExpressionTextureSampleParameterSubUV extends MaterialExpressionTextureSampleParameter2D { 
	/**
	 * Blend
	*/
	bBlend: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameterSubUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameterSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameterSubUV;
	static C(Other: UObject): MaterialExpressionTextureSampleParameterSubUV;
}

declare class MaterialExpressionTextureSampleParameterCube extends MaterialExpressionTextureSampleParameter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameterCube;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameterCube;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameterCube;
	static C(Other: UObject): MaterialExpressionTextureSampleParameterCube;
}

declare class MaterialExpressionTextureCoordinate extends MaterialExpression { 
	/**
	 * Texture coordinate index
	*/
	CoordinateIndex: number;
	/**
	 * Controls how much the texture tiles horizontally, by scaling the U component of the vertex UVs by the specified amount.
	*/
	UTiling: number;
	/**
	 * Controls how much the texture tiles vertically, by scaling the V component of the vertex UVs by the specified amount.
	*/
	VTiling: number;
	/**
	 * Would like to unmirror U or V
	 * - if the texture is mirrored and if you would like to undo mirroring for this texture sample, use this to unmirror
	*/
	UnMirrorU: boolean;
	/**
	 * Un Mirror V
	*/
	UnMirrorV: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureCoordinate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureCoordinate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureCoordinate;
	static C(Other: UObject): MaterialExpressionTextureCoordinate;
}

declare class MaterialExpressionTime extends MaterialExpression { 
	/**
	 * This time continues advancing regardless of whether the game is paused.
	*/
	bIgnorePause: boolean;
	/**
	 * Enables or disables the Period value.
	*/
	bOverride_Period: boolean;
	/**
	 * Period at which to wrap around time
	*/
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTime;
	static C(Other: UObject): MaterialExpressionTime;
}

declare type EMaterialVectorCoordTransformSource = string;
declare type EMaterialVectorCoordTransform = string;
declare class MaterialExpressionTransform extends MaterialExpression { 
	/**
	 * input expression for this transform
	*/
	Input: ExpressionInput;
	/**
	 * Source coordinate space of the FVector
	*/
	TransformSourceType: EMaterialVectorCoordTransformSource;
	/**
	 * Destination coordinate space of the FVector
	*/
	TransformType: EMaterialVectorCoordTransform;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTransform;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTransform;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTransform;
	static C(Other: UObject): MaterialExpressionTransform;
}

declare type EMaterialPositionTransformSource = string;
declare class MaterialExpressionTransformPosition extends MaterialExpression { 
	/**
	 * input expression for this transform
	*/
	Input: ExpressionInput;
	/**
	 * source format of the position that will be transformed
	*/
	TransformSourceType: EMaterialPositionTransformSource;
	/**
	 * type of transform to apply to the input expression
	*/
	TransformType: EMaterialPositionTransformSource;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTransformPosition;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTransformPosition;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTransformPosition;
	static C(Other: UObject): MaterialExpressionTransformPosition;
}

declare class MaterialExpressionTwoSidedSign extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTwoSidedSign;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTwoSidedSign;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTwoSidedSign;
	static C(Other: UObject): MaterialExpressionTwoSidedSign;
}

declare class MaterialExpressionVertexColor extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionVertexColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionVertexColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVertexColor;
	static C(Other: UObject): MaterialExpressionVertexColor;
}

declare class MaterialExpressionVertexNormalWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionVertexNormalWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionVertexNormalWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVertexNormalWS;
	static C(Other: UObject): MaterialExpressionVertexNormalWS;
}

declare type EMaterialExposedViewProperty = string;
declare class MaterialExpressionViewProperty extends MaterialExpression { 
	/**
	 * View input property to be accessed
	*/
	Property: EMaterialExposedViewProperty;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionViewProperty;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionViewProperty;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionViewProperty;
	static C(Other: UObject): MaterialExpressionViewProperty;
}

declare class MaterialExpressionViewSize extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionViewSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionViewSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionViewSize;
	static C(Other: UObject): MaterialExpressionViewSize;
}

declare type EWorldPositionIncludedOffsets = string;
declare class MaterialExpressionWorldPosition extends MaterialExpression { 
	/**
	 * World Position Shader Offset
	*/
	WorldPositionShaderOffset: EWorldPositionIncludedOffsets;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionWorldPosition;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionWorldPosition;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionWorldPosition;
	static C(Other: UObject): MaterialExpressionWorldPosition;
}

declare class MatineeInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MatineeInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MatineeInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MatineeInterface;
	static C(Other: UObject): MatineeInterface;
}

declare class NavArea_Default extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_Default;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_Default;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_Default;
	static C(Other: UObject): NavArea_Default;
}

declare class NavArea_LowHeight extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_LowHeight;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_LowHeight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_LowHeight;
	static C(Other: UObject): NavArea_LowHeight;
}

declare class NavArea_Null extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_Null;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_Null;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_Null;
	static C(Other: UObject): NavArea_Null;
}

declare class NavArea_Obstacle extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_Obstacle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_Obstacle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_Obstacle;
	static C(Other: UObject): NavArea_Obstacle;
}

declare class NavAreaMeta extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavAreaMeta;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavAreaMeta;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavAreaMeta;
	static C(Other: UObject): NavAreaMeta;
}

declare class NavAreaMeta_SwitchByAgent extends NavAreaMeta { 
	/**
	 * Agent 0Area
	*/
	Agent0Area: UnrealEngineClass;
	/**
	 * Agent 1Area
	*/
	Agent1Area: UnrealEngineClass;
	/**
	 * Agent 2Area
	*/
	Agent2Area: UnrealEngineClass;
	/**
	 * Agent 3Area
	*/
	Agent3Area: UnrealEngineClass;
	/**
	 * Agent 4Area
	*/
	Agent4Area: UnrealEngineClass;
	/**
	 * Agent 5Area
	*/
	Agent5Area: UnrealEngineClass;
	/**
	 * Agent 6Area
	*/
	Agent6Area: UnrealEngineClass;
	/**
	 * Agent 7Area
	*/
	Agent7Area: UnrealEngineClass;
	/**
	 * Agent 8Area
	*/
	Agent8Area: UnrealEngineClass;
	/**
	 * Agent 9Area
	*/
	Agent9Area: UnrealEngineClass;
	/**
	 * Agent 10Area
	*/
	Agent10Area: UnrealEngineClass;
	/**
	 * Agent 11Area
	*/
	Agent11Area: UnrealEngineClass;
	/**
	 * Agent 12Area
	*/
	Agent12Area: UnrealEngineClass;
	/**
	 * Agent 13Area
	*/
	Agent13Area: UnrealEngineClass;
	/**
	 * Agent 14Area
	*/
	Agent14Area: UnrealEngineClass;
	/**
	 * Agent 15Area
	*/
	Agent15Area: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavAreaMeta_SwitchByAgent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavAreaMeta_SwitchByAgent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavAreaMeta_SwitchByAgent;
	static C(Other: UObject): NavAreaMeta_SwitchByAgent;
}

declare class RecastNavMeshDataChunk extends NavigationDataChunk { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RecastNavMeshDataChunk;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RecastNavMeshDataChunk;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecastNavMeshDataChunk;
	static C(Other: UObject): RecastNavMeshDataChunk;
}

declare class NavigationPathGenerator extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavigationPathGenerator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavigationPathGenerator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavigationPathGenerator;
	static C(Other: UObject): NavigationPathGenerator;
}

declare class RecastFilter_UseDefaultArea extends NavigationQueryFilter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RecastFilter_UseDefaultArea;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RecastFilter_UseDefaultArea;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecastFilter_UseDefaultArea;
	static C(Other: UObject): RecastFilter_UseDefaultArea;
}

declare class NavLinkTrivial extends NavLinkDefinition { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavLinkTrivial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavLinkTrivial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavLinkTrivial;
	static C(Other: UObject): NavLinkTrivial;
}

declare class NavNodeInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavNodeInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavNodeInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavNodeInterface;
	static C(Other: UObject): NavNodeInterface;
}

declare class NiagaraRibbonRendererProperties extends NiagaraEffectRendererProperties { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraRibbonRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraRibbonRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraRibbonRendererProperties;
	static C(Other: UObject): NiagaraRibbonRendererProperties;
}

declare class NiagaraSpriteRendererProperties extends NiagaraEffectRendererProperties { 
	/**
	 * Sub Image Info
	*/
	SubImageInfo: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraSpriteRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraSpriteRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSpriteRendererProperties;
	static C(Other: UObject): NiagaraSpriteRendererProperties;
}

declare class ObjectLibrary extends UObject { 
	/**
	 * Class that Objects must be of. If ContainsBlueprints is true, this is the native class that the blueprints are instances of and not UClass
	*/
	ObjectBaseClass: UnrealEngineClass;
	/**
	 * True if this library holds blueprint classes, false if it holds other objects
	*/
	bHasBlueprintClasses: boolean;
	/**
	 * List of Objects in library
	*/
	Objects: UObject[];
	/**
	 * Weak pointers to objects
	*/
	WeakObjects: any[];
	/**
	 * If this library should use weak pointers
	*/
	bUseWeakReferences: boolean;
	/**
	 * True if we've already fully loaded this library, can't do it twice
	*/
	bIsFullyLoaded: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ObjectLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ObjectLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectLibrary;
	static C(Other: UObject): ObjectLibrary;
}

declare class ObjectReferencer extends UObject { 
	/**
	 * Array of objects being referenced.
	*/
	ReferencedObjects: UObject[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ObjectReferencer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ObjectReferencer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectReferencer;
	static C(Other: UObject): ObjectReferencer;
}

declare class PackageMapClient extends PackageMap { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PackageMapClient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PackageMapClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PackageMapClient;
	static C(Other: UObject): PackageMapClient;
}

declare class ParticleSpriteEmitter extends ParticleEmitter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleSpriteEmitter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleSpriteEmitter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleSpriteEmitter;
	static C(Other: UObject): ParticleSpriteEmitter;
}

declare class ParticleModuleAccelerationBase extends ParticleModule { 
	/**
	 * If true, then treat the acceleration as world-space
	*/
	bAlwaysInWorldSpace: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationBase;
	static C(Other: UObject): ParticleModuleAccelerationBase;
}

declare class ParticleModuleAcceleration extends ParticleModuleAccelerationBase { 
	/**
	 * The initial acceleration of the particle.
	 * Value is obtained using the EmitterTime at particle spawn.
	 * Each frame, the current and base velocity of the particle
	 * is then updated using the formula
	 *         velocity += acceleration * DeltaTime
	 * where DeltaTime is the time passed since the last frame.
	*/
	Acceleration: RawDistributionVector;
	/**
	 * If true, then apply the particle system components scale
	 * to the acceleration value.
	*/
	bApplyOwnerScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAcceleration;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAcceleration;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAcceleration;
	static C(Other: UObject): ParticleModuleAcceleration;
}

declare class ParticleModuleAccelerationConstant extends ParticleModuleAccelerationBase { 
	/**
	 * Constant acceleration for particles in this system.
	*/
	Acceleration: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationConstant;
	static C(Other: UObject): ParticleModuleAccelerationConstant;
}

declare class ParticleModuleAccelerationDrag extends ParticleModuleAccelerationBase { 
	/**
	 * Per-particle drag coefficient. Evaluted using emitter time.
	*/
	DragCoefficient: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationDrag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationDrag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationDrag;
	static C(Other: UObject): ParticleModuleAccelerationDrag;
}

declare class ParticleModuleAccelerationDragScaleOverLife extends ParticleModuleAccelerationBase { 
	/**
	 * Per-particle drag scale. Evaluted using particle relative time.
	*/
	DragScale: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationDragScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationDragScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationDragScaleOverLife;
	static C(Other: UObject): ParticleModuleAccelerationDragScaleOverLife;
}

declare class ParticleModuleAccelerationOverLifetime extends ParticleModuleAccelerationBase { 
	/**
	 * The acceleration of the particle over its lifetime.
	 * Value is obtained using the RelativeTime of the partice.
	 * The current and base velocity values of the particle
	 * are then updated using the formula
	 *         velocity += acceleration* DeltaTime
	 * where DeltaTime is the time passed since the last frame.
	*/
	AccelOverLife: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationOverLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationOverLifetime;
	static C(Other: UObject): ParticleModuleAccelerationOverLifetime;
}

declare class ParticleModuleAttractorBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorBase;
	static C(Other: UObject): ParticleModuleAttractorBase;
}

declare class ParticleModuleAttractorLine extends ParticleModuleAttractorBase { 
	/**
	 * The first endpoint of the line.
	*/
	EndPoint0: Vector;
	/**
	 * The second endpoint of the line.
	*/
	EndPoint1: Vector;
	/**
	 * The range of the line attractor.
	*/
	Range: RawDistributionFloat;
	/**
	 * The strength of the line attractor.
	*/
	Strength: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorLine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorLine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorLine;
	static C(Other: UObject): ParticleModuleAttractorLine;
}

declare type EAttractorParticleSelectionMethod = string;
declare class ParticleModuleAttractorParticle extends ParticleModuleAttractorBase { 
	/**
	 * The source emitter for attractors
	*/
	EmitterName: string;
	/**
	 * The radial range of the attraction around the source particle.
	 * Particle-life relative.
	*/
	Range: RawDistributionFloat;
	/**
	 * The strength curve is a function of distance or of time.
	*/
	bStrengthByDistance: boolean;
	/**
	 * The strength of the attraction (negative values repel).
	 * Particle-life relative if StrengthByDistance is false.
	*/
	Strength: RawDistributionFloat;
	/**
	 * If true, the velocity adjustment will be applied to the base velocity.
	*/
	bAffectBaseVelocity: boolean;
	/**
	 * The method to use when selecting an attractor target particle from the emitter.
	 * One of the following:
	 * Random          - Randomly select a particle from the source emitter.
	 * Sequential  - Select a particle using a sequential order.
	*/
	SelectionMethod: EAttractorParticleSelectionMethod;
	/**
	 * Whether the particle should grab a new particle if it's source expires.
	*/
	bRenewSource: boolean;
	/**
	 * Whether the particle should inherit the source veloctiy if it expires.
	*/
	bInheritSourceVel: boolean;
	/**
	 * Last Sel Index
	*/
	LastSelIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorParticle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorParticle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorParticle;
	static C(Other: UObject): ParticleModuleAttractorParticle;
}

declare class ParticleModuleAttractorPoint extends ParticleModuleAttractorBase { 
	/**
	 * The position of the point attractor from the source of the emitter.
	*/
	Position: RawDistributionVector;
	/**
	 * The radial range of the attractor.
	*/
	Range: RawDistributionFloat;
	/**
	 * The strength of the point attractor.
	*/
	Strength: RawDistributionFloat;
	/**
	 * The strength curve is a function of distance or of time.
	*/
	StrengthByDistance: boolean;
	/**
	 * If true, the velocity adjustment will be applied to the base velocity.
	*/
	bAffectBaseVelocity: boolean;
	/**
	 * If true, set the velocity.
	*/
	bOverrideVelocity: boolean;
	/**
	 * If true, treat the position as world space.  So don't transform the the point to localspace.
	*/
	bUseWorldSpacePosition: boolean;
	/**
	 * Whether particles can move along the positive X axis.
	*/
	Positive_X: boolean;
	/**
	 * Whether particles can move along the positive Y axis.
	*/
	Positive_Y: boolean;
	/**
	 * Whether particles can move along the positive Z axis.
	*/
	Positive_Z: boolean;
	/**
	 * Whether particles can move along the negative X axis.
	*/
	Negative_X: boolean;
	/**
	 * Whether particles can move along the negative Y axis.
	*/
	Negative_Y: boolean;
	/**
	 * Whether particles can move along the negative Z axis.
	*/
	Negative_Z: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorPoint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorPoint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorPoint;
	static C(Other: UObject): ParticleModuleAttractorPoint;
}

declare class ParticleModuleAttractorPointGravity extends ParticleModuleAttractorBase { 
	/**
	 * The position of the point gravity source.
	*/
	Position: Vector;
	/**
	 * The distance at which the influence of the point begins to falloff.
	*/
	Radius: number;
	/**
	 * The strength of the point source.
	*/
	Strength: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorPointGravity;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorPointGravity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorPointGravity;
	static C(Other: UObject): ParticleModuleAttractorPointGravity;
}

declare class ParticleModuleBeamBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamBase;
	static C(Other: UObject): ParticleModuleBeamBase;
}

declare type BeamModifierType = string;
declare class BeamModifierOptions { 
	/**
	 * If true, modify the value associated with this grouping.
	*/
	bModify: boolean;
	/**
	 * If true, scale the associated value by the given value.
	*/
	bScale: boolean;
	/**
	 * If true, lock the modifier to the life of the particle.
	*/
	bLock: boolean;
}

declare class ParticleModuleBeamModifier extends ParticleModuleBeamBase { 
	/**
	 * Whether this module modifies the Source or the Target.
	*/
	ModifierType: BeamModifierType;
	/**
	 * The options associated with the position.
	*/
	PositionOptions: BeamModifierOptions;
	/**
	 * The value to use when modifying the position.
	*/
	Position: RawDistributionVector;
	/**
	 * The options associated with the Tangent.
	*/
	TangentOptions: BeamModifierOptions;
	/**
	 * The value to use when modifying the Tangent.
	*/
	Tangent: RawDistributionVector;
	/**
	 * If true, don't transform the tangent modifier into the tangent basis.
	*/
	bAbsoluteTangent: boolean;
	/**
	 * The options associated with the Strength.
	*/
	StrengthOptions: BeamModifierOptions;
	/**
	 * The value to use when modifying the Strength.
	*/
	Strength: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamModifier;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamModifier;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamModifier;
	static C(Other: UObject): ParticleModuleBeamModifier;
}

declare class ParticleModuleBeamNoise extends ParticleModuleBeamBase { 
	/**
	 * Is low frequency noise enabled.
	*/
	bLowFreq_Enabled: boolean;
	/**
	 * The frequency of noise points.
	*/
	Frequency: number;
	/**
	 * If not 0, then the frequency will select a random value in the range
	 *         [Frequency_LowRange..Frequency]
	*/
	Frequency_LowRange: number;
	/**
	 * The noise point ranges.
	*/
	NoiseRange: RawDistributionVector;
	/**
	 * A scale factor that will be applied to the noise range.
	*/
	NoiseRangeScale: RawDistributionFloat;
	/**
	 * If true,  the NoiseRangeScale will be grabbed based on the emitter time.
	 * If false, the NoiseRangeScale will be grabbed based on the particle time.
	*/
	bNRScaleEmitterTime: boolean;
	/**
	 * The speed with which to move each noise point.
	*/
	NoiseSpeed: RawDistributionVector;
	/**
	 * Whether the noise movement should be smooth or 'jerky'.
	*/
	bSmooth: boolean;
	/**
	 * Default target-point information to use if the beam method is endpoint.
	*/
	NoiseLockRadius: number;
	/**
	 * INTERNAL - Whether the noise points should be locked.
	*/
	bNoiseLock: boolean;
	/**
	 * Whether the noise points should be oscillate.
	*/
	bOscillate: boolean;
	/**
	 * How long the  noise points should be locked - 0.0 indicates forever.
	*/
	NoiseLockTime: number;
	/**
	 * The tension to apply to the tessellated noise line.
	*/
	NoiseTension: number;
	/**
	 * If true, calculate tangents at each noise point.
	*/
	bUseNoiseTangents: boolean;
	/**
	 * The strength of noise tangents, if enabled.
	*/
	NoiseTangentStrength: RawDistributionFloat;
	/**
	 * The amount of tessellation between noise points.
	*/
	NoiseTessellation: number;
	/**
	 * Whether to apply noise to the target point (or end of line in distance mode...)
	 * If true, the beam could potentially 'leave' the target...
	*/
	bTargetNoise: boolean;
	/**
	 * The distance at which to deposit noise points.
	 * If 0.0, then use the static frequency value.
	 * If not, distribute noise points at the given distance, up to the static Frequency value.
	 * At that point, evenly distribute them along the beam.
	*/
	FrequencyDistance: number;
	/**
	 * If true, apply the noise scale to the beam.
	*/
	bApplyNoiseScale: boolean;
	/**
	 * The scale factor to apply to noise range.
	 * The lookup value is determined by dividing the number of noise points present by the
	 * maximum number of noise points (Frequency).
	*/
	NoiseScale: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamNoise;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamNoise;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamNoise;
	static C(Other: UObject): ParticleModuleBeamNoise;
}

declare type Beam2SourceTargetMethod = string;
declare type Beam2SourceTargetTangentMethod = string;
declare class ParticleModuleBeamSource extends ParticleModuleBeamBase { 
	/**
	 * The method flag.
	*/
	SourceMethod: Beam2SourceTargetMethod;
	/**
	 * The strength of the tangent from the source point for each beam.
	*/
	SourceName: string;
	/**
	 * Whether to treat the as an absolute position in world space.
	*/
	bSourceAbsolute: boolean;
	/**
	 * Default source-point to use.
	*/
	Source: RawDistributionVector;
	/**
	 * Whether to lock the source to the life of the particle.
	*/
	bLockSource: boolean;
	/**
	 * The method to use for the source tangent.
	*/
	SourceTangentMethod: Beam2SourceTargetTangentMethod;
	/**
	 * The tangent for the source point for each beam.
	*/
	SourceTangent: RawDistributionVector;
	/**
	 * Whether to lock the source to the life of the particle.
	*/
	bLockSourceTangent: boolean;
	/**
	 * The strength of the tangent from the source point for each beam.
	*/
	SourceStrength: RawDistributionFloat;
	/**
	 * Whether to lock the source to the life of the particle.
	*/
	bLockSourceStength: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamSource;
	static C(Other: UObject): ParticleModuleBeamSource;
}

declare class ParticleModuleBeamTarget extends ParticleModuleBeamBase { 
	/**
	 * The method flag.
	*/
	TargetMethod: Beam2SourceTargetMethod;
	/**
	 * The target point sources of each beam, when using the end point method.
	*/
	TargetName: string;
	/**
	 * Default target-point information to use if the beam method is endpoint.
	*/
	Target: RawDistributionVector;
	/**
	 * Whether to treat the as an absolute position in world space.
	*/
	bTargetAbsolute: boolean;
	/**
	 * Whether to lock the Target to the life of the particle.
	*/
	bLockTarget: boolean;
	/**
	 * The method to use for the Target tangent.
	*/
	TargetTangentMethod: Beam2SourceTargetTangentMethod;
	/**
	 * The tangent for the Target point for each beam.
	*/
	TargetTangent: RawDistributionVector;
	/**
	 * Whether to lock the Target to the life of the particle.
	*/
	bLockTargetTangent: boolean;
	/**
	 * The strength of the tangent from the Target point for each beam.
	*/
	TargetStrength: RawDistributionFloat;
	/**
	 * Whether to lock the Target to the life of the particle.
	*/
	bLockTargetStength: boolean;
	/**
	 * Default target-point information to use if the beam method is endpoint.
	*/
	LockRadius: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamTarget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamTarget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamTarget;
	static C(Other: UObject): ParticleModuleBeamTarget;
}

declare class ParticleModuleCameraBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCameraBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCameraBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCameraBase;
	static C(Other: UObject): ParticleModuleCameraBase;
}

declare type EParticleCameraOffsetUpdateMethod = string;
declare class ParticleModuleCameraOffset extends ParticleModuleCameraBase { 
	/**
	 * The camera-relative offset to apply to sprite location
	*/
	CameraOffset: RawDistributionFloat;
	/**
	 * If true, the offset will only be processed at spawn time
	*/
	bSpawnTimeOnly: boolean;
	/**
	 * How to update the offset for this module.
	 * DirectSet - Set the value directly (overwrite any previous setting)
	 * Additive  - Add the offset of this module to the existing offset
	 * Scalar    - Scale the existing offset by the value of this module
	*/
	UpdateMethod: EParticleCameraOffsetUpdateMethod;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCameraOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCameraOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCameraOffset;
	static C(Other: UObject): ParticleModuleCameraOffset;
}

declare class ParticleModuleCollisionBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollisionBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCollisionBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollisionBase;
	static C(Other: UObject): ParticleModuleCollisionBase;
}

declare type EParticleCollisionComplete = string;
declare class ParticleModuleCollision extends ParticleModuleCollisionBase { 
	/**
	 * How much to `slow' the velocity of the particle after a collision.
	 * Value is obtained using the EmitterTime at particle spawn.
	*/
	DampingFactor: RawDistributionVector;
	/**
	 * How much to `slow' the rotation of the particle after a collision.
	 * Value is obtained using the EmitterTime at particle spawn.
	*/
	DampingFactorRotation: RawDistributionVector;
	/**
	 * The maximum number of collisions a particle can have.
	 * Value is obtained using the EmitterTime at particle spawn.
	*/
	MaxCollisions: RawDistributionFloat;
	/**
	 * What to do once a particles MaxCollisions is reached.
	 * One of the following:
	 * EPCC_Kill
	 *         Kill the particle when MaxCollisions is reached
	 * EPCC_Freeze
	 *         Freeze in place, NO MORE UPDATES
	 * EPCC_HaltCollisions,
	 *         Stop collision checks, keep updating everything
	 * EPCC_FreezeTranslation,
	 *         Stop translations, keep updating everything else
	 * EPCC_FreezeRotation,
	 *         Stop rotations, keep updating everything else
	 * EPCC_FreezeMovement
	 *         Stop all movement, keep updating
	*/
	CollisionCompletionOption: EParticleCollisionComplete;
	/**
	 * Which ObjectTypes to collide with
	*/
	CollisionTypes: EObjectTypeQuery[];
	/**
	 * If true, physic will be applied between a particle and the
	 * object it collides with.
	 * This is one-way - particle --> object. The particle does
	 * not have physics applied to it - it just generates an
	 * impulse applied to the object it collides with.
	*/
	bApplyPhysics: boolean;
	/**
	 * The mass of the particle - for use when bApplyPhysics is true.
	 * Value is obtained using the EmitterTime at particle spawn.
	*/
	ParticleMass: RawDistributionFloat;
	/**
	 * The directional scalar value - used to scale the bounds to
	 * 'assist' in avoiding inter-penetration or large gaps.
	*/
	DirScalar: number;
	/**
	 * If true, then collisions with Pawns will still react, but
	 * the UsedMaxCollisions count will not be decremented.
	 * (ie., They don't 'count' as collisions)
	*/
	bPawnsDoNotDecrementCount: boolean;
	/**
	 * If true, then collisions that do not have a vertical hit
	 * normal will still react, but UsedMaxCollisions count will
	 * not be decremented. (ie., They don't 'count' as collisions)
	 * Useful for having particles come to rest on floors.
	*/
	bOnlyVerticalNormalsDecrementCount: boolean;
	/**
	 * The fudge factor to use to determine vertical.
	 * True vertical will have a Hit.Normal.Z == 1.0
	 * This will allow for Z components in the range of
	 * [1.0-VerticalFudgeFactor..1.0]
	 * to count as vertical collisions.
	*/
	VerticalFudgeFactor: number;
	/**
	 * How long to delay before checking a particle for collisions.
	 * Value is retrieved using the EmitterTime.
	 * During update, the particle flag IgnoreCollisions will be
	 * set until the particle RelativeTime has surpassed the
	 * DelayAmount.
	*/
	DelayAmount: RawDistributionFloat;
	/**
	 * If true, when the World->bDropDetail flag is set, the module will be ignored.
	*/
	bDropDetail: boolean;
	/**
	 * If true, Particle collision only if particle system is currently being rendered.
	*/
	bCollideOnlyIfVisible: boolean;
	/**
	 * If true, then the source actor is ignored in collision checks.
	 * Defaults to true.
	*/
	bIgnoreSourceActor: boolean;
	/**
	 * Max distance at which particle collision will occur.
	*/
	MaxCollisionDistance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollision;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCollision;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollision;
	static C(Other: UObject): ParticleModuleCollision;
}

declare type EParticleCollisionResponse = string;
declare type EParticleCollisionMode = string;
declare class ParticleModuleCollisionGPU extends ParticleModuleCollisionBase { 
	/**
	 * The bounciness of the particle.
	*/
	Resilience: RawDistributionFloat;
	/**
	 * Scales the bounciness of the particle over its life.
	*/
	ResilienceScaleOverLife: RawDistributionFloat;
	/**
	 * Friction applied to all particles during a collision or while moving
	 * along a surface.
	*/
	Friction: number;
	/**
	 * Scale applied to the size of the particle to obtain the collision radius.
	*/
	RadiusScale: number;
	/**
	 * Bias applied to the collision radius.
	*/
	RadiusBias: number;
	/**
	 * How particles respond to a collision event.
	*/
	Response: EParticleCollisionResponse;
	/**
	 * Collision Mode
	*/
	CollisionMode: EParticleCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollisionGPU;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCollisionGPU;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollisionGPU;
	static C(Other: UObject): ParticleModuleCollisionGPU;
}

declare class ParticleModuleColorBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorBase;
	static C(Other: UObject): ParticleModuleColorBase;
}

declare class ParticleModuleColor extends ParticleModuleColorBase { 
	/**
	 * Initial color for a particle as a function of Emitter time.
	*/
	StartColor: RawDistributionVector;
	/**
	 * Initial alpha for a particle as a function of Emitter time.
	*/
	StartAlpha: RawDistributionFloat;
	/**
	 * If true, the alpha value will be clamped to the [0..1] range.
	*/
	bClampAlpha: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColor;
	static C(Other: UObject): ParticleModuleColor;
}

declare class ParticleRandomSeedInfo { 
	/**
	 * The name to expose to the placed instances for setting this seed
	*/
	ParameterName: string;
	/**
	 * If true, the module will attempt to get the seed from the owner
	 * instance. If that fails, it will fall back to getting it from
	 * the RandomSeeds array.
	*/
	bGetSeedFromInstance: boolean;
	/**
	 * If true, the seed value retrieved from the instance will be an
	 * index into the array of seeds.
	*/
	bInstanceSeedIsIndex: boolean;
	/**
	 * If true, then reset the seed upon the emitter looping.
	 * For looping environmental effects this should likely be set to false to avoid
	 * a repeating pattern.
	*/
	bResetSeedOnEmitterLooping: boolean;
	/**
	 * If true, then randomly select a seed entry from the RandomSeeds array
	*/
	bRandomlySelectSeedArray: boolean;
	/**
	 * The random seed values to utilize for the module.
	 * More than 1 means the instance will randomly select one.
	*/
	RandomSeeds: number[];
}

declare class ParticleModuleColor_Seeded extends ParticleModuleColor { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColor_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColor_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColor_Seeded;
	static C(Other: UObject): ParticleModuleColor_Seeded;
}

declare class ParticleModuleColorOverLife extends ParticleModuleColorBase { 
	/**
	 * The color to apply to the particle, as a function of the particle RelativeTime.
	*/
	ColorOverLife: RawDistributionVector;
	/**
	 * The alpha to apply to the particle, as a function of the particle RelativeTime.
	*/
	AlphaOverLife: RawDistributionFloat;
	/**
	 * If true, the alpha value will be clamped to the [0..1] range.
	*/
	bClampAlpha: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColorOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorOverLife;
	static C(Other: UObject): ParticleModuleColorOverLife;
}

declare class ParticleModuleColorScaleOverLife extends ParticleModuleColorBase { 
	/**
	 * The scale factor for the color.
	*/
	ColorScaleOverLife: RawDistributionVector;
	/**
	 * The scale factor for the alpha.
	*/
	AlphaScaleOverLife: RawDistributionFloat;
	/**
	 * Whether it is EmitterTime or ParticleTime related.
	*/
	bEmitterTime: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColorScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorScaleOverLife;
	static C(Other: UObject): ParticleModuleColorScaleOverLife;
}

declare class ParticleModuleEventReceiverKillParticles extends ParticleModuleEventReceiverBase { 
	/**
	 * If true, stop this emitter from spawning as well.
	*/
	bStopSpawning: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleEventReceiverKillParticles;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleEventReceiverKillParticles;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleEventReceiverKillParticles;
	static C(Other: UObject): ParticleModuleEventReceiverKillParticles;
}

declare class ParticleModuleEventReceiverSpawn extends ParticleModuleEventReceiverBase { 
	/**
	 * The number of particles to spawn.
	*/
	SpawnCount: RawDistributionFloat;
	/**
	 * For Death-based event receiving, if this is true, it indicates that the
	 * ParticleTime of the event should be used to look-up the SpawnCount.
	 * Otherwise (and in all other events received), use the emitter time of
	 * the event.
	*/
	bUseParticleTime: boolean;
	/**
	 * If true, use the location of the particle system component for spawning.
	 * if false (default), use the location of the particle event.
	*/
	bUsePSysLocation: boolean;
	/**
	 * If true, use the velocity of the dying particle as the start velocity of
	 * the spawned particle.
	*/
	bInheritVelocity: boolean;
	/**
	 * If bInheritVelocity is true, scale the velocity with this.
	*/
	InheritVelocityScale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleEventReceiverSpawn;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleEventReceiverSpawn;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleEventReceiverSpawn;
	static C(Other: UObject): ParticleModuleEventReceiverSpawn;
}

declare class ParticleModuleKillBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleKillBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillBase;
	static C(Other: UObject): ParticleModuleKillBase;
}

declare class ParticleModuleKillBox extends ParticleModuleKillBase { 
	/**
	 * The lower left corner of the box.
	*/
	LowerLeftCorner: RawDistributionVector;
	/**
	 * The upper right corner of the box.
	*/
	UpperRightCorner: RawDistributionVector;
	/**
	 * If true, the box coordinates are in world space./
	*/
	bAbsolute: boolean;
	/**
	 * If true, particles INSIDE the box will be killed.
	 * If false (the default), particles OUTSIDE the box will be killed.
	*/
	bKillInside: boolean;
	/**
	 * If true, the box will always be axis aligned and non-scalable.
	*/
	bAxisAlignedAndFixedSize: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleKillBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillBox;
	static C(Other: UObject): ParticleModuleKillBox;
}

declare class ParticleModuleKillHeight extends ParticleModuleKillBase { 
	/**
	 * The height at which to kill the particle.
	*/
	Height: RawDistributionFloat;
	/**
	 * If true, the height should be treated as a world-space position.
	*/
	bAbsolute: boolean;
	/**
	 * If true, the plane should be considered a floor - ie kill anything BELOW it.
	 * If false, if is a ceiling - ie kill anything ABOVE it.
	*/
	bFloor: boolean;
	/**
	 * If true, take the particle systems scale into account
	*/
	bApplyPSysScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillHeight;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleKillHeight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillHeight;
	static C(Other: UObject): ParticleModuleKillHeight;
}

declare class ParticleModuleLifetimeBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetimeBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLifetimeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetimeBase;
	static C(Other: UObject): ParticleModuleLifetimeBase;
}

declare class ParticleModuleLifetime extends ParticleModuleLifetimeBase { 
	/**
	 * The lifetime of the particle, in seconds. Retrieved using the EmitterTime at the spawn of the particle.
	*/
	Lifetime: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetime;
	static C(Other: UObject): ParticleModuleLifetime;
}

declare class ParticleModuleLifetime_Seeded extends ParticleModuleLifetime { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetime_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLifetime_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetime_Seeded;
	static C(Other: UObject): ParticleModuleLifetime_Seeded;
}

declare class ParticleModuleLightBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLightBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLightBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLightBase;
	static C(Other: UObject): ParticleModuleLightBase;
}

declare class ParticleModuleLight extends ParticleModuleLightBase { 
	/**
	 * Whether to use physically based inverse squared falloff from the light.  If unchecked, the LightExponent distribution will be used instead.
	*/
	bUseInverseSquaredFalloff: boolean;
	/**
	 * Whether lights from this module should affect translucency.
	 * Use with caution.  Modules enabling this should only make a few particle lights at most, and the smaller they are, the less they will cost.
	*/
	bAffectsTranslucency: boolean;
	/**
	 * Will draw wireframe spheres to preview the light radius if enabled.
	 * Note: this is intended for previewing and the value will not be saved, it will always revert to disabled.
	*/
	bPreviewLightRadius: boolean;
	/**
	 * Fraction of particles in this emitter to create lights on.
	*/
	SpawnFraction: number;
	/**
	 * Scale that is applied to the particle's color to calculate the light's color, and can be setup as a curve over the particle's lifetime.
	*/
	ColorScaleOverLife: RawDistributionVector;
	/**
	 * Brightness scale for the light, which can be setup as a curve over the particle's lifetime.
	*/
	BrightnessOverLife: RawDistributionFloat;
	/**
	 * Scales the particle's radius, to calculate the light's radius.
	*/
	RadiusScale: RawDistributionFloat;
	/**
	 * Provides the light's exponent when inverse squared falloff is disabled.
	*/
	LightExponent: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLight;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLight;
	static C(Other: UObject): ParticleModuleLight;
}

declare class ParticleModuleLight_Seeded extends ParticleModuleLight { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLight_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLight_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLight_Seeded;
	static C(Other: UObject): ParticleModuleLight_Seeded;
}

declare class ParticleModuleLocationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationBase;
	static C(Other: UObject): ParticleModuleLocationBase;
}

declare class ParticleModuleLocation extends ParticleModuleLocationBase { 
	/**
	 * The location the particle should be emitted.
	 * Relative in local space to the emitter by default.
	 * Relative in world space as a WorldOffset module or when the emitter's UseLocalSpace is off.
	 * Retrieved using the EmitterTime at the spawn of the particle.
	*/
	StartLocation: RawDistributionVector;
	/**
	 * When set to a non-zero value this will force the particles to only spawn on evenly distributed
	 * positions between the two points specified.
	*/
	DistributeOverNPoints: number;
	/**
	 * When DistributeOverNPoints is set to a non-zero value, this specifies the ratio of particles spawned
	 * that should use the distribution.  (For example setting this to 1 will cause all the particles to
	 * be distributed evenly whereas .75 would cause 1/4 of the particles to be randomly placed).
	*/
	DistributeThreshold: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocation;
	static C(Other: UObject): ParticleModuleLocation;
}

declare class ParticleModuleLocation_Seeded extends ParticleModuleLocation { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocation_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocation_Seeded;
	static C(Other: UObject): ParticleModuleLocation_Seeded;
}

declare class ParticleModuleLocationWorldOffset extends ParticleModuleLocation { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationWorldOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationWorldOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationWorldOffset;
	static C(Other: UObject): ParticleModuleLocationWorldOffset;
}

declare class ParticleModuleLocationWorldOffset_Seeded extends ParticleModuleLocationWorldOffset { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationWorldOffset_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationWorldOffset_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationWorldOffset_Seeded;
	static C(Other: UObject): ParticleModuleLocationWorldOffset_Seeded;
}

declare type ELocationBoneSocketSource = string;
declare class LocationBoneSocketInfo { 
	/**
	 * The name of the bone/socket on the skeletal mesh
	*/
	BoneSocketName: string;
	/**
	 * The offset from the bone/socket to use
	*/
	Offset: Vector;
}

declare type ELocationBoneSocketSelectionMethod = string;
declare class ParticleModuleLocationBoneSocket extends ParticleModuleLocationBase { 
	/**
	 * Whether the module uses Bones or Sockets for locations.
	 * BONESOCKETSOURCE_Bones          - Use Bones as the source locations.
	 * BONESOCKETSOURCE_Sockets        - Use Sockets as the source locations.
	*/
	SourceType: ELocationBoneSocketSource;
	/**
	 * An offset to apply to each bone/socket
	*/
	UniversalOffset: Vector;
	/**
	 * The name(s) of the bone/socket(s) to position at
	*/
	SourceLocations: LocationBoneSocketInfo[];
	/**
	 * The method by which to select the bone/socket to spawn at.
	 * SEL_Sequential                  - loop through the bone/socket array in order
	 * SEL_Random                              - randomly select a bone/socket from the array
	*/
	SelectionMethod: ELocationBoneSocketSelectionMethod;
	/**
	 * If true, update the particle locations each frame with that of the bone/socket
	*/
	bUpdatePositionEachFrame: boolean;
	/**
	 * If true, rotate mesh emitter meshes to orient w/ the socket
	*/
	bOrientMeshEmitters: boolean;
	/**
	 * If true, particles inherit the associated bone velocity when spawned
	*/
	bInheritBoneVelocity: boolean;
	/**
	 * The parameter name of the skeletal mesh actor that supplies the SkelMeshComponent for in-game.
	*/
	SkelMeshActorParamName: string;
	/**
	 * The name of the skeletal mesh to use in the editor
	*/
	EditorSkelMesh: SkeletalMesh;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationBoneSocket;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationBoneSocket;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationBoneSocket;
	static C(Other: UObject): ParticleModuleLocationBoneSocket;
}

declare class ParticleModuleLocationDirect extends ParticleModuleLocationBase { 
	/**
	 * The location of the particle at a give time. Retrieved using the particle RelativeTime.
	 * IMPORTANT: the particle location is set to this value, thereby over-writing any previous module impacts.
	*/
	Location: RawDistributionVector;
	/**
	 * An offset to apply to the position retrieved from the Location calculation.
	 * The offset is retrieved using the EmitterTime.
	 * The offset will remain constant over the life of the particle.
	*/
	LocationOffset: RawDistributionVector;
	/**
	 * Scales the velocity of the object at a given point in the time-line.
	*/
	ScaleFactor: RawDistributionVector;
	/**
	 * Currently unused.
	*/
	Direction: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationDirect;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationDirect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationDirect;
	static C(Other: UObject): ParticleModuleLocationDirect;
}

declare type ELocationEmitterSelectionMethod = string;
declare class ParticleModuleLocationEmitter extends ParticleModuleLocationBase { 
	/**
	 * The name of the emitter to use that the source location for particle.
	*/
	EmitterName: string;
	/**
	 * The method to use when selecting a spawn target particle from the emitter.
	 * Can be one of the following:
	 *         ELESM_Random            Randomly select a particle from the source emitter.
	 *         ELESM_Sequential        Step through each particle from the source emitter in order.
	*/
	SelectionMethod: ELocationEmitterSelectionMethod;
	/**
	 * If true, the spawned particle should inherit the velocity of the source particle.
	*/
	InheritSourceVelocity: boolean;
	/**
	 * Amount to scale the source velocity by when inheriting it.
	*/
	InheritSourceVelocityScale: number;
	/**
	 * If true, the spawned particle should inherit the rotation of the source particle.
	*/
	bInheritSourceRotation: boolean;
	/**
	 * Amount to scale the source rotation by when inheriting it.
	*/
	InheritSourceRotationScale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationEmitter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationEmitter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationEmitter;
	static C(Other: UObject): ParticleModuleLocationEmitter;
}

declare class ParticleModuleLocationEmitterDirect extends ParticleModuleLocationBase { 
	/**
	 * The name of the emitter to use as a source for the location of the particles.
	*/
	EmitterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationEmitterDirect;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationEmitterDirect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationEmitterDirect;
	static C(Other: UObject): ParticleModuleLocationEmitterDirect;
}

declare class ParticleModuleLocationPrimitiveBase extends ParticleModuleLocationBase { 
	/**
	 * Whether the positive X axis is valid for spawning.
	*/
	Positive_X: boolean;
	/**
	 * Whether the positive Y axis is valid for spawning.
	*/
	Positive_Y: boolean;
	/**
	 * Whether the positive Z axis is valid for spawning.
	*/
	Positive_Z: boolean;
	/**
	 * Whether the negative X axis is valid for spawning.
	*/
	Negative_X: boolean;
	/**
	 * Whether the negative Y axis is valid for spawning.
	*/
	Negative_Y: boolean;
	/**
	 * Whether the negative Zaxis is valid for spawning.
	*/
	Negative_Z: boolean;
	/**
	 * Whether particles will only spawn on the surface of the primitive.
	*/
	SurfaceOnly: boolean;
	/**
	 * Whether the particle should get its velocity from the position within the primitive.
	*/
	Velocity: boolean;
	/**
	 * The scale applied to the velocity. (Only used if 'Velocity' is checked).
	*/
	VelocityScale: RawDistributionFloat;
	/**
	 * The location of the bounding primitive relative to the position of the emitter.
	*/
	StartLocation: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveBase;
	static C(Other: UObject): ParticleModuleLocationPrimitiveBase;
}

declare type CylinderHeightAxis = string;
declare class ParticleModuleLocationPrimitiveCylinder extends ParticleModuleLocationPrimitiveBase { 
	/**
	 * If true, get the particle velocity form the radial distance inside the primitive.
	*/
	RadialVelocity: boolean;
	/**
	 * The radius of the cylinder.
	*/
	StartRadius: RawDistributionFloat;
	/**
	 * The height of the cylinder, centered about the location.
	*/
	StartHeight: RawDistributionFloat;
	/**
	 * Determine particle particle system axis that should represent the height of the cylinder.
	 * Can be one of the following:
	 *   PMLPC_HEIGHTAXIS_X - Orient the height along the particle system X-axis.
	 *   PMLPC_HEIGHTAXIS_Y - Orient the height along the particle system Y-axis.
	 *   PMLPC_HEIGHTAXIS_Z - Orient the height along the particle system Z-axis.
	*/
	HeightAxis: CylinderHeightAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveCylinder;
	static C(Other: UObject): ParticleModuleLocationPrimitiveCylinder;
}

declare class ParticleModuleLocationPrimitiveCylinder_Seeded extends ParticleModuleLocationPrimitiveCylinder { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static C(Other: UObject): ParticleModuleLocationPrimitiveCylinder_Seeded;
}

declare class ParticleModuleLocationPrimitiveSphere extends ParticleModuleLocationPrimitiveBase { 
	/**
	 * The radius of the sphere. Retrieved using EmitterTime.
	*/
	StartRadius: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveSphere;
	static C(Other: UObject): ParticleModuleLocationPrimitiveSphere;
}

declare class ParticleModuleLocationPrimitiveSphere_Seeded extends ParticleModuleLocationPrimitiveSphere { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveSphere_Seeded;
	static C(Other: UObject): ParticleModuleLocationPrimitiveSphere_Seeded;
}

declare class ParticleModuleLocationPrimitiveTriangle extends ParticleModuleLocationBase { 
	/**
	 * Start Offset
	*/
	StartOffset: RawDistributionVector;
	/**
	 * Height
	*/
	Height: RawDistributionFloat;
	/**
	 * Angle
	*/
	Angle: RawDistributionFloat;
	/**
	 * Thickness
	*/
	Thickness: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveTriangle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveTriangle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveTriangle;
	static C(Other: UObject): ParticleModuleLocationPrimitiveTriangle;
}

declare type ELocationSkelVertSurfaceSource = string;
declare class ParticleModuleLocationSkelVertSurface extends ParticleModuleLocationBase { 
	/**
	 * Whether the module uses Verts or Surfaces for locations.
	 * VERTSURFACESOURCE_Vert          - Use Verts as the source locations.
	 * VERTSURFACESOURCE_Surface       - Use Surfaces as the source locations.
	*/
	SourceType: ELocationSkelVertSurfaceSource;
	/**
	 * An offset to apply to each vert/surface
	*/
	UniversalOffset: Vector;
	/**
	 * If true, update the particle locations each frame with that of the vert/surface
	*/
	bUpdatePositionEachFrame: boolean;
	/**
	 * If true, rotate mesh emitter meshes to orient w/ the vert/surface
	*/
	bOrientMeshEmitters: boolean;
	/**
	 * If true, particles inherit the associated bone velocity when spawned
	*/
	bInheritBoneVelocity: boolean;
	/**
	 * The parameter name of the skeletal mesh actor that supplies the SkelMeshComponent for in-game.
	*/
	SkelMeshActorParamName: string;
	/**
	 * The name of the skeletal mesh to use in the editor
	*/
	EditorSkelMesh: SkeletalMesh;
	/**
	 * This module will only spawn from verts or surfaces associated with the bones in this list
	*/
	ValidAssociatedBones: string[];
	/**
	 * When true use the RestrictToNormal and NormalTolerance values to check surface normals
	*/
	bEnforceNormalCheck: boolean;
	/**
	 * Use this normal to restrict spawning locations
	*/
	NormalToCompare: Vector;
	/**
	 * Normal tolerance.  0 degrees means it must be an exact match, 180 degrees means it can be any angle.
	*/
	NormalCheckToleranceDegrees: number;
	/**
	 * Normal tolerance.  Value between 1.0 and -1.0 with 1.0 being exact match, 0.0 being everything up to
	 *               perpendicular and -1.0 being any direction or don't restrict at all.
	*/
	NormalCheckTolerance: number;
	/**
	 * Array of material indices that are valid materials to spawn from.
	 * If empty, any material will be considered valid
	*/
	ValidMaterialIndices: number[];
	/**
	 * If true, particles inherit the associated vertex color on spawn. This feature is not supported for GPU particles.
	*/
	bInheritVertexColor: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationSkelVertSurface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationSkelVertSurface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationSkelVertSurface;
	static C(Other: UObject): ParticleModuleLocationSkelVertSurface;
}

declare class ParticleModulePivotOffset extends ParticleModuleLocationBase { 
	/**
	 * Offset applied in UV space to the particle vertex positions. Defaults to (0.5,0.5) putting the pivot in the centre of the partilce.
	*/
	PivotOffset: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModulePivotOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModulePivotOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModulePivotOffset;
	static C(Other: UObject): ParticleModulePivotOffset;
}

declare class ParticleModuleSourceMovement extends ParticleModuleLocationBase { 
	/**
	 * The scale factor to apply to the source movement before adding to the particle location.
	 * The value is looked up using the particles RELATIVE time [0..1].
	*/
	SourceMovementScale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSourceMovement;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSourceMovement;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSourceMovement;
	static C(Other: UObject): ParticleModuleSourceMovement;
}

declare class ParticleModuleMaterialBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMaterialBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMaterialBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMaterialBase;
	static C(Other: UObject): ParticleModuleMaterialBase;
}

declare class ParticleModuleMeshMaterial extends ParticleModuleMaterialBase { 
	/**
	 * The array of materials to apply to the mesh particles.
	*/
	MeshMaterials: MaterialInterface[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshMaterial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshMaterial;
	static C(Other: UObject): ParticleModuleMeshMaterial;
}

declare class ParticleModuleOrientationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleOrientationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleOrientationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleOrientationBase;
	static C(Other: UObject): ParticleModuleOrientationBase;
}

declare type EParticleAxisLock = string;
declare class ParticleModuleOrientationAxisLock extends ParticleModuleOrientationBase { 
	/**
	 * The lock axis flag setting.
	 * Can be one of the following:
	 *         EPAL_NONE                       No locking to an axis.
	 *         EPAL_X                          Lock the sprite facing towards +X.
	 *         EPAL_Y                          Lock the sprite facing towards +Y.
	 *         EPAL_Z                          Lock the sprite facing towards +Z.
	 *         EPAL_NEGATIVE_X         Lock the sprite facing towards -X.
	 *         EPAL_NEGATIVE_Y         Lock the sprite facing towards -Y.
	 *         EPAL_NEGATIVE_Z         Lock the sprite facing towards -Z.
	 *         EPAL_ROTATE_X           Lock the sprite rotation on the X-axis.
	 *         EPAL_ROTATE_Y           Lock the sprite rotation on the Y-axis.
	 *         EPAL_ROTATE_Z           Lock the sprite rotation on the Z-axis.
	*/
	LockAxisFlags: EParticleAxisLock;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleOrientationAxisLock;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleOrientationAxisLock;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleOrientationAxisLock;
	static C(Other: UObject): ParticleModuleOrientationAxisLock;
}

declare class ParticleModuleParameterBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterBase;
	static C(Other: UObject): ParticleModuleParameterBase;
}

declare type EEmitterDynamicParameterValue = string;
declare class EmitterDynamicParameter { 
	/**
	 * The parameter name - from the material DynamicParameter expression. READ-ONLY
	*/
	ParamName: string;
	/**
	 * If true, use the EmitterTime to retrieve the value, otherwise use Particle RelativeTime.
	*/
	bUseEmitterTime: boolean;
	/**
	 * If true, only set the value at spawn time of the particle, otherwise update each frame.
	*/
	bSpawnTimeOnly: boolean;
	/**
	 * Where to get the parameter value from.
	*/
	ValueMethod: EEmitterDynamicParameterValue;
	/**
	 * If true, scale the velocity value selected in ValueMethod by the evaluated ParamValue.
	*/
	bScaleVelocityByParamValue: boolean;
	/**
	 * The distriubtion for the parameter value.
	*/
	ParamValue: RawDistributionFloat;
}

declare class ParticleModuleParameterDynamic extends ParticleModuleParameterBase { 
	/**
	 * The dynamic parameters this module uses.
	*/
	DynamicParams: EmitterDynamicParameter[];
	/**
	 * Flags for optimizing update
	*/
	UpdateFlags: number;
	/**
	 * Uses Velocity
	*/
	bUsesVelocity: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterDynamic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleParameterDynamic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterDynamic;
	static C(Other: UObject): ParticleModuleParameterDynamic;
}

declare class ParticleModuleParameterDynamic_Seeded extends ParticleModuleParameterDynamic { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterDynamic_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleParameterDynamic_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterDynamic_Seeded;
	static C(Other: UObject): ParticleModuleParameterDynamic_Seeded;
}

declare class ParticleModuleRotationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationBase;
	static C(Other: UObject): ParticleModuleRotationBase;
}

declare class ParticleModuleMeshRotation extends ParticleModuleRotationBase { 
	/**
	 * Initial rotation in ROTATIONS PER SECOND (1 = 360 degrees).
	 * The value is retrieved using the EmitterTime.
	*/
	StartRotation: RawDistributionVector;
	/**
	 * If true, apply the parents rotation as well.
	*/
	bInheritParent: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotation;
	static C(Other: UObject): ParticleModuleMeshRotation;
}

declare class ParticleModuleMeshRotation_Seeded extends ParticleModuleMeshRotation { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotation_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotation_Seeded;
	static C(Other: UObject): ParticleModuleMeshRotation_Seeded;
}

declare class ParticleModuleRotation extends ParticleModuleRotationBase { 
	/**
	 * Initial rotation of the particle (1 = 360 degrees).
	 * The value is retrieved using the EmitterTime.
	*/
	StartRotation: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotation;
	static C(Other: UObject): ParticleModuleRotation;
}

declare class ParticleModuleRotation_Seeded extends ParticleModuleRotation { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotation_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotation_Seeded;
	static C(Other: UObject): ParticleModuleRotation_Seeded;
}

declare class ParticleModuleRotationOverLifetime extends ParticleModuleRotationBase { 
	/**
	 * The rotation of the particle (1.0 = 360 degrees).
	 * The value is retrieved using the RelativeTime of the particle.
	*/
	RotationOverLife: RawDistributionFloat;
	/**
	 * If true,  the particle rotation is multiplied by the value retrieved from RotationOverLife.
	 * If false, the particle rotation is incremented by the value retrieved from RotationOverLife.
	*/
	Scale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationOverLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationOverLifetime;
	static C(Other: UObject): ParticleModuleRotationOverLifetime;
}

declare class ParticleModuleRotationRateBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRateBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRateBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRateBase;
	static C(Other: UObject): ParticleModuleRotationRateBase;
}

declare class ParticleModuleMeshRotationRate extends ParticleModuleRotationRateBase { 
	/**
	 * Initial rotation rate, in rotations per second.
	 * The value is retrieved using the EmitterTime.
	*/
	StartRotationRate: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRate;
	static C(Other: UObject): ParticleModuleMeshRotationRate;
}

declare class ParticleModuleRotationRate extends ParticleModuleRotationRateBase { 
	/**
	 * Initial rotation rate, in rotations per second.
	 * The value is retrieved using the EmitterTime.
	*/
	StartRotationRate: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRate;
	static C(Other: UObject): ParticleModuleRotationRate;
}

declare class ParticleModuleMeshRotationRate_Seeded extends ParticleModuleMeshRotationRate { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRate_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRate_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRate_Seeded;
	static C(Other: UObject): ParticleModuleMeshRotationRate_Seeded;
}

declare class ParticleModuleMeshRotationRateMultiplyLife extends ParticleModuleRotationRateBase { 
	/**
	 * The scale factor that should be applied to the rotation rate.
	 * The value is retrieved using the RelativeTime of the particle.
	*/
	LifeMultiplier: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRateMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRateMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRateMultiplyLife;
	static C(Other: UObject): ParticleModuleMeshRotationRateMultiplyLife;
}

declare class ParticleModuleMeshRotationRateOverLife extends ParticleModuleRotationRateBase { 
	/**
	 * The rotation rate desired.
	 * The value is retrieved using the RelativeTime of the particle.
	*/
	RotRate: RawDistributionVector;
	/**
	 * If true, scale the current rotation rate by the value retrieved.
	 * Otherwise, set the rotation rate to the value retrieved.
	*/
	bScaleRotRate: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRateOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRateOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRateOverLife;
	static C(Other: UObject): ParticleModuleMeshRotationRateOverLife;
}

declare class ParticleModuleRotationRate_Seeded extends ParticleModuleRotationRate { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRate_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRate_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRate_Seeded;
	static C(Other: UObject): ParticleModuleRotationRate_Seeded;
}

declare class ParticleModuleRotationRateMultiplyLife extends ParticleModuleRotationRateBase { 
	/**
	 * The scale factor that should be applied to the rotation rate.
	 * The value is retrieved using the RelativeTime of the particle.
	*/
	LifeMultiplier: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRateMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRateMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRateMultiplyLife;
	static C(Other: UObject): ParticleModuleRotationRateMultiplyLife;
}

declare class ParticleModuleSizeBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeBase;
	static C(Other: UObject): ParticleModuleSizeBase;
}

declare class ParticleModuleSize extends ParticleModuleSizeBase { 
	/**
	 * The initial size that should be used for a particle.
	 * The value is retrieved using the EmitterTime during the spawn of a particle.
	 * It is added to the Size and BaseSize fields of the spawning particle.
	*/
	StartSize: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSize;
	static C(Other: UObject): ParticleModuleSize;
}

declare class ParticleModuleSize_Seeded extends ParticleModuleSize { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSize_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSize_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSize_Seeded;
	static C(Other: UObject): ParticleModuleSize_Seeded;
}

declare class ParticleModuleSizeMultiplyLife extends ParticleModuleSizeBase { 
	/**
	 * The scale factor for the size that should be used for a particle.
	 * The value is retrieved using the RelativeTime of the particle during its update.
	*/
	LifeMultiplier: RawDistributionVector;
	/**
	 * If true, the X-component of the scale factor will be applied to the particle size X-component.
	 * If false, the X-component is left unaltered.
	*/
	MultiplyX: boolean;
	/**
	 * If true, the Y-component of the scale factor will be applied to the particle size Y-component.
	 * If false, the Y-component is left unaltered.
	*/
	MultiplyY: boolean;
	/**
	 * If true, the Z-component of the scale factor will be applied to the particle size Z-component.
	 * If false, the Z-component is left unaltered.
	*/
	MultiplyZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeMultiplyLife;
	static C(Other: UObject): ParticleModuleSizeMultiplyLife;
}

declare class ParticleModuleSizeScale extends ParticleModuleSizeBase { 
	/**
	 * The amount the BaseSize should be scaled before being used as the size of the particle.
	 * The value is retrieved using the RelativeTime of the particle during its update.
	 * NOTE: this module overrides any size adjustments made prior to this module in that frame.
	*/
	SizeScale: RawDistributionVector;
	/**
	 * Ignored
	*/
	EnableX: boolean;
	/**
	 * Ignored
	*/
	EnableY: boolean;
	/**
	 * Ignored
	*/
	EnableZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeScale;
	static C(Other: UObject): ParticleModuleSizeScale;
}

declare class ParticleModuleSizeScaleBySpeed extends ParticleModuleSizeBase { 
	/**
	 * By how much speed affects the size of the particle in each dimension.
	*/
	SpeedScale: Vector2D;
	/**
	 * The maximum amount by which to scale a particle in each dimension.
	*/
	MaxScale: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeScaleBySpeed;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeScaleBySpeed;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeScaleBySpeed;
	static C(Other: UObject): ParticleModuleSizeScaleBySpeed;
}

declare class ParticleModuleSpawnPerUnit extends ParticleModuleSpawnBase { 
	/**
	 * The scalar to apply to the distance traveled.
	 * The value from SpawnPerUnit is divided by this value to give the actual
	 * number of particles per unit.
	*/
	UnitScalar: number;
	/**
	 * The amount to spawn per meter distribution.
	 * The value is retrieved using the EmitterTime.
	*/
	SpawnPerUnit: RawDistributionFloat;
	/**
	 * If true, process the default spawn rate when not moving...
	 * When not moving, skip the default spawn rate.
	 * If false, return the bProcessSpawnRate setting.
	*/
	bIgnoreSpawnRateWhenMoving: boolean;
	/**
	 * The tolerance for moving vs. not moving w.r.t. the bIgnoreSpawnRateWhenMoving flag.
	 * Ie, if (DistanceMoved < (UnitScalar x MovementTolerance)) then consider it not moving.
	*/
	MovementTolerance: number;
	/**
	 * The maximum valid movement for a single frame.
	 * If 0.0, then the check is not performed.
	 * Currently, if the distance moved between frames is greater than this
	 * then NO particles will be spawned.
	 * This is primiarily intended to cover cases where the PSystem is
	 * attached to teleporting objects.
	*/
	MaxFrameDistance: number;
	/**
	 * If true, ignore the X-component of the movement
	*/
	bIgnoreMovementAlongX: boolean;
	/**
	 * If true, ignore the Y-component of the movement
	*/
	bIgnoreMovementAlongY: boolean;
	/**
	 * If true, ignore the Z-component of the movement
	*/
	bIgnoreMovementAlongZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSpawnPerUnit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSpawnPerUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSpawnPerUnit;
	static C(Other: UObject): ParticleModuleSpawnPerUnit;
}

declare class ParticleModuleSubUVBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUVBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSubUVBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVBase;
	static C(Other: UObject): ParticleModuleSubUVBase;
}

declare class ParticleModuleSubUV extends ParticleModuleSubUVBase { 
	/**
	 * The index of the sub-image that should be used for the particle.
	 * The value is retrieved using the RelativeTime of the particles.
	*/
	SubImageIndex: RawDistributionFloat;
	/**
	 * If true, use *real* time when updating the image index.
	 * The movie will update regardless of the slomo settings of the game.
	*/
	bUseRealTime: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUV;
	static C(Other: UObject): ParticleModuleSubUV;
}

declare class ParticleModuleSubUVMovie extends ParticleModuleSubUV { 
	/**
	 * If true, use the emitter time to look up the frame rate.
	 * If false (default), use the particle relative time.
	*/
	bUseEmitterTime: boolean;
	/**
	 * The frame rate the SubUV images should be 'flipped' thru at.
	*/
	FrameRate: RawDistributionFloat;
	/**
	 * The starting image index for the SubUV (1 = the first frame).
	 * Assumes order of Left->Right, Top->Bottom
	 * If greater than the last frame, it will clamp to the last one.
	 * If 0, then randomly selects a starting frame.
	*/
	StartingFrame: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUVMovie;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSubUVMovie;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVMovie;
	static C(Other: UObject): ParticleModuleSubUVMovie;
}

declare class ParticleModuleTrailBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTrailBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTrailBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailBase;
	static C(Other: UObject): ParticleModuleTrailBase;
}

declare type ETrail2SourceMethod = string;
declare type EParticleSourceSelectionMethod = string;
declare class ParticleModuleTrailSource extends ParticleModuleTrailBase { 
	/**
	 * The source method for the trail.
	*/
	SourceMethod: ETrail2SourceMethod;
	/**
	 * The name of the source - either the emitter or Actor.
	*/
	SourceName: string;
	/**
	 * The strength of the tangent from the source point for each Trail.
	*/
	SourceStrength: RawDistributionFloat;
	/**
	 * Whether to lock the source to the life of the particle.
	*/
	bLockSourceStength: boolean;
	/**
	 * SourceOffsetCount
	 * The number of source offsets that can be expected to be found on the instance.
	 * These must be named
	 *         TrailSourceOffset#
	*/
	SourceOffsetCount: number;
	/**
	 * Default offsets from the source(s).
	 * If there are < SourceOffsetCount slots, the grabbing of values will simply wrap.
	*/
	SourceOffsetDefaults: Vector[];
	/**
	 * Particle selection method, when using the SourceMethod of Particle.
	*/
	SelectionMethod: EParticleSourceSelectionMethod;
	/**
	 * Interhit particle rotation - only valid for SourceMethod of PET2SRCM_Particle.
	*/
	bInheritRotation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTrailSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTrailSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailSource;
	static C(Other: UObject): ParticleModuleTrailSource;
}

declare class ParticleModuleTypeDataBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataBase;
	static C(Other: UObject): ParticleModuleTypeDataBase;
}

declare class ParticleModuleTypeDataAnimTrail extends ParticleModuleTypeDataBase { 
	/**
	 * If true, when the system is deactivated, mark trails as dead.
	 * This means they will still render, but will not have more particles
	 * added to them, even if the system re-activates...
	*/
	bDeadTrailsOnDeactivate: boolean;
	/**
	 * If true, recalculate the previous tangent when a new particle is spawned
	*/
	bEnablePreviousTangentRecalculation: boolean;
	/**
	 * If true, recalculate tangents every frame to allow velocity/acceleration to be applied
	*/
	bTangentRecalculationEveryFrame: boolean;
	/**
	 * The (estimated) covered distance to tile the 2nd UV set at.
	 * If 0.0, a second UV set will not be passed in.
	*/
	TilingDistance: number;
	/**
	 * The distance step size for tessellation.
	 * # Tessellation Points = TruncToInt((Distance Between Spawned Particles) / DistanceTessellationStepSize)). If 0 then there is no distance tessellation.
	*/
	DistanceTessellationStepSize: number;
	/**
	 * The tangent scalar for tessellation.
	 * This is the degree change in the tangent direction [0...180] required to warrant an additional tessellation point. If 0 then there is no tangent tessellation.
	*/
	TangentTessellationStepSize: number;
	/**
	 * The width step size for tessellation.
	 * This is the number of world units change in the width required to warrant an additional tessellation point. If 0 then there is no width tessellation.
	*/
	WidthTessellationStepSize: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataAnimTrail;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataAnimTrail;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataAnimTrail;
	static C(Other: UObject): ParticleModuleTypeDataAnimTrail;
}

declare type EBeam2Method = string;
declare type EBeamTaperMethod = string;
declare class ParticleModuleTypeDataBeam2 extends ParticleModuleTypeDataBase { 
	/**
	 * The method with which to form the beam(s). Must be one of the following:
	 *         PEB2M_Distance  - Use the distance property to emit a beam along the X-axis of the emitter.
	 *         PEB2M_Target    - Emit a beam from the source to the supplied target.
	 *         PEB2M_Branch    - Currently unimplemented.
	*/
	BeamMethod: EBeam2Method;
	/**
	 * The number of times to tile the texture along each beam.
	 * Overridden by TextureTilingDistance if it is > 0.0.
	 *     1st UV set only. 2nd UV set does not Tile.
	*/
	TextureTile: number;
	/**
	 * The distance per texture tile.
	 *     1st UV set only. 2nd UV set does not Tile.
	*/
	TextureTileDistance: number;
	/**
	 * The number of sheets to render
	*/
	Sheets: number;
	/**
	 * The number of live beams
	*/
	MaxBeamCount: number;
	/**
	 * The speed at which the beam should move from source to target when firing up.
	 *     '0' indicates instantaneous
	*/
	Speed: number;
	/**
	 * Indicates whether the beam should be interpolated.
	 *     <= 0 --> no
	 *     >  0 --> yes (and is equal to the number of interpolation steps that should be taken.
	*/
	InterpolationPoints: number;
	/**
	 * If true, there will ALWAYS be a beam...
	*/
	bAlwaysOn: boolean;
	/**
	 * The approach to use for determining the Up vector(s) for the beam.
	 * 0 indicates that the Up FVector should be calculated at EVERY point in the beam.
	 * 1 indicates a single Up FVector should be determined at the start of the beam and used at every point.
	 * N indicates an Up FVector should be calculated every N points of the beam and interpolated between them.
	 *     [NOTE: This mode is currently unsupported.]
	*/
	UpVectorStepSize: number;
	/**
	 * The name of the emitter to branch from (if mode is PEB2M_Branch)
	 * MUST BE IN THE SAME PARTICLE SYSTEM!
	*/
	BranchParentName: string;
	/**
	 * The distance along the X-axis to stretch the beam
	 * Distance is only used if BeamMethod is PEB2M_Distance
	*/
	Distance: RawDistributionFloat;
	/**
	 * Tapering mode - one of the following:
	 * PEBTM_None              - No tapering is applied
	 * PEBTM_Full              - Taper the beam relative to source-->target, regardless of current beam length
	 * PEBTM_Partial   - Taper the beam relative to source-->location, 0=source,1=endpoint
	*/
	TaperMethod: EBeamTaperMethod;
	/**
	 * Tapering factor, 0 = source of beam, 1 = target
	*/
	TaperFactor: RawDistributionFloat;
	/**
	 * Tapering scaling
	 *     This is intended to be either a constant, uniform or a ParticleParam.
	 *     If a curve is used, 0/1 mapping of source/target... which could be integrated into
	 *     the taper factor itself, and therefore makes no sense.
	*/
	TaperScale: RawDistributionFloat;
	/**
	 * Beam Rendering Variables.
	*/
	RenderGeometry: boolean;
	/**
	 * Render Direct Line
	*/
	RenderDirectLine: boolean;
	/**
	 * Render Lines
	*/
	RenderLines: boolean;
	/**
	 * Render Tessellation
	*/
	RenderTessellation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataBeam2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataBeam2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataBeam2;
	static C(Other: UObject): ParticleModuleTypeDataBeam2;
}

declare class GPUSpriteLocalVectorFieldInfo { 
	/**
	 * Local vector field to apply to this emitter.
	*/
	Field: VectorField;
	/**
	 * Local vector field transform.
	*/
	Transform: Transform;
	/**
	 * Minimum initial rotation.
	*/
	MinInitialRotation: Rotator;
	/**
	 * Maximum initial rotation.
	*/
	MaxInitialRotation: Rotator;
	/**
	 * Local vector field rotation rate.
	*/
	RotationRate: Rotator;
	/**
	 * Local vector field intensity.
	*/
	Intensity: number;
	/**
	 * Local vector field tightness.
	*/
	Tightness: number;
	/**
	 * Ignore Components Transform
	*/
	bIgnoreComponentTransform: boolean;
	/**
	 * Tile vector field in x axis?
	*/
	bTileX: boolean;
	/**
	 * Tile vector field in y axis?
	*/
	bTileY: boolean;
	/**
	 * Tile vector field in z axis?
	*/
	bTileZ: boolean;
}

declare class FloatDistribution { 
	/**
	 * Table
	*/
	Table: DistributionLookupTable;
}

declare class GPUSpriteEmitterInfo { 
	/**
	 * The required module. Needed for now, but should be divorced from the runtime.
	*/
	RequiredModule: ParticleModuleRequired;
	/**
	 * The spawn module. Needed for now, but should be divorced from the runtime.
	*/
	SpawnModule: ParticleModuleSpawn;
	/**
	 * The spawn-per-unit module.
	*/
	SpawnPerUnitModule: ParticleModuleSpawnPerUnit;
	/**
	 * List of spawn modules that must be evaluated at runtime.
	*/
	SpawnModules: ParticleModule[];
	/**
	 * Local vector field info.
	*/
	LocalVectorField: GPUSpriteLocalVectorFieldInfo;
	/**
	 * Per-particle vector field scale.
	*/
	VectorFieldScale: FloatDistribution;
	/**
	 * Per-particle drag coefficient.
	*/
	DragCoefficient: FloatDistribution;
	/**
	 * Point attractor strength over time.
	*/
	PointAttractorStrength: FloatDistribution;
	/**
	 * Damping factor applied to particle collisions.
	*/
	Resilience: FloatDistribution;
	/**
	 * Constant acceleration to apply to particles.
	*/
	ConstantAcceleration: Vector;
	/**
	 * Point attractor position.
	*/
	PointAttractorPosition: Vector;
	/**
	 * Point attractor radius, squared.
	*/
	PointAttractorRadiusSq: number;
	/**
	 * Amount by which to offset particles when they are spawned.
	*/
	OrbitOffsetBase: Vector;
	/**
	 * Orbit Offset Range
	*/
	OrbitOffsetRange: Vector;
	/**
	 * One over the maximum size of a sprite particle.
	*/
	InvMaxSize: Vector2D;
	/**
	 * The inverse scale to apply to rotation rate.
	*/
	InvRotationRateScale: number;
	/**
	 * The maximum lifetime of particles in this emitter.
	*/
	MaxLifetime: number;
	/**
	 * The maximum number of particles expected for this emitter.
	*/
	MaxParticleCount: number;
	/**
	 * The method for aligning the particle based on the camera.
	*/
	ScreenAlignment: EParticleScreenAlignment;
	/**
	 * The method for locking the particles to a particular axis.
	*/
	LockAxisFlag: EParticleAxisLock;
	/**
	 * If true, collisions are enabled for this emitter.
	*/
	bEnableCollision: boolean;
	/**
	 * Collision Mode
	*/
	CollisionMode: EParticleCollisionMode;
	/**
	 * Dynamic color scale from the ColorOverLife module.
	*/
	DynamicColor: RawDistributionVector;
	/**
	 * Dynamic alpha scale from the ColorOverLife module.
	*/
	DynamicAlpha: RawDistributionFloat;
	/**
	 * Dynamic color scale from the ColorScaleOverLife module.
	*/
	DynamicColorScale: RawDistributionVector;
	/**
	 * Dynamic alpha scale from the ColorScaleOverLife module.
	*/
	DynamicAlphaScale: RawDistributionFloat;
}

declare class GPUSpriteResourceData { 
	/**
	 * Quantized color samples.
	*/
	QuantizedColorSamples: Color[];
	/**
	 * Quantized samples for misc curve attributes to be evaluated at runtime.
	*/
	QuantizedMiscSamples: Color[];
	/**
	 * Quantized samples for simulation attributes.
	*/
	QuantizedSimulationAttrSamples: Color[];
	/**
	 * Scale and bias to be applied to the color of sprites.
	*/
	ColorScale: Vector4;
	/**
	 * Color Bias
	*/
	ColorBias: Vector4;
	/**
	 * Scale and bias to be applied to the misc curve.
	*/
	MiscScale: Vector4;
	/**
	 * Misc Bias
	*/
	MiscBias: Vector4;
	/**
	 * Scale and bias to be applied to the simulation attribute curves.
	*/
	SimulationAttrCurveScale: Vector4;
	/**
	 * Simulation Attr Curve Bias
	*/
	SimulationAttrCurveBias: Vector4;
	/**
	 * Size of subimages. X:SubImageCountH Y:SubImageCountV Z:1/SubImageCountH W:1/SubImageCountV
	*/
	SubImageSize: Vector4;
	/**
	 * SizeBySpeed parameters. XY=SpeedScale ZW=MaxSpeedScale.
	*/
	SizeBySpeed: Vector4;
	/**
	 * Constant acceleration to apply to particles.
	*/
	ConstantAcceleration: Vector;
	/**
	 * Offset at which to orbit.
	*/
	OrbitOffsetBase: Vector;
	/**
	 * Orbit Offset Range
	*/
	OrbitOffsetRange: Vector;
	/**
	 * Frequency at which the particle orbits around each axis.
	*/
	OrbitFrequencyBase: Vector;
	/**
	 * Orbit Frequency Range
	*/
	OrbitFrequencyRange: Vector;
	/**
	 * Phase offset of orbit around each axis.
	*/
	OrbitPhaseBase: Vector;
	/**
	 * Orbit Phase Range
	*/
	OrbitPhaseRange: Vector;
	/**
	 * Scale to apply to global vector fields.
	*/
	GlobalVectorFieldScale: number;
	/**
	 * Tightness override value for the global vector fields.
	*/
	GlobalVectorFieldTightness: number;
	/**
	 * Scale to apply to per-particle vector field scale.
	*/
	PerParticleVectorFieldScale: number;
	/**
	 * Bias to apply to per-particle vector field scale.
	*/
	PerParticleVectorFieldBias: number;
	/**
	 * Scale to apply to per-particle drag coefficient.
	*/
	DragCoefficientScale: number;
	/**
	 * Bias to apply to per-particle drag coefficient.
	*/
	DragCoefficientBias: number;
	/**
	 * Scale to apply to per-particle damping factor.
	*/
	ResilienceScale: number;
	/**
	 * Bias to apply to per-particle damping factor.
	*/
	ResilienceBias: number;
	/**
	 * Scale to apply to per-particle size for collision.
	*/
	CollisionRadiusScale: number;
	/**
	 * Bias to apply to per-particle size for collision.
	*/
	CollisionRadiusBias: number;
	/**
	 * Bias applied to relative time upon collision.
	*/
	CollisionTimeBias: number;
	/**
	 * One minus the coefficient of friction applied to particles upon collision.
	*/
	OneMinusFriction: number;
	/**
	 * Scale to apply to per-particle rotation rate.
	*/
	RotationRateScale: number;
	/**
	 * How much to stretch sprites based on camera motion blur.
	*/
	CameraMotionBlurAmount: number;
	/**
	 * Screen alignment for particles.
	*/
	ScreenAlignment: EParticleScreenAlignment;
	/**
	 * The method for locking the particles to a particular axis.
	*/
	LockAxisFlag: EParticleAxisLock;
	/**
	 * Pivot offset in UV space for placing the verts of each particle.
	*/
	PivotOffset: Vector2D;
}

declare class ParticleModuleTypeDataGpu extends ParticleModuleTypeDataBase { 
	/**
	 * Information for runtime simulation.
	*/
	EmitterInfo: GPUSpriteEmitterInfo;
	/**
	 * Data used to initialize runtime resources.
	*/
	ResourceData: GPUSpriteResourceData;
	/**
	 * TEMP: How much to stretch sprites based on camera motion blur.
	*/
	CameraMotionBlurAmount: number;
	/**
	 * When true, all existing partilces are cleared when the emitter is initialized.
	*/
	bClearExistingParticlesOnInit: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataGpu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataGpu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataGpu;
	static C(Other: UObject): ParticleModuleTypeDataGpu;
}

declare type EMeshScreenAlignment = string;
declare type EMeshCameraFacingUpAxis = string;
declare type EMeshCameraFacingOptions = string;
declare class ParticleModuleTypeDataMesh extends ParticleModuleTypeDataBase { 
	/**
	 * The static mesh to render at the particle positions
	*/
	Mesh: StaticMesh;
	/**
	 * If true, has the meshes cast shadows
	*/
	CastShadows: boolean;
	/**
	 * UNUSED (the collision module dictates doing collisions)
	*/
	DoCollisions: boolean;
	/**
	 * The alignment to use on the meshes emitted.
	 * The RequiredModule->ScreenAlignment MUST be set to PSA_TypeSpecific to use.
	 * One of the following:
	 * PSMA_MeshFaceCameraWithRoll
	 *         Face the camera allowing for rotation around the mesh-to-camera FVector
	 *         (amount provided by the standard particle sprite rotation).
	 * PSMA_MeshFaceCameraWithSpin
	 *         Face the camera allowing for the mesh to rotate about the tangential axis.
	 * PSMA_MeshFaceCameraWithLockedAxis
	 *         Face the camera while maintaining the up FVector as the locked direction.
	*/
	MeshAlignment: EMeshScreenAlignment;
	/**
	 * If true, use the emitter material when rendering rather than the one applied
	 * to the static mesh model.
	*/
	bOverrideMaterial: boolean;
	/**
	 * deprecated properties for initial orientation
	*/
	Pitch: number;
	/**
	 * Roll
	*/
	Roll: number;
	/**
	 * Yaw
	*/
	Yaw: number;
	/**
	 * The 'pre' rotation pitch (in degrees) to apply to the static mesh used.
	*/
	RollPitchYawRange: RawDistributionVector;
	/**
	 * The axis to lock the mesh on. This overrides TypeSpecific mesh alignment as well as the LockAxis module.
	 *         EPAL_NONE                -      No locking to an axis.
	 *         EPAL_X                   -      Lock the mesh X-axis facing towards +X.
	 *         EPAL_Y                   -      Lock the mesh X-axis facing towards +Y.
	 *         EPAL_Z                   -      Lock the mesh X-axis facing towards +Z.
	 *         EPAL_NEGATIVE_X  -      Lock the mesh X-axis facing towards -X.
	 *         EPAL_NEGATIVE_Y  -      Lock the mesh X-axis facing towards -Y.
	 *         EPAL_NEGATIVE_Z  -      Lock the mesh X-axis facing towards -Z.
	 *         EPAL_ROTATE_X    -      Ignored for mesh emitters. Treated as EPAL_NONE.
	 *         EPAL_ROTATE_Y    -      Ignored for mesh emitters. Treated as EPAL_NONE.
	 *         EPAL_ROTATE_Z    -      Ignored for mesh emitters. Treated as EPAL_NONE.
	*/
	AxisLockOption: EParticleAxisLock;
	/**
	 * If true, then point the X-axis of the mesh towards the camera.
	 * When set, AxisLockOption as well as all other locked axis/screen alignment settings are ignored.
	*/
	bCameraFacing: boolean;
	/**
	 * The axis of the mesh to point up when camera facing the X-axis.
	 *         CameraFacing_NoneUP                     No attempt to face an axis up or down.
	 *         CameraFacing_ZUp                        Z-axis of the mesh should attempt to point up.
	 *         CameraFacing_NegativeZUp        Z-axis of the mesh should attempt to point down.
	 *         CameraFacing_YUp                        Y-axis of the mesh should attempt to point up.
	 *         CameraFacing_NegativeYUp        Y-axis of the mesh should attempt to point down.
	*/
	CameraFacingUpAxisOption: EMeshCameraFacingUpAxis;
	/**
	 * The camera facing option to use:
	 * All camera facing options without locked axis assume X-axis will be facing the camera.
	 *         XAxisFacing_NoUp                                - X-axis camera facing, no attempt to face an axis up or down.
	 *         XAxisFacing_ZUp                                 - X-axis camera facing, Z-axis of the mesh should attempt to point up.
	 *         XAxisFacing_NegativeZUp                 - X-axis camera facing, Z-axis of the mesh should attempt to point down.
	 *         XAxisFacing_YUp                                 - X-axis camera facing, Y-axis of the mesh should attempt to point up.
	 *         XAxisFacing_NegativeYUp                 - X-axis camera facing, Y-axis of the mesh should attempt to point down.
	 * All axis-locked camera facing options assume the AxisLockOption is set. EPAL_NONE will be treated as EPAL_X.
	 *         LockedAxis_ZAxisFacing                  - X-axis locked on AxisLockOption axis, rotate Z-axis of the mesh to face towards camera.
	 *         LockedAxis_NegativeZAxisFacing  - X-axis locked on AxisLockOption axis, rotate Z-axis of the mesh to face away from camera.
	 *         LockedAxis_YAxisFacing                  - X-axis locked on AxisLockOption axis, rotate Y-axis of the mesh to face towards camera.
	 *         LockedAxis_NegativeYAxisFacing  - X-axis locked on AxisLockOption axis, rotate Y-axis of the mesh to face away from camera.
	 * All velocity-aligned options do NOT require the ScreenAlignment be set to PSA_Velocity.
	 * Doing so will result in additional work being performed... (it will orient the mesh twice).
	 *         VelocityAligned_ZAxisFacing         - X-axis aligned to the velocity, rotate the Z-axis of the mesh to face towards camera.
	 *         VelocityAligned_NegativeZAxisFacing - X-axis aligned to the velocity, rotate the Z-axis of the mesh to face away from camera.
	 *         VelocityAligned_YAxisFacing         - X-axis aligned to the velocity, rotate the Y-axis of the mesh to face towards camera.
	 *         VelocityAligned_NegativeYAxisFacing - X-axis aligned to the velocity, rotate the Y-axis of the mesh to face away from camera.
	*/
	CameraFacingOption: EMeshCameraFacingOptions;
	/**
	 * If true, apply 'sprite' particle rotation about the orientation axis (direction mesh is pointing).
	 * If false, apply 'sprite' particle rotation about the camera facing axis.
	*/
	bApplyParticleRotationAsSpin: boolean;
	/**
	 * If true, all camera facing options will point the mesh against the camera's view direction rather than pointing at the cameras location.
	 * If false, the camera facing will point to the cameras position as normal.
	*/
	bFaceCameraDirectionRatherThanPosition: boolean;
	/**
	 * If true, all collisions for mesh particle on this emitter will take the particle size into account.
	 * If false, particle size will be ignored in collision checks.
	*/
	bCollisionsConsiderPartilceSize: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataMesh;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataMesh;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataMesh;
	static C(Other: UObject): ParticleModuleTypeDataMesh;
}

declare type ETrailsRenderAxisOption = string;
declare class ParticleModuleTypeDataRibbon extends ParticleModuleTypeDataBase { 
	/**
	 * The maximum amount to tessellate between two particles of the trail.
	 * Depending on the distance between the particles and the tangent change, the
	 * system will select a number of tessellation points
	 *         [0..MaxTessellationBetweenParticles]
	*/
	MaxTessellationBetweenParticles: number;
	/**
	 * The number of sheets to render for the trail.
	*/
	SheetsPerTrail: number;
	/**
	 * The number of live trails
	*/
	MaxTrailCount: number;
	/**
	 * Max particles per trail
	*/
	MaxParticleInTrailCount: number;
	/**
	 * If true, when the system is deactivated, mark trails as dead.
	 * This means they will still render, but will not have more particles
	 * added to them, even if the system re-activates...
	*/
	bDeadTrailsOnDeactivate: boolean;
	/**
	 * If true, when the source of a trail is 'lost' (ie, the source particle
	 * dies), mark the current trail as dead.
	*/
	bDeadTrailsOnSourceLoss: boolean;
	/**
	 * If true, do not join the trail to the source position
	*/
	bClipSourceSegement: boolean;
	/**
	 * If true, recalculate the previous tangent when a new particle is spawned
	*/
	bEnablePreviousTangentRecalculation: boolean;
	/**
	 * If true, recalculate tangents every frame to allow velocity/acceleration to be applied
	*/
	bTangentRecalculationEveryFrame: boolean;
	/**
	 * If true, ribbon will spawn a particle when it first starts moving
	*/
	bSpawnInitialParticle: boolean;
	/**
	 * The 'render' axis for the trail (what axis the trail is stretched out on)
	 *         Trails_CameraUp - Traditional camera-facing trail.
	 *         Trails_SourceUp - Use the up axis of the source for each spawned particle.
	 *         Trails_WorldUp  - Use the world up axis.
	*/
	RenderAxis: ETrailsRenderAxisOption;
	/**
	 * The tangent scalar for spawning.
	 * Angles between tangent A and B are mapped to [0.0f .. 1.0f]
	 * This is then multiplied by TangentTessellationScalar to give the number of particles to spawn
	*/
	TangentSpawningScalar: number;
	/**
	 * If true, render the trail geometry (this should typically be on)
	*/
	bRenderGeometry: boolean;
	/**
	 * If true, render stars at each spawned particle point along the trail
	*/
	bRenderSpawnPoints: boolean;
	/**
	 * If true, render a line showing the tangent at each spawned particle point along the trail
	*/
	bRenderTangents: boolean;
	/**
	 * If true, render the tessellated path between spawned particles
	*/
	bRenderTessellation: boolean;
	/**
	 * The (estimated) covered distance to tile the 2nd UV set at.
	 * If 0.0, a second UV set will not be passed in.
	*/
	TilingDistance: number;
	/**
	 * The distance step size for tessellation.
	 * # Tessellation Points = TruncToInt((Distance Between Spawned Particles) / DistanceTessellationStepSize))
	*/
	DistanceTessellationStepSize: number;
	/**
	 * If this flag is enabled, the system will scale the number of interpolated vertices
	 * based on the difference in the tangents of neighboring particles.
	 * Each pair of neighboring particles will compute the following CheckTangent value:
	 *         CheckTangent = ((ParticleA Tangent DOT ParticleB Tangent) - 1.0f) * 0.5f
	 * If CheckTangent is LESS THAN 0.5, then the DistanceTessellationStepSize will be
	 * scaled based on the result. This will map so that from parallel to orthogonal
	 * (0..90 degrees) will scale from [0..1]. Anything greater than 90 degrees will clamp
	 * at a scale of 1.
	*/
	bEnableTangentDiffInterpScale: boolean;
	/**
	 * The tangent scalar for tessellation.
	 * Angles between tangent A and B are mapped to [0.0f .. 1.0f]
	 * This is then multiplied by TangentTessellationScalar to give the number of points to tessellate
	*/
	TangentTessellationScalar: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataRibbon;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataRibbon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataRibbon;
	static C(Other: UObject): ParticleModuleTypeDataRibbon;
}

declare class ParticleModuleVectorFieldBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldBase;
	static C(Other: UObject): ParticleModuleVectorFieldBase;
}

declare class ParticleModuleVectorFieldGlobal extends ParticleModuleVectorFieldBase { 
	/**
	 * Property override value for global vector field tightness.
	*/
	bOverrideGlobalVectorFieldTightness: boolean;
	/**
	 * Global vector field scale.
	*/
	GlobalVectorFieldScale: number;
	/**
	 * Global vector field tightness override.
	*/
	GlobalVectorFieldTightness: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldGlobal;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldGlobal;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldGlobal;
	static C(Other: UObject): ParticleModuleVectorFieldGlobal;
}

declare class ParticleModuleVectorFieldLocal extends ParticleModuleVectorFieldBase { 
	/**
	 * Vector field asset to use.
	*/
	VectorField: VectorField;
	/**
	 * Translation of the vector field relative to the emitter.
	*/
	RelativeTranslation: Vector;
	/**
	 * Rotation of the vector field relative to the emitter.
	*/
	RelativeRotation: Rotator;
	/**
	 * Scale of the vector field relative to the emitter.
	*/
	RelativeScale3D: Vector;
	/**
	 * Intensity of the local vector field.
	*/
	Intensity: number;
	/**
	 * Tightness tweak value: 0: Force 1: Velocity.
	*/
	Tightness: number;
	/**
	 * Ignore component transform.
	*/
	bIgnoreComponentTransform: boolean;
	/**
	 * Tile vector field in x axis?
	*/
	bTileX: boolean;
	/**
	 * Tile vector field in y axis?
	*/
	bTileY: boolean;
	/**
	 * Tile vector field in z axis?
	*/
	bTileZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldLocal;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldLocal;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldLocal;
	static C(Other: UObject): ParticleModuleVectorFieldLocal;
}

declare class ParticleModuleVectorFieldRotation extends ParticleModuleVectorFieldBase { 
	/**
	 * Minimum initial rotation applied to the local vector field.
	*/
	MinInitialRotation: Vector;
	/**
	 * Maximum initial rotation applied to the local vector field.
	*/
	MaxInitialRotation: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldRotation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotation;
	static C(Other: UObject): ParticleModuleVectorFieldRotation;
}

declare class ParticleModuleVectorFieldRotationRate extends ParticleModuleVectorFieldBase { 
	/**
	 * Constant rotation rate applied to the local vector field.
	*/
	RotationRate: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldRotationRate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotationRate;
	static C(Other: UObject): ParticleModuleVectorFieldRotationRate;
}

declare class ParticleModuleVectorFieldScale extends ParticleModuleVectorFieldBase { 
	/**
	 * Per-particle vector field scale. Evaluated using emitter time.
	*/
	VectorFieldScale: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScale;
	static C(Other: UObject): ParticleModuleVectorFieldScale;
}

declare class ParticleModuleVectorFieldScaleOverLife extends ParticleModuleVectorFieldBase { 
	/**
	 * Per-particle vector field scale. Evaluated using particle relative time.
	*/
	VectorFieldScaleOverLife: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScaleOverLife;
	static C(Other: UObject): ParticleModuleVectorFieldScaleOverLife;
}

declare class ParticleModuleVelocityBase extends ParticleModule { 
	/**
	 * If true, then treat the velocity as world-space defined.
	 * NOTE: LocalSpace emitters that are moving will see strange results...
	*/
	bInWorldSpace: boolean;
	/**
	 * If true, then apply the particle system components scale to the velocity value.
	*/
	bApplyOwnerScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityBase;
	static C(Other: UObject): ParticleModuleVelocityBase;
}

declare class ParticleModuleVelocity extends ParticleModuleVelocityBase { 
	/**
	 * The velocity to apply to a particle when it is spawned.
	 * Value is retrieved using the EmitterTime of the emitter.
	*/
	StartVelocity: RawDistributionVector;
	/**
	 * The velocity to apply to a particle along its radial direction.
	 * Direction is determined by subtracting the location of the emitter from the particle location at spawn.
	 * Value is retrieved using the EmitterTime of the emitter.
	*/
	StartVelocityRadial: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocity;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity;
	static C(Other: UObject): ParticleModuleVelocity;
}

declare class ParticleModuleVelocity_Seeded extends ParticleModuleVelocity { 
	/**
	 * The random seed(s) to use for looking up values in StartLocation
	*/
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocity_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocity_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity_Seeded;
	static C(Other: UObject): ParticleModuleVelocity_Seeded;
}

declare class ParticleModuleVelocityCone extends ParticleModuleVelocityBase { 
	/**
	 * The Min value represents the inner cone angle value and the Max value represents the outer cone angle value.
	*/
	Angle: RawDistributionFloat;
	/**
	 * The initial velocity of the particles.
	*/
	Velocity: RawDistributionFloat;
	/**
	 * The direction FVector of the cone.
	*/
	Direction: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityCone;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityCone;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityCone;
	static C(Other: UObject): ParticleModuleVelocityCone;
}

declare class ParticleModuleVelocityInheritParent extends ParticleModuleVelocityBase { 
	/**
	 * The scale to apply tot he parent velocity prior to adding it to the particle velocity during spawn.
	 * Value is retrieved using the EmitterTime of the emitter.
	*/
	Scale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityInheritParent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityInheritParent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityInheritParent;
	static C(Other: UObject): ParticleModuleVelocityInheritParent;
}

declare class ParticleModuleVelocityOverLifetime extends ParticleModuleVelocityBase { 
	/**
	 * The scaling  value applied to the velocity.
	 * Value is retrieved using the RelativeTime of the particle.
	*/
	VelOverLife: RawDistributionVector;
	/**
	 * If true, the velocity will be SET to the value from the above dist.
	 * If false, the velocity will be scaled by the above dist.
	*/
	Absolute: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityOverLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityOverLifetime;
	static C(Other: UObject): ParticleModuleVelocityOverLifetime;
}

declare class DemoPendingNetGame extends PendingNetGame { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DemoPendingNetGame;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DemoPendingNetGame;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DemoPendingNetGame;
	static C(Other: UObject): DemoPendingNetGame;
}

declare type EPlatformInterfaceDataType = string;
declare class PlatformInterfaceData { 
	/**
	 * An optional tag for this data
	*/
	DataName: string;
	/**
	 * Specifies which value is valid for this structure
	*/
	Type: EPlatformInterfaceDataType;
	/**
	 * Various typed result values
	*/
	IntValue: number;
	/**
	 * Float Value
	*/
	FloatValue: number;
	/**
	 * String Value
	*/
	StringValue: string;
	/**
	 * Object Value
	*/
	ObjectValue: UObject;
}

declare class PlatformInterfaceDelegateResult { 
	/**
	 * This is always usable, no matter the type
	*/
	bSuccessful: boolean;
	/**
	 * The result actual data
	*/
	Data: PlatformInterfaceData;
}

declare class DelegateArray { 
	/**
	 * Delegates
	*/
	Delegates: UnrealEngineDelegate<(Result: PlatformInterfaceDelegateResult) => void>[];
}

declare class PlatformInterfaceBase extends UObject { 
	/**
	 * Array of delegate arrays. Only add and remove via helper functions, and call via the helper delegate call function
	*/
	AllDelegates: DelegateArray[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformInterfaceBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlatformInterfaceBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceBase;
	static C(Other: UObject): PlatformInterfaceBase;
}

declare class CloudStorageBase extends PlatformInterfaceBase { 
	/**
	 * When using local storage (aka "cloud emulation"), this maintains a list of the file paths.
	*/
	LocalCloudFiles: string[];
	/**
	 * If true, delegate callbacks should be skipped.
	*/
	bSuppressDelegateCalls: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CloudStorageBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CloudStorageBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CloudStorageBase;
	static C(Other: UObject): CloudStorageBase;
}

declare class InGameAdManager extends PlatformInterfaceBase { 
	/**
	 * If true, the game will pause when the user clicks on the ad, which could take over the screen
	*/
	bShouldPauseWhileAdOpen: boolean;
	/**
	 * @todo document
	*/
	ClickedBannerDelegates: UnrealEngineDelegate<() => void>[];
	/**
	 * @todo document
	*/
	ClosedAdDelegates: UnrealEngineDelegate<() => void>[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InGameAdManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InGameAdManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InGameAdManager;
	static C(Other: UObject): InGameAdManager;
}

declare class PurchaseInfo { 
	/**
	 * Unique identifier for the purchase
	*/
	Identifier: string;
	/**
	 * Name displayable to the user
	*/
	DisplayName: string;
	/**
	 * Description displayable to the user
	*/
	DisplayDescription: string;
	/**
	 * Price displayable to the user
	*/
	DisplayPrice: string;
}

declare class MicroTransactionBase extends PlatformInterfaceBase { 
	/**
	 * The list of products available to purchase, filled out by the time a MTD_PurchaseQueryComplete is fired
	*/
	AvailableProducts: PurchaseInfo[];
	/**
	 * In case of errors, this will describe the most recent error
	*/
	LastError: string;
	/**
	 * In case of errors, this will describe possible solutions (if there are any)
	*/
	LastErrorSolution: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MicroTransactionBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MicroTransactionBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MicroTransactionBase;
	static C(Other: UObject): MicroTransactionBase;
}

declare type ETwitterRequestMethod = string;
declare class TwitterIntegrationBase extends PlatformInterfaceBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TwitterIntegrationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TwitterIntegrationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitterIntegrationBase;
	static C(Other: UObject): TwitterIntegrationBase;
	/**
	 * Kicks off a generic twitter request
	 * @param URL The URL for the twitter request
	 * @param KeysAndValues The extra parameters to pass to the request (request specific). Separate keys and values: < "key1", "value1", "key2", "value2" >
	 * @param Method The method for this request (get, post, delete)
	 * @param AccountIndex A user index if an account is needed, or -1 if an account isn't needed for the request
	 * @return true the request was sent off, and a TID_RequestComplete
	*/
	TwitterRequest(URL: string,ParamKeysAndValues: string[],RequestMethod: ETwitterRequestMethod,AccountIndex: number): boolean;
	/**
	 * Kicks off a tweet, using the platform to show the UI. If this returns false, or you are on a platform that doesn't support the UI,
	 * you can use the TwitterRequest method to perform a manual tweet using the Twitter API
	 * @param InitialMessage [optional] Initial message to show
	 * @param URL [optional] URL to attach to the tweet
	 * @param Picture [optional] Name of a picture (stored locally, platform subclass will do the searching for it) to add to the tweet
	 * @return true if a UI was displayed for the user to interact with, and a TID_TweetUIComplete will be sent
	*/
	ShowTweetUI(InitialMessage: string,URL: string,Picture: string): boolean;
	/**
	 * Perform any needed initialization
	*/
	Init(): void;
	/**
	 * @return The number of accounts that were authorized
	*/
	GetNumAccounts(): number;
	/**
	 * @return the display name of the given Twitter account
	*/
	GetAccountName(AccountIndex: number): string;
	/**
	 * @return true if the user is allowed to use the Tweet UI
	*/
	CanShowTweetUI(): boolean;
	/**
	 * Starts the process of authorizing the local user(s). When TID_AuthorizeComplete is called, then GetNumAccounts()
	 * will return a valid number of accounts
	 * @return true if the authorization process started, and TID_AuthorizeComplete delegates will be called
	*/
	AuthorizeAccounts(): boolean;
}

declare class PlatformInterfaceWebResponse extends UObject { 
	/**
	 * This holds the original requested URL
	*/
	OriginalURL: string;
	/**
	 * Result code from the response (200=OK, 404=Not Found, etc)
	*/
	ResponseCode: number;
	/**
	 * A user-specified tag specified with the request
	*/
	Tag: number;
	/**
	 * For string results, this is the response
	*/
	StringResponse: string;
	/**
	 * For non-string results, this is the response
	*/
	BinaryResponse: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformInterfaceWebResponse;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlatformInterfaceWebResponse;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceWebResponse;
	static C(Other: UObject): PlatformInterfaceWebResponse;
	/**
	 * @return the number of header/value pairs
	*/
	GetNumHeaders(): number;
	/**
	 * @return the value for the given header (or "" if no matching header)
	*/
	GetHeaderValue(HeaderName: string): string;
	/**
	 * Retrieve the header and value for the given index of header/value pair
	*/
	GetHeader(HeaderIndex: number,Header?: string,Value?: string): {Header: string, Value: string};
}

declare class DemoNetConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DemoNetConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DemoNetConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DemoNetConnection;
	static C(Other: UObject): DemoNetConnection;
}

declare class Polys extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): Polys;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): Polys;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Polys;
	static C(Other: UObject): Polys;
}

declare class USelection extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): USelection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): USelection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): USelection;
	static C(Other: UObject): USelection;
}

declare class SoundGroup { 
	/**
	 * The sound group enumeration we are setting values for
	*/
	SoundGroup: ESoundGroup;
	/**
	 * An override display name for custom game sound groups
	*/
	DisplayName: string;
	/**
	 * Whether sounds in this group should always decompress on load
	*/
	bAlwaysDecompressOnLoad: boolean;
	/**
	 * Sound duration in seconds below which sounds are entirely expanded to PCM at load time
	 * Disregarded if bAlwaysDecompressOnLoad is true
	*/
	DecompressedDuration: number;
}

declare class SoundGroups extends UObject { 
	/**
	 * The ini editable array of profiles
	*/
	SoundGroupProfiles: SoundGroup[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundGroups;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundGroups;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundGroups;
	static C(Other: UObject): SoundGroups;
}

declare class SoundWaveProcedural extends SoundWave { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundWaveProcedural;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundWaveProcedural;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundWaveProcedural;
	static C(Other: UObject): SoundWaveProcedural;
}

declare class SoundNodeAssetReferencer extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeAssetReferencer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeAssetReferencer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAssetReferencer;
	static C(Other: UObject): SoundNodeAssetReferencer;
}

declare class SoundNodeWavePlayer extends SoundNodeAssetReferencer { 
	/**
	 * Sound Wave Asset Ptr
	*/
	SoundWaveAssetPtr: any;
	/**
	 * Sound Wave
	*/
	SoundWave: SoundWave;
	/**
	 * Looping
	*/
	bLooping: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeWavePlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeWavePlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWavePlayer;
	static C(Other: UObject): SoundNodeWavePlayer;
}

declare class SoundNodeAttenuation extends SoundNode { 
	/**
	 * Attenuation Settings
	*/
	AttenuationSettings: SoundAttenuation;
	/**
	 * Attenuation Overrides
	*/
	AttenuationOverrides: AttenuationSettings;
	/**
	 * Override Attenuation
	*/
	bOverrideAttenuation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeAttenuation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeAttenuation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAttenuation;
	static C(Other: UObject): SoundNodeAttenuation;
}

declare class SoundNodeBranch extends SoundNode { 
	/**
	 * The name of the boolean parameter to use to determine which branch we should take
	*/
	BoolParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeBranch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeBranch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeBranch;
	static C(Other: UObject): SoundNodeBranch;
}

declare class SoundNodeConcatenator extends SoundNode { 
	/**
	 * Volume multiplier for each input.
	*/
	InputVolume: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeConcatenator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeConcatenator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeConcatenator;
	static C(Other: UObject): SoundNodeConcatenator;
}

declare class SoundNodeDelay extends SoundNode { 
	/**
	 * The lower bound of delay time in seconds.
	*/
	DelayMin: number;
	/**
	 * The upper bound of delay time in seconds.
	*/
	DelayMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDelay;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDelay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDelay;
	static C(Other: UObject): SoundNodeDelay;
}

declare class DialogueWaveParameter { 
	/**
	 * The dialogue wave to play.
	*/
	DialogueWave: DialogueWave;
	/**
	 * The context to use for the dialogue wave.
	*/
	Context: DialogueContext;
}

declare class SoundNodeDialoguePlayer extends SoundNode { 
	/**
	 * Dialogue Wave Parameter
	*/
	DialogueWaveParameter: DialogueWaveParameter;
	/**
	 * Whether the dialogue line should be played looping
	*/
	bLooping: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDialoguePlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDialoguePlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDialoguePlayer;
	static C(Other: UObject): SoundNodeDialoguePlayer;
}

declare class DistanceDatum { 
	/**
	 * The FadeInDistance at which to start hearing this sound.
	 *        * If you want to hear the sound up close then setting this to 0 might be a good option.
	*/
	FadeInDistanceStart: number;
	/**
	 * The distance at which this sound has faded in completely.
	*/
	FadeInDistanceEnd: number;
	/**
	 * The distance at which this sound starts fading out.
	*/
	FadeOutDistanceStart: number;
	/**
	 * The distance at which this sound is no longer audible.
	*/
	FadeOutDistanceEnd: number;
	/**
	 * The volume for which this Input should be played.
	*/
	Volume: number;
}

declare class SoundNodeDistanceCrossFade extends SoundNode { 
	/**
	 * Each input needs to have the correct data filled in so the SoundNodeDistanceCrossFade is able
	 * to determine which sounds to play
	*/
	CrossFadeInput: DistanceDatum[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDistanceCrossFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDistanceCrossFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDistanceCrossFade;
	static C(Other: UObject): SoundNodeDistanceCrossFade;
}

declare class SoundNodeParamCrossFade extends SoundNodeDistanceCrossFade { 
	/**
	 * Parameter controlling cross fades.
	*/
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeParamCrossFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeParamCrossFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeParamCrossFade;
	static C(Other: UObject): SoundNodeParamCrossFade;
}

declare class SoundNodeDoppler extends SoundNode { 
	/**
	 * How much to scale the doppler shift (1.0 is normal).
	*/
	DopplerIntensity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDoppler;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDoppler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDoppler;
	static C(Other: UObject): SoundNodeDoppler;
}

declare class SoundNodeEnveloper extends SoundNode { 
	/**
	 * The time in seconds where the envelope's loop begins.
	*/
	LoopStart: number;
	/**
	 * The time in seconds where the envelope's loop ends.
	*/
	LoopEnd: number;
	/**
	 * The time in seconds it takes the evelope to fade out after the last loop is completed.
	*/
	DurationAfterLoop: number;
	/**
	 * The number of times the envelope should loop if looping is enabled and the envelope is not set to loop indefinitely.
	*/
	LoopCount: number;
	/**
	 * If enabled, the envelope will continue to loop indefenitely regardless of the Loop Count value.
	*/
	bLoopIndefinitely: boolean;
	/**
	 * If enabled, the envelope will loop using the loop settings.
	*/
	bLoop: boolean;
	/**
	 * Volume Interp Curve
	*/
	VolumeInterpCurve: DistributionFloatConstantCurve;
	/**
	 * Pitch Interp Curve
	*/
	PitchInterpCurve: DistributionFloatConstantCurve;
	/**
	 * The distribution defining the volume envelope.
	*/
	VolumeCurve: RuntimeFloatCurve;
	/**
	 * The distribution defining the pitch envelope.
	*/
	PitchCurve: RuntimeFloatCurve;
	/**
	 * The lower bound of pitch (1.0 is no change)
	*/
	PitchMin: number;
	/**
	 * The upper bound of pitch (1.0 is no change)
	*/
	PitchMax: number;
	/**
	 * The lower bound of volume (1.0 is no change)
	*/
	VolumeMin: number;
	/**
	 * The upper bound of volume (1.0 is no change)
	*/
	VolumeMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeEnveloper;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeEnveloper;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeEnveloper;
	static C(Other: UObject): SoundNodeEnveloper;
}

declare class SoundNodeGroupControl extends SoundNode { 
	/**
	 * How many active sounds are allowed for each group
	*/
	GroupSizes: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeGroupControl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeGroupControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeGroupControl;
	static C(Other: UObject): SoundNodeGroupControl;
}

declare class SoundNodeLooping extends SoundNode { 
	/**
	 * The amount of times to loop
	*/
	LoopCount: number;
	/**
	 * If enabled, the node will continue to loop indefinitely regardless of the Loop Count value.
	*/
	bLoopIndefinitely: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeLooping;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeLooping;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeLooping;
	static C(Other: UObject): SoundNodeLooping;
}

declare class SoundNodeMature extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeMature;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeMature;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMature;
	static C(Other: UObject): SoundNodeMature;
}

declare class SoundNodeMixer extends SoundNode { 
	/**
	 * InputVolume - 각 입력에 대한 볼륨입니다. 자동으로 크기 조정됩니다.
	*/
	InputVolume: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeMixer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeMixer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMixer;
	static C(Other: UObject): SoundNodeMixer;
}

declare class SoundNodeModulator extends SoundNode { 
	/**
	 * The lower bound of pitch (1.0 is no change).
	*/
	PitchMin: number;
	/**
	 * The upper bound of pitch (1.0 is no change).
	*/
	PitchMax: number;
	/**
	 * The lower bound of volume (1.0 is no change).
	*/
	VolumeMin: number;
	/**
	 * The upper bound of volume (1.0 is no change).
	*/
	VolumeMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeModulator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeModulator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulator;
	static C(Other: UObject): SoundNodeModulator;
}

declare type ModulationParamMode = string;
declare class ModulatorContinuousParams { 
	/**
	 * The name of the sound instance parameter that specifies the current value.
	*/
	ParameterName: string;
	/**
	 * The default value to be used if the parameter is not found.
	*/
	Default: number;
	/**
	 * The minimum input value. Values will be clamped to the [MinInput, MaxInput] range.
	*/
	MinInput: number;
	/**
	 * The maximum input value. Values will be clamped to the [MinInput, MaxInput] range.
	*/
	MaxInput: number;
	/**
	 * The minimum output value. The input value will be scaled from the range [MinInput, MaxInput] to [MinOut, MaxOutput]
	*/
	MinOutput: number;
	/**
	 * The maximum output value. The input value will be scaled from the range [MinInput, MaxInput] to [MinOut, MaxOutput]
	*/
	MaxOutput: number;
	/**
	 * The mode with which to treat the input value
	*/
	ParamMode: ModulationParamMode;
}

declare class SoundNodeModulatorContinuous extends SoundNode { 
	/**
	 * Pitch Modulation Params
	*/
	PitchModulationParams: ModulatorContinuousParams;
	/**
	 * Volume Modulation Params
	*/
	VolumeModulationParams: ModulatorContinuousParams;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeModulatorContinuous;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeModulatorContinuous;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulatorContinuous;
	static C(Other: UObject): SoundNodeModulatorContinuous;
}

declare class SoundNodeOscillator extends SoundNode { 
	/**
	 * Whether to oscillate volume.
	*/
	bModulateVolume: boolean;
	/**
	 * Whether to oscillate pitch.
	*/
	bModulatePitch: boolean;
	/**
	 * An amplitude of 0.25 would oscillate between 0.75 and 1.25.
	*/
	AmplitudeMin: number;
	/**
	 * An amplitude of 0.25 would oscillate between 0.75 and 1.25.
	*/
	AmplitudeMax: number;
	/**
	 * A frequency of 20 would oscillate at 10Hz.
	*/
	FrequencyMin: number;
	/**
	 * A frequency of 20 would oscillate at 10Hz.
	*/
	FrequencyMax: number;
	/**
	 * Offset into the sine wave. Value modded by 2 * PI.
	*/
	OffsetMin: number;
	/**
	 * Offset into the sine wave. Value modded by 2 * PI.
	*/
	OffsetMax: number;
	/**
	 * A center of 0.5 would oscillate around 0.5.
	*/
	CenterMin: number;
	/**
	 * A center of 0.5 would oscillate around 0.5.
	*/
	CenterMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeOscillator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeOscillator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeOscillator;
	static C(Other: UObject): SoundNodeOscillator;
}

declare class SoundNodeQualityLevel extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeQualityLevel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeQualityLevel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeQualityLevel;
	static C(Other: UObject): SoundNodeQualityLevel;
}

declare class SoundNodeRandom extends SoundNode { 
	/**
	 * Weights
	*/
	Weights: number[];
	/**
	 * If greater than 0, then upon each level load such a number of inputs will be randomly selected
	 * and the rest will be removed. This can be used to cut down the memory usage of large randomizing
	 * cues.
	*/
	PreselectAtLevelLoad: number;
	/**
	 * Determines whether or not this SoundNodeRandom should randomize with or without
	 * replacement.
	 * WithoutReplacement means that only nodes left will be valid for
	 * selection.  So with that, you are guarenteed to have only one occurrence of the
	 * sound played until all of the other sounds in the set have all been played.
	 * WithReplacement means that a node will be chosen and then placed back into the set.
	 * So one could play the same sound over and over if the probabilities don't go your way :-)
	*/
	bRandomizeWithoutReplacement: boolean;
	/**
	 * Internal state of which sounds have been played.  This is only used at runtime
	 * to keep track of which sounds have been played
	*/
	HasBeenUsed: boolean[];
	/**
	 * Counter var so we don't have to count all of the used sounds each time we choose a sound *
	*/
	NumRandomUsed: number;
	/**
	 * Editor only list of nodes hidden to duplicate behavior of PreselectAtLevelLoad
	*/
	PIEHiddenNodes: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeRandom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeRandom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeRandom;
	static C(Other: UObject): SoundNodeRandom;
}

declare class SoundNodeSoundClass extends SoundNode { 
	/**
	 * Sound Class Override
	*/
	SoundClassOverride: SoundClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeSoundClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeSoundClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSoundClass;
	static C(Other: UObject): SoundNodeSoundClass;
}

declare class SoundNodeSwitch extends SoundNode { 
	/**
	 * The name of the integer parameter to use to determine which branch we should take
	*/
	IntParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeSwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSwitch;
	static C(Other: UObject): SoundNodeSwitch;
}

declare class SoundNodeWaveParam extends SoundNode { 
	/**
	 * The name of the wave parameter to use to look up the SoundWave we should play
	*/
	WaveParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeWaveParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeWaveParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWaveParam;
	static C(Other: UObject): SoundNodeWaveParam;
}

declare class TextPropertyTestObject extends UObject { 
	/**
	 * Defaulted Text
	*/
	DefaultedText: string;
	/**
	 * Undefaulted Text
	*/
	UndefaultedText: string;
	/**
	 * Transient Text
	*/
	TransientText: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextPropertyTestObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextPropertyTestObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextPropertyTestObject;
	static C(Other: UObject): TextPropertyTestObject;
}

declare class LightMapTexture2D extends Texture2D { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightMapTexture2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightMapTexture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMapTexture2D;
	static C(Other: UObject): LightMapTexture2D;
}

declare type EShadowMapFlags = string;
declare class ShadowMapTexture2D extends Texture2D { 
	/**
	 * Bit-field with shadowmap flags.
	*/
	ShadowmapFlags: EShadowMapFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShadowMapTexture2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ShadowMapTexture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShadowMapTexture2D;
	static C(Other: UObject): ShadowMapTexture2D;
}

declare class CanvasRenderTarget2D extends TextureRenderTarget2D { 
	/**
	 * Called when this Canvas Render Target is asked to update its texture resource.
	*/
	OnCanvasRenderTargetUpdate: UnrealEngineMulticastDelegate<(Canvas: Canvas, Width: number, Height: number) => void>;
	/**
	 * The world this render target will be used with
	*/
	World: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CanvasRenderTarget2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CanvasRenderTarget2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CanvasRenderTarget2D;
	static C(Other: UObject): CanvasRenderTarget2D;
	/**
	 * Updates the the canvas render target texture's resource. This is where the render target will create or
	 * find a canvas object to use.  It also calls UpdateResourceImmediate() to clear the render target texture
	 * from the deferred rendering list, to stop the texture from being cleared the next frame. From there it
	 * will ask the rendering thread to set up the RHI viewport. The canvas is then set up for rendering and
	 * then the user's update delegate is called.  The canvas is then flushed and the RHI resolves the
	 * texture to make it available for rendering.
	*/
	UpdateResource(): void;
	/**
	 * Allows a Blueprint to implement how this Canvas Render Target 2D should be updated.
	 * @param       Canvas                          Canvas object that can be used to paint to the render target
	 * @param       Width                           Width of the render target.
	 * @param       Height                          Height of the render target.
	*/
	ReceiveUpdate(Canvas: Canvas,Width: number,Height: number): void;
	/**
	 * Gets a specific render target's size from the global map of canvas render targets.
	 * @param       Width   Output variable for the render target's width
	 * @param       Height  Output variable for the render target's height
	*/
	GetSize(Width?: number,Height?: number): {Width: number, Height: number};
	/**
	 * Creates a new canvas render target and initializes it to the specified dimensions
	 * @param       WorldContextObject      The world where this render target will be rendered for
	 * @param       CanvasRenderTarget2DClass       Class of the render target.  Unless you want to use a special sub-class, you can simply pass UCanvasRenderTarget2D::StaticClass() here.
	 * @param       Width                           Width of the render target.
	 * @param       Height                          Height of the render target.
	 * @return                                              Returns the instanced render target.
	*/
	static CreateCanvasRenderTarget2D(WorldContextObject: UObject,CanvasRenderTarget2DClass: UnrealEngineClass,Width: number,Height: number): CanvasRenderTarget2D;
}

declare class UserDefinedEnum extends Enum { 
	/**
	 * Unique Name Index
	*/
	UniqueNameIndex: any;
	/**
	 * Names stored in "DisplayName" meta data. They are duplicated here,
	 * so functions like UKismetNodeHelperLibrary::GetEnumeratorUserFriendlyName can use them
	 * outside the editor. (When meta data are not loaded).
	 * To sync DisplayNames with meta-data use FEnumEditorUtils::EnsureAllDisplayNamesExist.
	*/
	DisplayNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UserDefinedEnum;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UserDefinedEnum;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserDefinedEnum;
	static C(Other: UObject): UserDefinedEnum;
}

declare type EVectorFieldConstructionOp = string;
declare class VectorFieldStatic extends VectorField { 
	/**
	 * Size of the vector field volume.
	*/
	SizeX: number;
	/**
	 * Size of the vector field volume.
	*/
	SizeY: number;
	/**
	 * Size of the vector field volume.
	*/
	SizeZ: number;
	/**
	 * Source File Path
	*/
	SourceFilePath: string;
	/**
	 * Asset Import Data
	*/
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldStatic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorFieldStatic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldStatic;
	static C(Other: UObject): VectorFieldStatic;
}

declare class VectorFieldAnimated extends VectorField { 
	/**
	 * The texture from which to create the vector field.
	*/
	Texture: Texture2D;
	/**
	 * The operation used to construct the vector field.
	*/
	ConstructionOp: EVectorFieldConstructionOp;
	/**
	 * The size of the volume. Valid sizes: 16, 32, 64.
	*/
	VolumeSizeX: number;
	/**
	 * The size of the volume. Valid sizes: 16, 32, 64.
	*/
	VolumeSizeY: number;
	/**
	 * The size of the volume. Valid sizes: 16, 32, 64.
	*/
	VolumeSizeZ: number;
	/**
	 * The number of horizontal subimages in the texture atlas.
	*/
	SubImagesX: number;
	/**
	 * The number of vertical subimages in the texture atlas.
	*/
	SubImagesY: number;
	/**
	 * The number of frames in the atlas.
	*/
	FrameCount: number;
	/**
	 * The rate at which to interpolate between frames.
	*/
	FramesPerSecond: number;
	/**
	 * Whether or not the simulation should loop.
	*/
	bLoop: boolean;
	/**
	 * A static vector field used to add noise.
	*/
	NoiseField: VectorFieldStatic;
	/**
	 * Scale to apply to vectors in the noise field.
	*/
	NoiseScale: number;
	/**
	 * The maximum magnitude of noise vectors to apply.
	*/
	NoiseMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldAnimated;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorFieldAnimated;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldAnimated;
	static C(Other: UObject): VectorFieldAnimated;
}

declare class VisualLoggerAutomationTests extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerAutomationTests;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerAutomationTests;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerAutomationTests;
	static C(Other: UObject): VisualLoggerAutomationTests;
}

declare class MoviePlayerSettings extends UObject { 
	/**
	 * If enabled, The game waits for startup movies to complete even if loading has finished.
	*/
	bWaitForMoviesToComplete: boolean;
	/**
	 * If enabled, Startup movies can be skipped by the user when a mouse button is pressed.
	*/
	bMoviesAreSkippable: boolean;
	/**
	 * Movies to play on startup. Note that these must be in your game's Game/Content/Movies directory.
	*/
	StartupMovies: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MoviePlayerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MoviePlayerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MoviePlayerSettings;
	static C(Other: UObject): MoviePlayerSettings;
}

declare type EMinimumSupportedOS = string;
declare class WindowsTargetSettings extends UObject { 
	/**
	 * The collection of RHI's we want to support on this platform.
	 * This is not always the full list of RHI we can support.
	*/
	TargetedRHIs: string[];
	/**
	 * Determine the minimum supported
	*/
	MinimumOSVersion: EMinimumSupportedOS;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WindowsTargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WindowsTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindowsTargetSettings;
	static C(Other: UObject): WindowsTargetSettings;
}

declare class LinuxTargetSettings extends UObject { 
	/**
	 * The collection of RHI's we want to support on this platform.
	 * This is not always the full list of RHI we can support.
	*/
	TargetedRHIs: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LinuxTargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LinuxTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinuxTargetSettings;
	static C(Other: UObject): LinuxTargetSettings;
}

declare class MotionControllerComponent extends PrimitiveComponent { 
	/**
	 * Which player index this motion controller should automatically follow
	*/
	PlayerIndex: number;
	/**
	 * Which hand this component should automatically follow
	*/
	Hand: EControllerHand;
	/**
	 * If false, render transforms within the motion controller hierarchy will be updated a second time immediately before rendering.
	*/
	bDisableLowLatencyUpdate: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MotionControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MotionControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionControllerComponent;
	static C(Other: UObject): MotionControllerComponent;
	/**
	 * Whether or not this component had a valid tracked device this frame
	*/
	IsTracked(): boolean;
}

declare class AchievementBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AchievementBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementBlueprintLibrary;
	static C(Other: UObject): AchievementBlueprintLibrary;
	/**
	 * out
	*/
	static GetCachedAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Progress?: number): {bFoundID: boolean, Progress: number};
	/**
	 * out
	*/
	static GetCachedAchievementDescription(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Title?: string,LockedDescription?: string,UnlockedDescription?: string,bHidden?: boolean): {bFoundID: boolean, Title: string, LockedDescription: string, UnlockedDescription: string, bHidden: boolean};
}

declare type EInAppPurchaseState = string;
declare class InAppPurchaseProductInfo { 
	/**
	 * The unique product identifier
	*/
	Identifier: string;
	/**
	 * the unique transaction identifier
	*/
	TransactionIdentifier: string;
	/**
	 * The localized display name
	*/
	DisplayName: string;
	/**
	 * The localized display description name
	*/
	DisplayDescription: string;
	/**
	 * The localized display price name
	*/
	DisplayPrice: string;
	/**
	 * The localized currency code of the price
	*/
	CurrencyCode: string;
	/**
	 * The localized currency symbol of the price
	*/
	CurrencySymbol: string;
	/**
	 * The localized decimal separator used in the price
	*/
	DecimalSeparator: string;
	/**
	 * The localized grouping separator of the price
	*/
	GroupingSeparator: string;
	/**
	 * The localized display price name
	*/
	ReceiptData: string;
}

declare class InAppPurchaseProductRequest { 
	/**
	 * The unique product identifier that matches the one from your targeted store.
	*/
	ProductIdentifier: string;
	/**
	 * Flag to determine whether this is a consumable purchase, or not.
	*/
	bIsConsumable: boolean;
}

declare class InAppPurchaseCallbackProxy extends UObject { 
	/**
	 * Called when there is a successful In-App Purchase transaction
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	/**
	 * Called when there is an unsuccessful In-App Purchase transaction
	*/
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InAppPurchaseCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseCallbackProxy;
	static C(Other: UObject): InAppPurchaseCallbackProxy;
	/**
	 * Kicks off a transaction for the provided product identifier
	*/
	static CreateProxyObjectForInAppPurchase(PlayerController: PlayerController,ProductRequest: InAppPurchaseProductRequest): InAppPurchaseCallbackProxy;
}

declare class InAppPurchaseQueryCallbackProxy extends UObject { 
	/**
	 * Called when there is a successful InAppPurchase query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	/**
	 * Called when there is an unsuccessful InAppPurchase query
	*/
	OnFailure: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InAppPurchaseQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseQueryCallbackProxy;
	static C(Other: UObject): InAppPurchaseQueryCallbackProxy;
	/**
	 * Queries a InAppPurchase for an integer value
	*/
	static ReadInAppPurchaseInformation(PlayerController: PlayerController,ProductIdentifiers: string[]): InAppPurchaseQueryCallbackProxy;
}

declare class InAppPurchaseRestoreInfo { 
	/**
	 * The unique product identifier
	*/
	Identifier: string;
	/**
	 * The localized display price name
	*/
	ReceiptData: string;
}

declare class InAppPurchaseRestoreCallbackProxy extends UObject { 
	/**
	 * Called when there is a successful In-App Purchase transaction
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	/**
	 * Called when there is an unsuccessful In-App Purchase transaction
	*/
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InAppPurchaseRestoreCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseRestoreCallbackProxy;
	static C(Other: UObject): InAppPurchaseRestoreCallbackProxy;
	/**
	 * Kicks off a transaction for the provided product identifier
	*/
	static CreateProxyObjectForInAppPurchaseRestore(PlayerController: PlayerController): InAppPurchaseRestoreCallbackProxy;
}

declare class IpConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IpConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IpConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpConnection;
	static C(Other: UObject): IpConnection;
}

declare class IpNetDriver extends NetDriver { 
	/**
	 * Should port unreachable messages be logged
	*/
	LogPortUnreach: boolean;
	/**
	 * Does the game allow clients to remain after receiving ICMP port unreachable errors (handles flakey connections)
	*/
	AllowPlayerPortUnreach: boolean;
	/**
	 * Number of ports which will be tried if current one is not available for binding (i.e. if told to bind to port N, will try from N to N+MaxPortCountToTry inclusive)
	*/
	MaxPortCountToTry: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IpNetDriver;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IpNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpNetDriver;
	static C(Other: UObject): IpNetDriver;
}

declare class LeaderboardBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardBlueprintLibrary;
	static C(Other: UObject): LeaderboardBlueprintLibrary;
	/**
	 * Writes an integer value to the specified leaderboard
	*/
	static WriteLeaderboardInteger(PlayerController: PlayerController,StatName: string,StatValue: number): boolean;
}

declare class LeaderboardFlushCallbackProxy extends UObject { 
	/**
	 * Called when there is a successful leaderboard flush
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	/**
	 * Called when there is an unsuccessful leaderboard flush
	*/
	OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardFlushCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardFlushCallbackProxy;
	static C(Other: UObject): LeaderboardFlushCallbackProxy;
	/**
	 * Called to perform the query internally
	*/
	static CreateProxyObjectForFlush(PlayerController: PlayerController,SessionName: string): LeaderboardFlushCallbackProxy;
}

declare class LeaderboardQueryCallbackProxy extends UObject { 
	/**
	 * Called when there is a successful leaderboard query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	/**
	 * Called when there is an unsuccessful leaderboard query
	*/
	OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardQueryCallbackProxy;
	static C(Other: UObject): LeaderboardQueryCallbackProxy;
	/**
	 * Queries a leaderboard for an integer value
	*/
	static ReadLeaderboardInteger(PlayerController: PlayerController,StatName: string): LeaderboardQueryCallbackProxy;
}

declare class LogoutCallbackProxy extends BlueprintAsyncActionBase { 
	/**
	 * Called when the logout completed successfully
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	/**
	 * Called when the logout completed unsuccessfully
	*/
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogoutCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogoutCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogoutCallbackProxy;
	static C(Other: UObject): LogoutCallbackProxy;
	/**
	 * Logs out of the online service
	*/
	static Logout(WorldContextObject: UObject,PlayerController: PlayerController): LogoutCallbackProxy;
}

declare class OnlineBeacon extends Actor { 
	/**
	 * Time beacon will wait to establish a connection with the beacon host
	*/
	BeaconConnectionInitialTimeout: number;
	/**
	 * Time beacon will wait for packets after establishing a connection before giving up
	*/
	BeaconConnectionTimeout: number;
	/**
	 * Net driver routing network traffic
	*/
	NetDriver: NetDriver;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeacon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeacon;
	static C(Other: UObject): OnlineBeacon;
}

declare class OnlineBeaconHostObject extends Actor { 
	/**
	 * Custom name for this beacon
	*/
	BeaconTypeName: string;
	/**
	 * Class reference for spawning client beacon actor
	*/
	ClientBeaconActorClass: UnrealEngineClass;
	/**
	 * List of all client beacon actors with active connections
	*/
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconHostObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHostObject;
	static C(Other: UObject): OnlineBeaconHostObject;
}

declare type EBeaconConnectionState = string;
declare class OnlineBeaconClient extends OnlineBeacon { 
	/**
	 * Owning beacon host of this beacon actor (server only)
	*/
	BeaconOwner: OnlineBeaconHostObject;
	/**
	 * Network connection associated with this beacon client instance
	*/
	BeaconConnection: NetConnection;
	/**
	 * State of the connection
	*/
	ConnectionState: EBeaconConnectionState;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconClient;
	static C(Other: UObject): OnlineBeaconClient;
	/**
	 * Called on the server side to open up the actor channel that will allow RPCs to occur
	 * (DO NOT OVERLOAD, implement OnConnected() instead)
	*/
	ClientOnConnected(): void;
}

declare class PlayerReservation { 
	/**
	 * Unique id for this reservation
	*/
	UniqueId: UniqueNetIdRepl;
	/**
	 * Info needed to validate user credentials when joining a server
	*/
	ValidationStr: string;
	/**
	 * Elapsed time since player made reservation and was last seen
	*/
	ElapsedTime: number;
}

declare class PartyReservation { 
	/**
	 * Team assigned to this party
	*/
	TeamNum: number;
	/**
	 * Player initiating the request
	*/
	PartyLeader: UniqueNetIdRepl;
	/**
	 * All party members (including party leader) in the reservation
	*/
	PartyMembers: PlayerReservation[];
}

declare class PartyBeaconState extends UObject { 
	/**
	 * Session tied to the beacon
	*/
	SessionName: string;
	/**
	 * Number of currently consumed reservations
	*/
	NumConsumedReservations: number;
	/**
	 * Maximum allowed reservations
	*/
	MaxReservations: number;
	/**
	 * Number of teams in the game
	*/
	NumTeams: number;
	/**
	 * Number of players on each team for balancing
	*/
	NumPlayersPerTeam: number;
	/**
	 * Team that the host has been assigned to
	*/
	ReservedHostTeamNum: number;
	/**
	 * Team that everyone is forced to in single team games
	*/
	ForceTeamNum: number;
	/**
	 * Current reservations in the system
	*/
	Reservations: PartyReservation[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PartyBeaconState;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconState;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconState;
	static C(Other: UObject): PartyBeaconState;
}

declare type EClientRequestType = string;
declare type EPartyReservationResult = string;
declare class PartyBeaconClient extends OnlineBeaconClient { 
	/**
	 * Session Id of the destination host
	*/
	DestSessionId: string;
	/**
	 * Pending reservation that will be sent upon connection with the intended host
	*/
	PendingReservation: PartyReservation;
	/**
	 * Type of request currently being handled by this client beacon
	*/
	RequestType: EClientRequestType;
	/**
	 * Has the reservation request been delivered
	*/
	bPendingReservationSent: boolean;
	/**
	 * Has the reservation request been canceled
	*/
	bCancelReservation: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconClient;
	static C(Other: UObject): PartyBeaconClient;
	/**
	 * Tell the server about the reservation update request being made
	 * @param SessionId expected session id on the other end (must match)
	 * @param ReservationUpdate pending reservation request to make with server
	*/
	ServerUpdateReservationRequest(SessionId: string,ReservationUpdate: PartyReservation): void;
	/**
	 * Tell the server about the reservation request being made
	 * @param SessionId expected session id on the other end (must match)
	 * @param Reservation pending reservation request to make with server
	*/
	ServerReservationRequest(SessionId: string,Reservation: PartyReservation): void;
	/**
	 * Tell the server to cancel a pending or existing reservation
	 * @param PartyLeader id of the party leader for the reservation to cancel
	*/
	ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
	/**
	 * Response from the host session that the reservation count has changed
	 * @param NumRemainingReservations number of slots remaining until a full session
	*/
	ClientSendReservationUpdates(NumRemainingReservations: number): void;
	/**
	 * Response from the host session after making a reservation request
	 * @param ReservationResponse response from server
	*/
	ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
}

declare class TestBeaconClient extends OnlineBeaconClient { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconClient;
	static C(Other: UObject): TestBeaconClient;
	/**
	 * Send a pong RPC to the host
	*/
	ServerPong(): void;
	/**
	 * Send a ping RPC to the client
	*/
	ClientPing(): void;
}

declare class OnlineBeaconHost extends OnlineBeacon { 
	/**
	 * Configured listen port for this beacon host
	*/
	ListenPort: number;
	/**
	 * List of all client beacon actors with active connections
	*/
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHost;
	static C(Other: UObject): OnlineBeaconHost;
}

declare class PartyBeaconHost extends OnlineBeaconHostObject { 
	/**
	 * State of the beacon
	*/
	State: PartyBeaconState;
	/**
	 * Seconds that can elapse before a reservation is removed due to player not being registered with the session
	*/
	SessionTimeoutSecs: number;
	/**
	 * Seconds that can elapse before a reservation is removed due to player not being registered with the session during a travel
	*/
	TravelSessionTimeoutSecs: number;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconHost;
	static C(Other: UObject): PartyBeaconHost;
}

declare class TestBeaconHost extends OnlineBeaconHostObject { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconHost;
	static C(Other: UObject): TestBeaconHost;
}

declare class OnlineBlueprintCallProxyBase extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineBlueprintCallProxyBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBlueprintCallProxyBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBlueprintCallProxyBase;
	static C(Other: UObject): OnlineBlueprintCallProxyBase;
	/**
	 * Called to trigger the actual online action once the delegates have been bound
	*/
	Activate(): void;
}

declare class AchievementQueryCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when there is an unsuccessful query
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AchievementQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementQueryCallbackProxy;
	static C(Other: UObject): AchievementQueryCallbackProxy;
	/**
	 * Fetches and caches achievement progress from the default online subsystem
	*/
	static CacheAchievements(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	/**
	 * Fetches and caches achievement descriptions from the default online subsystem
	*/
	static CacheAchievementDescriptions(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
}

declare class AchievementWriteCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful achievement write
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	/**
	 * Called when there is an unsuccessful achievement write
	*/
	OnFailure: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementWriteCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AchievementWriteCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementWriteCallbackProxy;
	static C(Other: UObject): AchievementWriteCallbackProxy;
	/**
	 * Writes progress about an achievement to the default online subsystem
	 *   AchievementName is the ID of the achievement to update progress on
	 *   Progress is the reported progress toward accomplishing the achievement
	 *   UserTag is not used internally, but it is returned on success or failure
	*/
	static WriteAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementName: string,Progress: number,UserTag: number): AchievementWriteCallbackProxy;
}

declare class ConnectionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	/**
	 * Called when there is an unsuccessful query
	*/
	OnFailure: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ConnectionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ConnectionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConnectionCallbackProxy;
	static C(Other: UObject): ConnectionCallbackProxy;
	/**
	 * Connects to an online service such as Google Play
	*/
	static ConnectToService(WorldContextObject: UObject,PlayerController: PlayerController): ConnectionCallbackProxy;
}

declare class CreateSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when the session was created successfully
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when there was an error creating the session
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CreateSessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CreateSessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CreateSessionCallbackProxy;
	static C(Other: UObject): CreateSessionCallbackProxy;
	/**
	 * Creates a session with the default online subsystem
	*/
	static CreateSession(WorldContextObject: UObject,PlayerController: PlayerController,PublicConnections: number,bUseLAN: boolean): CreateSessionCallbackProxy;
}

declare class DestroySessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful destroy
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when there is an unsuccessful destroy
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DestroySessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DestroySessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DestroySessionCallbackProxy;
	static C(Other: UObject): DestroySessionCallbackProxy;
	/**
	 * Destroys a session previously created by the default online subsystem
	*/
	static DestroySession(WorldContextObject: UObject,PlayerController: PlayerController): DestroySessionCallbackProxy;
}

declare class EndMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when the match ends successfully
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when ending the match fails
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EndMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndMatchCallbackProxy;
	static C(Other: UObject): EndMatchCallbackProxy;
}

declare class EndTurnCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when there is an unsuccessful query
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndTurnCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EndTurnCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndTurnCallbackProxy;
	static C(Other: UObject): EndTurnCallbackProxy;
}

declare class BlueprintSessionResult { 
}

declare class FindSessionsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	/**
	 * Called when there is an unsuccessful query
	*/
	OnFailure: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FindSessionsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FindSessionsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindSessionsCallbackProxy;
	static C(Other: UObject): FindSessionsCallbackProxy;
	/**
	 * Get Server Name
	*/
	static GetServerName(Result: BlueprintSessionResult): string;
	/**
	 * Get Ping in Ms
	*/
	static GetPingInMs(Result: BlueprintSessionResult): number;
	/**
	 * Get Max Players
	*/
	static GetMaxPlayers(Result: BlueprintSessionResult): number;
	/**
	 * Get Current Players
	*/
	static GetCurrentPlayers(Result: BlueprintSessionResult): number;
	/**
	 * Searches for advertised sessions with the default online subsystem
	*/
	static FindSessions(WorldContextObject: UObject,PlayerController: PlayerController,MaxResults: number,bUseLAN: boolean): FindSessionsCallbackProxy;
}

declare class FindTurnBasedMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when matchmaking succeeded.
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	/**
	 * Called when matchmaking failed
	*/
	OnFailure: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FindTurnBasedMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindTurnBasedMatchCallbackProxy;
	static C(Other: UObject): FindTurnBasedMatchCallbackProxy;
}

declare class JoinSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful join
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when there is an unsuccessful join
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JoinSessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JoinSessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JoinSessionCallbackProxy;
	static C(Other: UObject): JoinSessionCallbackProxy;
	/**
	 * Joins a remote session with the default online subsystem
	*/
	static JoinSession(WorldContextObject: UObject,PlayerController: PlayerController,SearchResult: BlueprintSessionResult): JoinSessionCallbackProxy;
}

declare type EMPMatchOutcome = string;
declare class QuitMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when there is a successful query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when there is an unsuccessful query
	*/
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QuitMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QuitMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuitMatchCallbackProxy;
	static C(Other: UObject): QuitMatchCallbackProxy;
	/**
	 * Quits the turn based match
	*/
	static QuitMatch(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,Outcome: EMPMatchOutcome,TurnTimeoutInSeconds: number): QuitMatchCallbackProxy;
}

declare class OnlineSessionClient extends OnlineSession { 
	/**
	 * Is this join from an invite
	*/
	bIsFromInvite: boolean;
	/**
	 * Have we started returning to main menu already
	*/
	bHandlingDisconnect: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineSessionClient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineSessionClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineSessionClient;
	static C(Other: UObject): OnlineSessionClient;
}

declare class ShowLoginUICallbackProxy extends BlueprintAsyncActionBase { 
	/**
	 * Called when there is a successful query
	*/
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	/**
	 * Called when there is an unsuccessful query
	*/
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShowLoginUICallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ShowLoginUICallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShowLoginUICallbackProxy;
	static C(Other: UObject): ShowLoginUICallbackProxy;
	/**
	 * Shows the login UI for the currently active online subsystem, if the subsystem supports a login UI.
	*/
	static ShowExternalLoginUI(WorldContextObject: UObject,InPlayerController: PlayerController): ShowLoginUICallbackProxy;
}

declare class TurnBasedBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TurnBasedBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TurnBasedBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedBlueprintLibrary;
	static C(Other: UObject): TurnBasedBlueprintLibrary;
	/**
	 * Register Turn Based Match Interface Object
	*/
	static RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject,PlayerController: PlayerController,UObject: UObject): void;
	/**
	 * out
	*/
	static GetPlayerDisplayName(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex: number,PlayerDisplayName?: string): {PlayerDisplayName: string};
	/**
	 * out
	*/
	static GetMyPlayerIndex(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex?: number): {PlayerIndex: number};
	/**
	 * out
	*/
	static GetIsMyTurn(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,bIsMyTurn?: boolean): {bIsMyTurn: boolean};
}

declare class SourceCodeAccessSettings extends UObject { 
	/**
	 * The source code editor we prefer to use.
	*/
	PreferredAccessor: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SourceCodeAccessSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SourceCodeAccessSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceCodeAccessSettings;
	static C(Other: UObject): SourceCodeAccessSettings;
}

declare class MovieSceneCaptureInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureInterface;
	static C(Other: UObject): MovieSceneCaptureInterface;
}

declare class CaptureResolution { 
	/**
	 * Res X
	*/
	ResX: any;
	/**
	 * Res Y
	*/
	ResY: any;
}

declare type EMovieCaptureType = string;
declare class MovieSceneCaptureSettings { 
	/**
	 * The directory to output the captured file(s) in
	*/
	OutputDirectory: DirectoryPath;
	/**
	 * The format to use for the resulting filename. Extension will be added automatically. Any tokens of the form {token} will be replaced with the corresponding value:
	 * {fps}                - The captured framerate
	 * {frame}              - The current frame number (only relevant for image sequences)
	 * {width}              - The width of the captured frames
	 * {height}             - The height of the captured frames
	*/
	OutputFormat: string;
	/**
	 * The frame rate at which to capture
	*/
	FrameRate: number;
	/**
	 * The resolution at which to capture
	*/
	Resolution: CaptureResolution;
	/**
	 * The type of capture to perform
	*/
	CaptureType: EMovieCaptureType;
	/**
	 * Whether compression is enabled on the resulting file(s)
	*/
	bUseCompression: boolean;
	/**
	 * The level of compression to apply to the captured file(s) (0-1)
	*/
	CompressionQuality: number;
	/**
	 * (Experimental) - An optional codec to use for video encoding
	*/
	Codec: string;
	/**
	 * Whether to enable texture streaming whilst capturing
	*/
	bEnableTextureStreaming: boolean;
	/**
	 * Whether to enable cinematic mode whilst capturing
	*/
	bCinematicMode: boolean;
	/**
	 * Whether to allow player movement whilst capturing
	*/
	bAllowMovement: boolean;
	/**
	 * Whether to allow player rotation whilst capturing
	*/
	bAllowTurning: boolean;
	/**
	 * Whether to show the local player whilst capturing
	*/
	bShowPlayer: boolean;
	/**
	 * Whether to show the in-game HUD whilst capturing
	*/
	bShowHUD: boolean;
}

declare class MovieSceneCapture extends UObject { 
	/**
	 * Settings that define how to capture
	*/
	Settings: MovieSceneCaptureSettings;
	/**
	 * Additional command line arguments to pass to the external process when capturing
	*/
	AdditionalCommandLineArguments: string;
	/**
	 * Value used to control the BufferVisualizationDumpFrames cvar in the child process
	*/
	bBufferVisualizationDumpFrames: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCapture;
	static C(Other: UObject): MovieSceneCapture;
}

declare class AutomatedLevelSequenceCapture extends MovieSceneCapture { 
	/**
	 * The level sequence to use during capture
	*/
	LevelSequence: StringAssetReference;
	/**
	 * The level to use for the capture
	*/
	Level: StringAssetReference;
	/**
	 * Specific playback settings
	*/
	PlaybackSettings: LevelSequencePlaybackSettings;
	/**
	 * The amount of time to wait before playback and capture start. Useful for allowing Post Processing effects to settle down before capturing the animation.
	*/
	PrerollAmount: number;
	/**
	 * Animation instance created at runtime before we start capturing
	*/
	AnimationInstance: LevelSequenceInstance;
	/**
	 * Animation player used to playback the animation at runtime
	*/
	AnimationPlayback: LevelSequencePlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomatedLevelSequenceCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AutomatedLevelSequenceCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomatedLevelSequenceCapture;
	static C(Other: UObject): AutomatedLevelSequenceCapture;
}

declare class LevelCapture extends MovieSceneCapture { 
	/**
	 * The level we want to load and capture
	*/
	Level: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelCapture;
	static C(Other: UObject): LevelCapture;
}

declare class MovieSceneCaptureEnvironment extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureEnvironment;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureEnvironment;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureEnvironment;
	static C(Other: UObject): MovieSceneCaptureEnvironment;
	/**
	 * Get the frame number of the current capture
	*/
	static GetCaptureFrameNumber(): number;
	/**
	 * Get the total elapsed time of the current capture in seconds
	*/
	static GetCaptureElapsedTime(): number;
}

declare class SequencerProjectSettings extends UObject { 
	/**
	 * The default in frame.
	*/
	InFrame: number;
	/**
	 * The default duration in seconds.
	*/
	Duration: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerProjectSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerProjectSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerProjectSettings;
	static C(Other: UObject): SequencerProjectSettings;
}

declare class SequencerSettingsContainer extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerSettingsContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerSettingsContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerSettingsContainer;
	static C(Other: UObject): SequencerSettingsContainer;
}

declare type EMovieSceneKeyInterpolation = string;
declare class SequencerSettings extends UObject { 
	/**
	 * Auto Key Enabled
	*/
	bAutoKeyEnabled: boolean;
	/**
	 * Key All Enabled
	*/
	bKeyAllEnabled: boolean;
	/**
	 * Key Interp Properties Only
	*/
	bKeyInterpPropertiesOnly: boolean;
	/**
	 * Key Interpolation
	*/
	KeyInterpolation: EMovieSceneKeyInterpolation;
	/**
	 * Show Frame Numbers
	*/
	bShowFrameNumbers: boolean;
	/**
	 * Show Range Slider
	*/
	bShowRangeSlider: boolean;
	/**
	 * Lock in Out to Start End Range
	*/
	bLockInOutToStartEndRange: boolean;
	/**
	 * Is Snap Enabled
	*/
	bIsSnapEnabled: boolean;
	/**
	 * Time Snap Interval
	*/
	TimeSnapInterval: number;
	/**
	 * Snap Key Times to Interval
	*/
	bSnapKeyTimesToInterval: boolean;
	/**
	 * Snap Key Times to Keys
	*/
	bSnapKeyTimesToKeys: boolean;
	/**
	 * Snap Section Times to Interval
	*/
	bSnapSectionTimesToInterval: boolean;
	/**
	 * Snap Section Times to Sections
	*/
	bSnapSectionTimesToSections: boolean;
	/**
	 * Snap Play Time to Interval
	*/
	bSnapPlayTimeToInterval: boolean;
	/**
	 * Snap Play Time to Dragged Key
	*/
	bSnapPlayTimeToDraggedKey: boolean;
	/**
	 * Curve Value Snap Interval
	*/
	CurveValueSnapInterval: number;
	/**
	 * Snap Curve Value to Interval
	*/
	bSnapCurveValueToInterval: boolean;
	/**
	 * Details View Visible
	*/
	bDetailsViewVisible: boolean;
	/**
	 * Auto Scroll Enabled
	*/
	bAutoScrollEnabled: boolean;
	/**
	 * Show Curve Editor
	*/
	bShowCurveEditor: boolean;
	/**
	 * Show Curve Editor Curve Tool Tips
	*/
	bShowCurveEditorCurveToolTips: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerSettings;
	static C(Other: UObject): SequencerSettings;
}

declare class LevelEditorSequencerSettings extends SequencerSettings { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelEditorSequencerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelEditorSequencerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelEditorSequencerSettings;
	static C(Other: UObject): LevelEditorSequencerSettings;
}

declare class InternationalizationSettingsModel extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationSettingsModel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationSettingsModel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationSettingsModel;
	static C(Other: UObject): InternationalizationSettingsModel;
}

declare class MediaPlayer extends UObject { 
	/**
	 * Holds a delegate that is invoked when a media source has been closed.
	*/
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Holds a delegate that is invoked when a media source has been opened.
	*/
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	/**
	 * Whether playback should loop when it reaches the end.
	*/
	Looping: boolean;
	/**
	 * The path or URL to the media file to be played.
	*/
	URL: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
	static C(Other: UObject): MediaPlayer;
	/**
	 * Checks whether the currently loaded media can jump to a certain position.
	 * @return true if seeking is supported, false otherwise.
	*/
	SupportsSeeking(): boolean;
	/**
	 * Checks whether the currently loaded media supports scrubbing.
	 * @return true if scrubbing is supported, false otherwise.
	*/
	SupportsScrubbing(): boolean;
	/**
	 * Checks whether the specified playback rate is supported.
	 * @param Rate The playback rate to check.
	 * @param Unthinned Whether no frames should be dropped at the given rate.
	*/
	SupportsRate(Rate: number,Unthinned: boolean): boolean;
	/**
	 * Changes the media's playback rate.
	 * @param Rate The playback rate to set.
	 * @return true on success, false otherwise.
	*/
	SetRate(Rate: number): boolean;
	/**
	 * Enables or disables playback looping.
	 * @param Looping Whether playback should be looped.
	 * @return true on success, false otherwise.
	*/
	SetLooping(InLooping: boolean): boolean;
	/**
	 * Seeks to the specified playback time.
	 * @param InTime The playback time to set.
	 * @return true on success, false otherwise.
	*/
	Seek(InTime: Timespan): boolean;
	/**
	 * Rewinds the media to the beginning.
	 * This is the same as seeking to zero time.
	 * @return true if rewinding, false otherwise.
	*/
	Rewind(): boolean;
	/**
	 * Starts media playback.
	 * This is the same as setting the playback rate to 1.0.
	 * @return true if playback is starting, false otherwise.
	*/
	Play(): boolean;
	/**
	 * Pauses media playback.
	 * This is the same as setting the playback rate to 0.0.
	 * @return true if playback is being paused, false otherwise.
	*/
	Pause(): boolean;
	/**
	 * Opens the specified media URL.
	 * @param NewUrl The URL to open.
	 * @return true on success, false otherwise.
	*/
	OpenUrl(NewUrl: string): boolean;
	/**
	 * Checks whether playback has stopped.
	 * @return true if playback has stopped, false otherwise.
	*/
	IsStopped(): boolean;
	/**
	 * Checks whether playback has started.
	 * @return true if playback has started, false otherwise.
	*/
	IsPlaying(): boolean;
	/**
	 * Checks whether playback is currently paused.
	 * @return true if playback is paused, false otherwise.
	*/
	IsPaused(): boolean;
	/**
	 * Checks whether playback is looping.
	 * @return true if looping, false otherwise.
	*/
	IsLooping(): boolean;
	/**
	 * Gets the URL of the currently loaded media, if any.
	 * @return Media URL, or empty string if no media was loaded.
	*/
	GetUrl(): string;
	/**
	 * Gets the media's current playback time.
	 * @return Playback time.
	*/
	GetTime(): Timespan;
	/**
	 * Gets the media's current playback rate.
	 * @return The playback rate.
	*/
	GetRate(): number;
	/**
	 * Gets the media's duration.
	 * @return A time span representing the duration.
	*/
	GetDuration(): Timespan;
	/**
	 * Close the currently open media, if any.
	*/
	Close(): void;
	/**
	 * Checks whether media playback can be started right now.
	 * @return true if playback can be started, false otherwise.
	*/
	CanPlay(): boolean;
	/**
	 * Checks whether media playback can be paused right now.
	 * Playback can be paused if the media supports pausing and if it is currently playing.
	 * @return true if pausing playback can be paused, false otherwise.
	*/
	CanPause(): boolean;
}

declare class MediaSoundWave extends SoundWave { 
	/**
	 * The index of the MediaPlayer's audio track to get the wave data from.
	*/
	AudioTrackIndex: number;
	/**
	 * The MediaPlayer asset to stream audio from.
	*/
	MediaPlayer: MediaPlayer;
	/**
	 * Holds the media player asset currently being used.
	*/
	CurrentMediaPlayer: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWave;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWave;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWave;
	static C(Other: UObject): MediaSoundWave;
	/**
	 * Sets the MediaPlayer asset to be used for this texture.
	 * @param InMediaPlayer The asset to set.
	*/
	SetMediaPlayer(InMediaPlayer: MediaPlayer): void;
}

declare class MediaTexture extends Texture { 
	/**
	 * The addressing mode to use for the X axis.
	*/
	AddressX: TextureAddress;
	/**
	 * The addressing mode to use for the Y axis.
	*/
	AddressY: TextureAddress;
	/**
	 * The color used to clear the texture if no video data is drawn.
	*/
	ClearColor: LinearColor;
	/**
	 * The index of the MediaPlayer's video track to render on this texture.
	*/
	VideoTrackIndex: number;
	/**
	 * The MediaPlayer asset to stream video from.
	*/
	MediaPlayer: MediaPlayer;
	/**
	 * Holds the UMediaPlayer asset currently being used.
	*/
	CurrentMediaPlayer: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTexture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	static C(Other: UObject): MediaTexture;
	/**
	 * Sets the media player asset to be used for this texture.
	 * @param InMediaPlayer The asset to set.
	*/
	SetMediaPlayer(InMediaPlayer: MediaPlayer): void;
}

declare class LightPropagationVolumeSettings { 
	/**
	 * Override LPVIntensity
	*/
	bOverride_LPVIntensity: boolean;
	/**
	 * Override LPVDirectional Occlusion Intensity
	*/
	bOverride_LPVDirectionalOcclusionIntensity: boolean;
	/**
	 * Override LPVDirectional Occlusion Radius
	*/
	bOverride_LPVDirectionalOcclusionRadius: boolean;
	/**
	 * Override LPVDiffuse Occlusion Exponent
	*/
	bOverride_LPVDiffuseOcclusionExponent: boolean;
	/**
	 * Override LPVSpecular Occlusion Exponent
	*/
	bOverride_LPVSpecularOcclusionExponent: boolean;
	/**
	 * Override LPVDiffuse Occlusion Intensity
	*/
	bOverride_LPVDiffuseOcclusionIntensity: boolean;
	/**
	 * Override LPVSpecular Occlusion Intensity
	*/
	bOverride_LPVSpecularOcclusionIntensity: boolean;
	/**
	 * Override LPVSize
	*/
	bOverride_LPVSize: boolean;
	/**
	 * Override LPVSecondary Occlusion Intensity
	*/
	bOverride_LPVSecondaryOcclusionIntensity: boolean;
	/**
	 * Override LPVSecondary Bounce Intensity
	*/
	bOverride_LPVSecondaryBounceIntensity: boolean;
	/**
	 * Override LPVGeometry Volume Bias
	*/
	bOverride_LPVGeometryVolumeBias: boolean;
	/**
	 * Override LPVVpl Injection Bias
	*/
	bOverride_LPVVplInjectionBias: boolean;
	/**
	 * Override LPVEmissive Injection Intensity
	*/
	bOverride_LPVEmissiveInjectionIntensity: boolean;
	/**
	 * How strong the dynamic GI from the LPV should be. 0.0 is off, 1.0 is the "normal" value, but higher values can be used to boost the effect
	*/
	LPVIntensity: number;
	/**
	 * Bias applied to light injected into the LPV in cell units. Increase to reduce bleeding through thin walls
	*/
	LPVVplInjectionBias: number;
	/**
	 * The size of the LPV volume, in Unreal units
	*/
	LPVSize: number;
	/**
	 * Secondary occlusion strength (bounce light shadows). Set to 0 to disable
	*/
	LPVSecondaryOcclusionIntensity: number;
	/**
	 * Secondary bounce light strength (bounce light shadows). Set to 0 to disable
	*/
	LPVSecondaryBounceIntensity: number;
	/**
	 * Bias applied to the geometry volume in cell units. Increase to reduce darkening due to secondary occlusion
	*/
	LPVGeometryVolumeBias: number;
	/**
	 * LPVEmissive Injection Intensity
	*/
	LPVEmissiveInjectionIntensity: number;
	/**
	 * Controls the amount of directional occlusion. Requires LPV. Values very close to 1.0 are recommended
	*/
	LPVDirectionalOcclusionIntensity: number;
	/**
	 * Occlusion Radius - 16 is recommended for most scenes
	*/
	LPVDirectionalOcclusionRadius: number;
	/**
	 * Diffuse occlusion exponent - increase for more contrast. 1 to 2 is recommended
	*/
	LPVDiffuseOcclusionExponent: number;
	/**
	 * Specular occlusion exponent - increase for more contrast. 6 to 9 is recommended
	*/
	LPVSpecularOcclusionExponent: number;
	/**
	 * Diffuse occlusion intensity - higher values provide increased diffuse occlusion.
	*/
	LPVDiffuseOcclusionIntensity: number;
	/**
	 * Specular occlusion intensity - higher values provide increased specular occlusion.
	*/
	LPVSpecularOcclusionIntensity: number;
}

declare class LightPropagationVolumeBlendable extends UObject { 
	/**
	 * Settings
	*/
	Settings: LightPropagationVolumeSettings;
	/**
	 * 0:no effect, 1:full effect
	*/
	BlendWeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject): LightPropagationVolumeBlendable;
}

declare class PropertyConfigFileDisplayRow extends UObject { 
	/**
	 * Config File Name
	*/
	ConfigFileName: string;
	/**
	 * External Property
	*/
	ExternalProperty: Property;
	/**
	 * Is File Writable
	*/
	bIsFileWritable: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyConfigFileDisplayRow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyConfigFileDisplayRow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyConfigFileDisplayRow;
	static C(Other: UObject): PropertyConfigFileDisplayRow;
}

declare class ConfigHierarchyPropertyView extends UObject { 
	/**
	 * Edit Property
	*/
	EditProperty: any;
	/**
	 * Config File Property Objects
	*/
	ConfigFilePropertyObjects: PropertyConfigFileDisplayRow[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ConfigHierarchyPropertyView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ConfigHierarchyPropertyView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConfigHierarchyPropertyView;
	static C(Other: UObject): ConfigHierarchyPropertyView;
}

declare class K2Node_CreateDragDropOperation extends K2Node_ConstructObjectFromClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_CreateDragDropOperation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_CreateDragDropOperation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_CreateDragDropOperation;
	static C(Other: UObject): K2Node_CreateDragDropOperation;
}

declare class K2Node_CreateWidget extends K2Node_ConstructObjectFromClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_CreateWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_CreateWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_CreateWidget;
	static C(Other: UObject): K2Node_CreateWidget;
}

declare class EditorPropertyPathSegment { 
	/**
	 * The owner of the path segment (ie. What class or structure was this property from)
	*/
	Struct: Struct;
	/**
	 * The member name in the structure this segment represents.
	*/
	MemberName: string;
	/**
	 * The member guid in this structure this segment represents.  If this is valid it should
	 * be used instead of Name to get the true name.
	*/
	MemberGuid: Guid;
	/**
	 * true if property, false if function
	*/
	IsProperty: boolean;
}

declare class EditorPropertyPath { 
	/**
	 * The path of properties.
	*/
	Segments: EditorPropertyPathSegment[];
}

declare class DelegateEditorBinding { 
	/**
	 * The member widget the binding is on, must be a direct variable of the UUserWidget.
	*/
	ObjectName: string;
	/**
	 * The property on the ObjectName that we are binding to.
	*/
	PropertyName: string;
	/**
	 * The function that was generated to return the SourceProperty
	*/
	FunctionName: string;
	/**
	 * The property we are bindings to directly on the source object.
	*/
	SourceProperty: string;
	/**
	 * Source Path
	*/
	SourcePath: EditorPropertyPath;
	/**
	 * If it's an actual Function Graph in the blueprint that we're bound to, there's a GUID we can use to lookup that function, to deal with renames better.  This is that GUID.
	*/
	MemberGuid: Guid;
	/**
	 * Kind
	*/
	Kind: EBindingKind;
}

declare class WidgetAnimation_DEPRECATED { 
	/**
	 * Movie Scene
	*/
	MovieScene: MovieScene;
	/**
	 * Animation Bindings
	*/
	AnimationBindings: WidgetAnimationBinding[];
}

declare class WidgetBlueprint extends Blueprint { 
	/**
	 * A tree of the widget templates to be created
	*/
	WidgetTree: WidgetTree;
	/**
	 * Bindings
	*/
	Bindings: DelegateEditorBinding[];
	/**
	 * Animation Data
	*/
	AnimationData: WidgetAnimation_DEPRECATED[];
	/**
	 * Animations
	*/
	Animations: WidgetAnimation[];
	/**
	 * Don't directly modify this property to change the palette category.  The actual value is stored
	 * in the CDO of the UUserWidget, but a copy is stored here so that it's available in the serialized
	 * Tag data in the asset header for access in the FAssetData.
	*/
	PaletteCategory: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetBlueprint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetBlueprint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetBlueprint;
	static C(Other: UObject): WidgetBlueprint;
}

declare class WidgetBlueprintFactory extends Factory { 
	/**
	 * The type of blueprint that will be created
	*/
	BlueprintType: EBlueprintType;
	/**
	 * The parent class of the created blueprint
	*/
	ParentClass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetBlueprintFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetBlueprintFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetBlueprintFactory;
	static C(Other: UObject): WidgetBlueprintFactory;
}

declare class WidgetDesignerSettings extends UObject { 
	/**
	 * If enabled, actor positions will snap to the grid.
	*/
	GridSnapEnabled: boolean;
	/**
	 * Grid Snap Size
	*/
	GridSnapSize: number;
	/**
	 * Lock to Panel on Drag by Default
	*/
	bLockToPanelOnDragByDefault: boolean;
	/**
	 * Show Outlines
	*/
	bShowOutlines: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetDesignerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetDesignerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetDesignerSettings;
	static C(Other: UObject): WidgetDesignerSettings;
}

declare class WidgetGraphSchema extends EdGraphSchema_K2 { 
	/**
	 * NAME Never as Pin
	*/
	NAME_NeverAsPin: string;
	/**
	 * NAME Pin Hidden by Default
	*/
	NAME_PinHiddenByDefault: string;
	/**
	 * NAME Pin Shown by Default
	*/
	NAME_PinShownByDefault: string;
	/**
	 * NAME Always as Pin
	*/
	NAME_AlwaysAsPin: string;
	/**
	 * NAME on Evaluate
	*/
	NAME_OnEvaluate: string;
	/**
	 * Default Evaluation Handler Name
	*/
	DefaultEvaluationHandlerName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetGraphSchema;
	static C(Other: UObject): WidgetGraphSchema;
}

declare class WidgetSlotPair extends UObject { 
	/**
	 * Widget Name
	*/
	WidgetName: string;
	/**
	 * Slot Property Names
	*/
	SlotPropertyNames: string[];
	/**
	 * Slot Property Values
	*/
	SlotPropertyValues: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetSlotPair;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetSlotPair;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetSlotPair;
	static C(Other: UObject): WidgetSlotPair;
}

declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject): FuncTestRenderingComponent;
}

declare type EFunctionalTestResult = string;
declare class FunctionalTest extends Actor { 
	/**
	 * Sprite Component
	*/
	SpriteComponent: BillboardComponent;
	/**
	 * Result
	*/
	Result: EFunctionalTestResult;
	/**
	 * If test is limited by time this is the result that will be returned when time runs out
	*/
	TimesUpResult: EFunctionalTestResult;
	/**
	 * Test's time limit. '0' means no limit
	*/
	TimeLimit: number;
	/**
	 * Times Up Message
	*/
	TimesUpMessage: string;
	/**
	 * Observation Point
	*/
	ObservationPoint: Actor;
	/**
	 * Called when the test is started
	*/
	OnTestStart: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Called when the test is finished. Use it to clean up
	*/
	OnTestFinished: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * Auto Destroy Actors
	*/
	AutoDestroyActors: Actor[];
	/**
	 * Random Numbers Stream
	*/
	RandomNumbersStream: RandomStream;
	/**
	 * Description
	*/
	Description: string;
	/**
	 * Render Comp
	*/
	RenderComp: FuncTestRenderingComponent;
	/**
	 * Is Enabled
	*/
	bIsEnabled: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	static C(Other: UObject): FunctionalTest;
	/**
	 * Set Time Limit
	*/
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	/**
	 * ACtors registered this way will be automatically destroyed (by limiting their lifespan)
	 *     on test finish
	*/
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	/**
	 * retrieves information whether test wants to have another run just after finishing
	*/
	OnWantsReRunCheck(): boolean;
	/**
	 * On Additional Test Finished Message Request
	*/
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	/**
	 * Log Message
	*/
	LogMessage(Message: string): void;
	/**
	 * Finish Test
	*/
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	/**
	 * Used by debug drawing to gather actors this test is using and point at them on the level to better understand test's setup
	*/
	DebugGatherRelevantActors(): Actor[];
}

declare class GenericTeamId { 
	/**
	 * Team ID
	*/
	TeamID: number;
}

declare class AITestSpawnInfo { 
	/**
	 * Determines AI to be spawned
	*/
	PawnClass: UnrealEngineClass;
	/**
	 * class to override default pawn's controller class. If None the default will be used
	*/
	ControllerClass: UnrealEngineClass;
	/**
	 * Team ID
	*/
	TeamID: GenericTeamId;
	/**
	 * if set will be applied to spawned AI
	*/
	BehaviorTree: BehaviorTree;
	/**
	 * Where should AI be spawned
	*/
	SpawnLocation: Actor;
	/**
	 * Number to Spawn
	*/
	NumberToSpawn: number;
	/**
	 * delay between consecutive spawn attempts
	*/
	SpawnDelay: number;
}

declare class AITestSpawnSet { 
	/**
	 * what to spawn
	*/
	SpawnInfoContainer: AITestSpawnInfo[];
	/**
	 * give the set a name to help identify it if need be
	*/
	Name: string;
	/**
	 * Enabled
	*/
	bEnabled: boolean;
	/**
	 * location used for spawning if spawn info doesn't define one
	*/
	FallbackSpawnLocation: Actor;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
}

declare class FunctionalAITest extends FunctionalTest { 
	/**
	 * Spawn Sets
	*/
	SpawnSets: AITestSpawnSet[];
	/**
	 * Spawn Location Randomization Range
	*/
	SpawnLocationRandomizationRange: number;
	/**
	 * Spawned Pawns
	*/
	SpawnedPawns: Pawn[];
	/**
	 * Pending Delayed Spawns
	*/
	PendingDelayedSpawns: PendingDelayedSpawn[];
	/**
	 * Called when a single AI finished spawning
	*/
	OnAISpawned: UnrealEngineMulticastDelegate<(Controller: AIController, Pawn: Pawn) => void>;
	/**
	 * Called when a all AI finished spawning
	*/
	OnAllAISPawned: UnrealEngineMulticastDelegate<() => void>;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalAITest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	static C(Other: UObject): FunctionalAITest;
	/**
	 * Is One Of Spawned Pawns
	*/
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	/**
	 * Tests Left
	*/
	TestsLeft: FunctionalTest[];
	/**
	 * All Tests
	*/
	AllTests: FunctionalTest[];
	/**
	 * On Setup Tests
	*/
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FunctionalTestingManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTestingManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static C(Other: UObject): FunctionalTestingManager;
	/**
	 * Triggers in sequence all functional tests found on the level.
	 *     @return true if any tests have been triggered
	*/
	static RunAllFunctionalTests(WorldContext: UObject,bNewLog: boolean,bRunLooped: boolean,bWaitForNavigationBuildFinish: boolean,FailedTestsReproString: string): boolean;
}

declare class AIGraph extends EdGraph { 
	/**
	 * Graph Version
	*/
	GraphVersion: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject): AIGraph;
}

declare class GraphNodeClassData { 
	/**
	 * path to class if it's not loaded yet
	*/
	AssetName: string;
	/**
	 * Generated Class Package
	*/
	GeneratedClassPackage: string;
	/**
	 * resolved name of class from asset data
	*/
	ClassName: string;
	/**
	 * User-defined category for this class
	*/
	Category: string;
}

declare class AIGraphNode extends EdGraphNode { 
	/**
	 * instance class
	*/
	ClassData: GraphNodeClassData;
	/**
	 * Node Instance
	*/
	NodeInstance: UObject;
	/**
	 * Parent Node
	*/
	ParentNode: AIGraphNode;
	/**
	 * Sub Nodes
	*/
	SubNodes: AIGraphNode[];
	/**
	 * subnode index assigned during copy operation to connect nodes again on paste
	*/
	CopySubNodeIndex: number;
	/**
	 * if set, all modifications (including delete/cut) are disabled
	*/
	bIsReadOnly: boolean;
	/**
	 * if set, this node will be always considered as subnode
	*/
	bIsSubNode: boolean;
	/**
	 * error message for node
	*/
	ErrorMessage: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject): AIGraphSchema;
}

declare class GDTCustomViewNames { 
	/**
	 * Game View 1
	*/
	GameView1: string;
	/**
	 * Game View 2
	*/
	GameView2: string;
	/**
	 * Game View 3
	*/
	GameView3: string;
	/**
	 * Game View 4
	*/
	GameView4: string;
	/**
	 * Game View 5
	*/
	GameView5: string;
}

declare class GameplayDebuggerSettings extends UObject { 
	/**
	 * Custom View Names
	*/
	CustomViewNames: GDTCustomViewNames;
	/**
	 * Over Head
	*/
	OverHead: boolean;
	/**
	 * Basic
	*/
	Basic: boolean;
	/**
	 * Behavior Tree
	*/
	BehaviorTree: boolean;
	/**
	 * EQS
	*/
	EQS: boolean;
	/**
	 * Enable EQSOn HUD
	*/
	EnableEQSOnHUD: boolean;
	/**
	 * Active EQSIndex
	*/
	ActiveEQSIndex: number;
	/**
	 * Perception
	*/
	Perception: boolean;
	/**
	 * Game View 1
	*/
	GameView1: boolean;
	/**
	 * Game View 2
	*/
	GameView2: boolean;
	/**
	 * Game View 3
	*/
	GameView3: boolean;
	/**
	 * Game View 4
	*/
	GameView4: boolean;
	/**
	 * Game View 5
	*/
	GameView5: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayDebuggerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggerSettings;
	static C(Other: UObject): GameplayDebuggerSettings;
}

declare class GameplayDebuggingComponent extends PrimitiveComponent { 
	/**
	 * Debug Component Class Name
	*/
	DebugComponentClassName: string;
	/**
	 * Show Extended Informatiom Counter
	*/
	ShowExtendedInformatiomCounter: number;
	/**
	 * Replicate View Data Counters
	*/
	ReplicateViewDataCounters: number[];
	/**
	 * Controller Name
	*/
	ControllerName: string;
	/**
	 * Pawn Name
	*/
	PawnName: string;
	/**
	 * Pawn Class
	*/
	PawnClass: string;
	/**
	 * Debug Icon
	*/
	DebugIcon: string;
	/**
	 * Movement Base Info
	*/
	MovementBaseInfo: string;
	/**
	 * Movement Mode Info
	*/
	MovementModeInfo: string;
	/**
	 * Path Following Info
	*/
	PathFollowingInfo: string;
	/**
	 * Current AITask
	*/
	CurrentAITask: string;
	/**
	 * Current AIState
	*/
	CurrentAIState: string;
	/**
	 * Current AIAssets
	*/
	CurrentAIAssets: string;
	/**
	 * Gameplay Tasks State
	*/
	GameplayTasksState: string;
	/**
	 * Nav Data Info
	*/
	NavDataInfo: string;
	/**
	 * Ability Info
	*/
	AbilityInfo: string;
	/**
	 * Montage Info
	*/
	MontageInfo: string;
	/**
	 * Brain Component Name
	*/
	BrainComponentName: string;
	/**
	 * Brain Component String
	*/
	BrainComponentString: string;
	/**
	 * Blackboard Rep Data
	*/
	BlackboardRepData: number[];
	/**
	 * Begin path replication data
	*/
	PathPoints: Vector[];
	/**
	 * Path Corridor Data
	*/
	PathCorridorData: number[];
	/**
	 * End path replication data
	*/
	NavmeshRepData: number[];
	/**
	 * Begin EQS replication data
	*/
	EQSRepData: number[];
	/**
	 * End EQS replication data
	*/
	SensingComponentLocation: Vector;
	/**
	 * Next Path Point Index
	*/
	NextPathPointIndex: number;
	/**
	 * Is Using Path Following
	*/
	bIsUsingPathFollowing: boolean;
	/**
	 * Is Using Character
	*/
	bIsUsingCharacter: boolean;
	/**
	 * Is Using Behavior Tree
	*/
	bIsUsingBehaviorTree: boolean;
	/**
	 * Is Using Abilities
	*/
	bIsUsingAbilities: boolean;
	/**
	 * controller related stuff
	*/
	TargetActor: Actor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayDebuggingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingComponent;
	static C(Other: UObject): GameplayDebuggingComponent;
	/**
	 * Server Replicate Data
	*/
	ServerReplicateData(InMessage: any,DataView: any): void;
	/**
	 * Server Discard Navmesh Data
	*/
	ServerDiscardNavmeshData(): void;
	/**
	 * Server Collect Navmesh Data
	*/
	ServerCollectNavmeshData(TargetLocation: Vector_NetQuantize10): void;
	/**
	 * On Rep Update Navmesh
	*/
	OnRep_UpdateNavmesh(): void;
	/**
	 * On Rep Update EQS
	*/
	OnRep_UpdateEQS(): void;
	/**
	 * On Rep Update Blackboard
	*/
	OnRep_UpdateBlackboard(): void;
	/**
	 * On Rep Path Corridor Data
	*/
	OnRep_PathCorridorData(): void;
	/**
	 * On Cycle Details View
	*/
	OnCycleDetailsView(): void;
	/**
	 * Client Enable Target Selection
	*/
	ClientEnableTargetSelection(bEnable: boolean): void;
}

declare class GameplayDebuggingHUDComponent extends Actor { 
	/**
	 * Menu Start X
	*/
	MenuStartX: number;
	/**
	 * Menu Start Y
	*/
	MenuStartY: number;
	/**
	 * Debug Info Start X
	*/
	DebugInfoStartX: number;
	/**
	 * Debug Info Start Y
	*/
	DebugInfoStartY: number;
	/**
	 * Canvas
	*/
	Canvas: Canvas;
	/**
	 * Player Owner
	*/
	PlayerOwner: PlayerController;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingHUDComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingHUDComponent;
	static C(Other: UObject): GameplayDebuggingHUDComponent;
}

declare class GameplayDebuggingControllerComponent extends ActorComponent { 
	/**
	 * On Debug AIHUD
	*/
	OnDebugAIHUD: GameplayDebuggingHUDComponent;
	/**
	 * Debug AITarget Actor
	*/
	DebugAITargetActor: Actor;
	/**
	 * AIDebug View Input Component
	*/
	AIDebugViewInputComponent: InputComponent;
	/**
	 * Debug Camera Input Component
	*/
	DebugCameraInputComponent: InputComponent;
	/**
	 * Activation Key
	*/
	ActivationKey: InputChord;
	/**
	 * Category Zero Bind
	*/
	CategoryZeroBind: InputChord;
	/**
	 * Category One Bind
	*/
	CategoryOneBind: InputChord;
	/**
	 * Category Two Bind
	*/
	CategoryTwoBind: InputChord;
	/**
	 * Category Three Bind
	*/
	CategoryThreeBind: InputChord;
	/**
	 * Category Four Bind
	*/
	CategoryFourBind: InputChord;
	/**
	 * Category Five Bind
	*/
	CategoryFiveBind: InputChord;
	/**
	 * Category Six Bind
	*/
	CategorySixBind: InputChord;
	/**
	 * Category Seven Bind
	*/
	CategorySevenBind: InputChord;
	/**
	 * Category Eight Bind
	*/
	CategoryEightBind: InputChord;
	/**
	 * Category Nine Bind
	*/
	CategoryNineBind: InputChord;
	/**
	 * Cycle Details View Bind
	*/
	CycleDetailsViewBind: InputChord;
	/**
	 * Debug Camera Bind
	*/
	DebugCameraBind: InputChord;
	/**
	 * On Screen Debug Messages Bind
	*/
	OnScreenDebugMessagesBind: InputChord;
	/**
	 * Game HUDBind
	*/
	GameHUDBind: InputChord;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayDebuggingControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingControllerComponent;
	static C(Other: UObject): GameplayDebuggingControllerComponent;
}

declare class GaneplayDebuggerProxyHUD extends HUD { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GaneplayDebuggerProxyHUD;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GaneplayDebuggerProxyHUD;
	static C(Other: UObject): GaneplayDebuggerProxyHUD;
}

declare class GameplayDebuggingReplicator extends Actor { 
	/**
	 * Debug Component Class Name
	*/
	DebugComponentClassName: string;
	/**
	 * Debug Component HUDClass Name
	*/
	DebugComponentHUDClassName: string;
	/**
	 * Debug Component Controller Class Name
	*/
	DebugComponentControllerClassName: string;
	/**
	 * Max EQSQueries
	*/
	MaxEQSQueries: number;
	/**
	 * Debug Component
	*/
	DebugComponent: GameplayDebuggingComponent;
	/**
	 * Local Player Owner
	*/
	LocalPlayerOwner: PlayerController;
	/**
	 * Last Selected Actor to Debug
	*/
	LastSelectedActorToDebug: Actor;
	/**
	 * Is Global in World
	*/
	bIsGlobalInWorld: boolean;
	/**
	 * Auto Activate
	*/
	bAutoActivate: boolean;
	/**
	 * Over Head
	*/
	OverHead: boolean;
	/**
	 * Basic
	*/
	Basic: boolean;
	/**
	 * Behavior Tree
	*/
	BehaviorTree: boolean;
	/**
	 * EQS
	*/
	EQS: boolean;
	/**
	 * Enable EQSOn HUD
	*/
	EnableEQSOnHUD: boolean;
	/**
	 * Active EQSIndex
	*/
	ActiveEQSIndex: number;
	/**
	 * Perception
	*/
	Perception: boolean;
	/**
	 * Game View 1
	*/
	GameView1: boolean;
	/**
	 * Game View 2
	*/
	GameView2: boolean;
	/**
	 * Game View 3
	*/
	GameView3: boolean;
	/**
	 * Game View 4
	*/
	GameView4: boolean;
	/**
	 * Game View 5
	*/
	GameView5: boolean;
	/**
	 * Default Texture Red
	*/
	DefaultTexture_Red: Texture2D;
	/**
	 * Default Texture Green
	*/
	DefaultTexture_Green: Texture2D;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingReplicator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingReplicator;
	static C(Other: UObject): GameplayDebuggingReplicator;
	/**
	 * Server Set Actor to Debug
	*/
	ServerSetActorToDebug(InActor: Actor): void;
	/**
	 * Server Replicate Message
	*/
	ServerReplicateMessage(Actor: Actor,InMessage: any,DataView: any): void;
	/**
	 * On Rep Auto Activate
	*/
	OnRep_AutoActivate(): void;
	/**
	 * Client Replicate Message
	*/
	ClientReplicateMessage(Actor: Actor,InMessage: any,DataView: any): void;
	/**
	 * Client Enable Target Selection
	*/
	ClientEnableTargetSelection(bEnable: boolean,Context: PlayerController): void;
	/**
	 * Client Auto Activate
	*/
	ClientAutoActivate(): void;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	/**
	 * Node Instance
	*/
	NodeInstance: UObject;
	/**
	 * Class Data
	*/
	ClassData: GraphNodeClassData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = string;
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	/**
	 * Logic Mode
	*/
	LogicMode: EDecoratorLogicMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	/**
	 * increased with every graph rebuild, used to refresh data from subtrees
	*/
	ModCounter: number;
	/**
	 * Is Using Mod Counter
	*/
	bIsUsingModCounter: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraph;
	static C(Other: UObject): BehaviorTreeGraph;
}

declare class BehaviorTreeGraphNode extends AIGraphNode { 
	/**
	 * only some of behavior tree nodes support decorators
	*/
	Decorators: BehaviorTreeGraphNode[];
	/**
	 * only some of behavior tree nodes support services
	*/
	Services: BehaviorTreeGraphNode[];
	/**
	 * if set, this node was injected from subtree and shouldn't be edited
	*/
	bInjectedNode: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SimpleParallel;
	static C(Other: UObject): BehaviorTreeGraphNode_SimpleParallel;
}

declare class BehaviorTreeGraphNode_CompositeDecorator extends BehaviorTreeGraphNode { 
	/**
	 * The logic graph for this decorator (returning a boolean)
	*/
	BoundGraph: EdGraph;
	/**
	 * Composite Name
	*/
	CompositeName: string;
	/**
	 * if set, all logic operations will be shown in description
	*/
	bShowOperations: boolean;
	/**
	 * updated with internal graph changes, set when decorators inside can abort flow
	*/
	bCanAbortFlow: boolean;
	/**
	 * Parent Node Instance
	*/
	ParentNodeInstance: BTCompositeNode;
	/**
	 * Cached Description
	*/
	CachedDescription: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	/**
	 * Blackboard Asset
	*/
	BlackboardAsset: BlackboardData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlackboardDataFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BlackboardDataFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	/**
	 * PC Boolean
	*/
	PC_Boolean: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	/**
	 * Spawn Parm Pins
	*/
	SpawnParmPins: EdGraphPin[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject): K2Node_LatentGameplayTaskCall;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject): K2Node_LeaderboardQuery;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	/**
	 * Is this a sampler for the default SourceTexture or the AdditionalSourceTextures list?
	*/
	bSampleAdditionalTextures: boolean;
	/**
	 * This is the slot index into the AdditionalSourceTextures array
	*/
	AdditionalSlotIndex: number;
	/**
	 * Friendly label for the texture slot, displayed in the Sprite Editor if not empty
	*/
	SlotDisplayName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject): MaterialExpressionSpriteTextureSampler;
}

declare class PaperBatchComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperBatchComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperBatchComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperBatchComponent;
	static C(Other: UObject): PaperBatchComponent;
}

declare class PaperSpriteSocket { 
	/**
	 * Transform in pivot space (*not* texture space)
	*/
	LocalTransform: Transform;
	/**
	 * Name of the socket
	*/
	SocketName: string;
}

declare type ESpriteCollisionMode = string;
declare type ESpritePivotMode = string;
declare type ESpriteShapeType = string;
declare class SpriteGeometryShape { 
	/**
	 * The type of this piece of geometry
	*/
	ShapeType: ESpriteShapeType;
	/**
	 * Vertices for the polygon (valid for Box and Polygon, but empty for Circle)
	*/
	Vertices: Vector2D[];
	/**
	 * Size of the box or major/minor dimensions of the circle
	 * Note: Only valid when GeometryType is Box or Circle
	*/
	BoxSize: Vector2D;
	/**
	 * Center of the box or circle, acts as the pivot point for polygons (but may not be at the center of them)
	*/
	BoxPosition: Vector2D;
	/**
	 * Rotation of the shape (in degrees)
	*/
	Rotation: number;
	/**
	 * For Polygon geometry, this tells us if the winding should be negative (CW) regardless of the order in Vertices
	*/
	bNegativeWinding: boolean;
}

declare type ESpritePolygonMode = string;
declare class SpriteGeometryCollection { 
	/**
	 * List of shapes
	*/
	Shapes: SpriteGeometryShape[];
	/**
	 * The geometry type (automatic / manual)
	*/
	GeometryType: ESpritePolygonMode;
	/**
	 * Size of a single subdivision (in pixels) in X (for Diced mode)
	*/
	PixelsPerSubdivisionX: number;
	/**
	 * Size of a single subdivision (in pixels) in Y (for Diced mode)
	*/
	PixelsPerSubdivisionY: number;
	/**
	 * Experimental: Hint to the triangulation routine that extra vertices should be preserved
	*/
	bAvoidVertexMerging: boolean;
	/**
	 * Alpha threshold for a transparent pixel (range 0..1, anything equal or below this value will be considered unimportant)
	*/
	AlphaThreshold: number;
	/**
	 * Amount to detail to consider when shrink-wrapping (range 0..1, 0 = low detail, 1 = high detail)
	*/
	DetailAmount: number;
	/**
	 * This is the threshold below which multiple vertices will be merged together when doing shrink-wrapping.  Higher values result in fewer vertices.
	*/
	SimplifyEpsilon: number;
}

declare type EPaperSpriteAtlasPadding = string;
declare class PaperSpriteAtlasSlot { 
	/**
	 * Sprite Ref
	*/
	SpriteRef: any;
	/**
	 * Atlas Index
	*/
	AtlasIndex: number;
	/**
	 * X
	*/
	X: number;
	/**
	 * Y
	*/
	Y: number;
	/**
	 * Width
	*/
	Width: number;
	/**
	 * Height
	*/
	Height: number;
}

declare class PaperSpriteAtlas extends UObject { 
	/**
	 * Description of this atlas, which shows up in the content browser tooltip
	*/
	AtlasDescription: string;
	/**
	 * Maximum atlas page width (single pages might be smaller)
	*/
	MaxWidth: number;
	/**
	 * Maximum atlas page height (single pages might be smaller)
	*/
	MaxHeight: number;
	/**
	 * Maximum atlas page height (single pages might be smaller)
	*/
	MipCount: number;
	/**
	 * The type of padding performed on this atlas
	*/
	PaddingType: EPaperSpriteAtlasPadding;
	/**
	 * The number of pixels of padding
	*/
	Padding: number;
	/**
	 * Compression settings to use on atlas texture
	*/
	CompressionSettings: TextureCompressionSettings;
	/**
	 * Texture filtering mode when sampling these textures
	*/
	Filter: TextureFilter;
	/**
	 * List of generated atlas textures
	*/
	GeneratedTextures: Texture[];
	/**
	 * The GUID of the atlas group, used to match up sprites that belong to this group even thru atlas renames
	*/
	AtlasGUID: Guid;
	/**
	 * Slots in the atlas
	*/
	bRebuildAtlas: boolean;
	/**
	 * Slots in the atlas
	*/
	AtlasSlots: PaperSpriteAtlasSlot[];
	/**
	 * Track the number of incremental builds
	*/
	NumIncrementalBuilds: number;
	/**
	 * Values used when building this atlas
	*/
	BuiltWidth: number;
	/**
	 * Built Height
	*/
	BuiltHeight: number;
	/**
	 * Built Padding
	*/
	BuiltPadding: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlas;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlas;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlas;
	static C(Other: UObject): PaperSpriteAtlas;
}

declare class PaperSprite extends UObject { 
	/**
	 * Position with SourceTexture (in pixels)
	*/
	SourceUV: Vector2D;
	/**
	 * Dimensions within SourceTexture (in pixels)
	*/
	SourceDimension: Vector2D;
	/**
	 * Position within BakedSourceTexture
	*/
	BakedSourceUV: Vector2D;
	/**
	 * Origin within SourceImage, prior to atlasing
	*/
	OriginInSourceImageBeforeTrimming: Vector2D;
	/**
	 * Dimensions of SourceImage
	*/
	SourceImageDimensionBeforeTrimming: Vector2D;
	/**
	 * This texture is trimmed, consider the values above
	*/
	bTrimmedInSourceImage: boolean;
	/**
	 * This texture is rotated in the atlas
	*/
	bRotatedInSourceImage: boolean;
	/**
	 * Dimension of the texture when this sprite was created
	 * Used when the sprite is resized at some point
	*/
	SourceTextureDimension: Vector2D;
	/**
	 * The source texture that the sprite comes from
	*/
	SourceTexture: Texture2D;
	/**
	 * Additional source textures for other slots
	*/
	AdditionalSourceTextures: Texture[];
	/**
	 * Baked Source Texture
	*/
	BakedSourceTexture: Texture2D;
	/**
	 * The material to use on a sprite instance if not overridden (this is the default material when only one is being used, and is the translucent/masked material for Diced render geometry, slot 0)
	*/
	DefaultMaterial: MaterialInterface;
	/**
	 * The alternate material to use on a sprite instance if not overridden (this is only used for Diced render geometry, and will be the opaque material in that case, slot 1)
	*/
	AlternateMaterial: MaterialInterface;
	/**
	 * List of sockets on this sprite
	*/
	Sockets: PaperSpriteSocket[];
	/**
	 * Collision domain (no collision, 2D, or 3D)
	*/
	SpriteCollisionDomain: ESpriteCollisionMode;
	/**
	 * The scaling factor between pixels and Unreal units (cm) (e.g., 0.64 would make a 64 pixel wide sprite take up 100 cm)
	*/
	PixelsPerUnrealUnit: number;
	/**
	 * Baked physics data.
	*/
	BodySetup: BodySetup;
	/**
	 * Pivot mode
	*/
	PivotMode: ESpritePivotMode;
	/**
	 * Custom pivot point (relative to the sprite rectangle)
	*/
	CustomPivotPoint: Vector2D;
	/**
	 * Should the pivot be snapped to a pixel boundary?
	*/
	bSnapPivotToPixelGrid: boolean;
	/**
	 * Custom collision geometry polygons (in texture space)
	*/
	CollisionGeometry: SpriteGeometryCollection;
	/**
	 * The extrusion thickness of collision geometry when using a 3D collision domain
	*/
	CollisionThickness: number;
	/**
	 * Custom render geometry polygons (in texture space)
	*/
	RenderGeometry: SpriteGeometryCollection;
	/**
	 * Spritesheet group that this sprite belongs to
	*/
	AtlasGroup: PaperSpriteAtlas;
	/**
	 * The point at which the alternate material takes over in the baked render data (or INDEX_NONE)
	*/
	AlternateMaterialSplitIndex: number;
	/**
	 * Baked render data (triangle vertices, stored as XY UV tuples)
	 *   XY is the XZ position in world space, relative to the pivot
	 *   UV is normalized (0..1)
	 *   There should always be a multiple of three elements in this array
	*/
	BakedRenderData: Vector4[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSprite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSprite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject): PaperSprite;
}

declare class PaperFlipbookKeyFrame { 
	/**
	 * Sprite
	*/
	Sprite: PaperSprite;
	/**
	 * Frame Run
	*/
	FrameRun: number;
}

declare type EFlipbookCollisionMode = string;
declare class PaperFlipbook extends UObject { 
	/**
	 * The nominal frame rate to play this flipbook animation back at
	*/
	FramesPerSecond: number;
	/**
	 * The set of key frames for this flipbook animation (each one has a duration and a sprite to display)
	*/
	KeyFrames: PaperFlipbookKeyFrame[];
	/**
	 * The material to use on a flipbook player instance if not overridden
	*/
	DefaultMaterial: MaterialInterface;
	/**
	 * Collision source
	*/
	CollisionSource: EFlipbookCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbook;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbook;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	static C(Other: UObject): PaperFlipbook;
	/**
	 * Is the specified Index within the valid range of key frames?
	*/
	IsValidKeyFrameIndex(Index: number): boolean;
	/**
	 * Returns the total duration in seconds
	*/
	GetTotalDuration(): number;
	/**
	 * Returns the sprite at the specified time (in seconds), or nullptr if none exists.
	 * When bClampToEnds is true, it will choose the first or last sprite if the time is out of range.
	*/
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	/**
	 * Returns the sprite at the specified keyframe index, or nullptr if none exists
	*/
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	/**
	 * Returns the number of key frames
	*/
	GetNumKeyFrames(): number;
	/**
	 * Returns the total number of frames
	*/
	GetNumFrames(): number;
	/**
	 * Returns the keyframe index that covers the specified time (in seconds), or INDEX_NONE if none exists.
	 * When bClampToEnds is true, it will choose the first or last keyframe if the time is out of range.
	*/
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
}

declare class PaperFlipbookComponent extends MeshComponent { 
	/**
	 * Flipbook currently being played
	*/
	SourceFlipbook: PaperFlipbook;
	/**
	 * DEPRECATED in 4.5: The material override for this flipbook component (if any); replaced by the Materials array inherited from UMeshComponent
	*/
	Material: MaterialInterface;
	/**
	 * Current play rate of the flipbook
	*/
	PlayRate: number;
	/**
	 * Whether the flipbook should loop when it reaches the end, or stop
	*/
	bLooping: boolean;
	/**
	 * If playback should move the current position backwards instead of forwards
	*/
	bReversePlayback: boolean;
	/**
	 * Are we currently playing (moving Position)
	*/
	bPlaying: boolean;
	/**
	 * Current position in the timeline
	*/
	AccumulatedTime: number;
	/**
	 * Last frame index calculated
	*/
	CachedFrameIndex: number;
	/**
	 * Vertex color to apply to the frames
	*/
	SpriteColor: LinearColor;
	/**
	 * The cached body setup
	*/
	CachedBodySetup: BodySetup;
	/**
	 * Event called whenever a non-looping flipbook finishes playing (either reaching the beginning or the end, depending on the play direction)
	*/
	OnFinishedPlaying: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookComponent;
	static C(Other: UObject): PaperFlipbookComponent;
	/**
	 * Stop playback of flipbook
	*/
	Stop(): void;
	/**
	 * Set color of the sprite
	*/
	SetSpriteColor(NewColor: LinearColor): void;
	/**
	 * Sets the new play rate for this flipbook
	*/
	SetPlayRate(NewRate: number): void;
	/**
	 * Jump to a position in the flipbook (expressed in frames). If bFireEvents is true, event functions will fire, otherwise they will not.
	*/
	SetPlaybackPositionInFrames(NewFramePosition: number,bFireEvents: boolean): void;
	/**
	 * Jump to a position in the flipbook (expressed in seconds). If bFireEvents is true, event functions will fire, otherwise they will not.
	*/
	SetPlaybackPosition(NewPosition: number,bFireEvents: boolean): void;
	/**
	 * Set the new playback position time to use
	*/
	SetNewTime(NewTime: number): void;
	/**
	 * true means we should loop, false means we should not.
	*/
	SetLooping(bNewLooping: boolean): void;
	/**
	 * Change the flipbook used by this instance (will reset the play time to 0 if it is a new flipbook).
	*/
	SetFlipbook(NewFlipbook: PaperFlipbook): boolean;
	/**
	 * Start playback of flipbook in reverse from the end
	*/
	ReverseFromEnd(): void;
	/**
	 * Start playback of flipbook in reverse
	*/
	Reverse(): void;
	/**
	 * Start playback of flipbook from the start
	*/
	PlayFromStart(): void;
	/**
	 * Start playback of flipbook
	*/
	Play(): void;
	/**
	 * On Rep Source Flipbook
	*/
	OnRep_SourceFlipbook(OldFlipbook: PaperFlipbook): void;
	/**
	 * Get whether we are reversing or not
	*/
	IsReversing(): boolean;
	/**
	 * Get whether this flipbook is playing or not.
	*/
	IsPlaying(): boolean;
	/**
	 * Get whether we are looping or not
	*/
	IsLooping(): boolean;
	/**
	 * Get Sprite Material
	*/
	GetSpriteMaterial(): MaterialInterface;
	/**
	 * Get the current play rate for this flipbook
	*/
	GetPlayRate(): number;
	/**
	 * Get the current playback position (in frames) of the flipbook
	*/
	GetPlaybackPositionInFrames(): number;
	/**
	 * Get the current playback position (in seconds) of the flipbook
	*/
	GetPlaybackPosition(): number;
	/**
	 * Get length of the flipbook (in frames)
	*/
	GetFlipbookLengthInFrames(): number;
	/**
	 * Get length of the flipbook (in seconds)
	*/
	GetFlipbookLength(): number;
	/**
	 * Get the nominal framerate that the flipbook will be played back at (ignoring PlayRate), in frames per second
	*/
	GetFlipbookFramerate(): number;
	/**
	 * Gets the flipbook used by this instance.
	*/
	GetFlipbook(): PaperFlipbook;
}

declare class PaperCharacter extends Character { 
	/**
	 * The main skeletal mesh associated with this Character (optional sub-object).
	*/
	Sprite: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperCharacter;
	static C(Other: UObject): PaperCharacter;
}

declare class PaperFlipbookActor extends Actor { 
	/**
	 * Render Component
	*/
	RenderComponent: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	/**
	 * Transform
	*/
	Transform: Matrix;
	/**
	 * Source Sprite
	*/
	SourceSprite: PaperSprite;
	/**
	 * Vertex Color
	*/
	VertexColor: Color;
	/**
	 * Material Index
	*/
	MaterialIndex: number;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	/**
	 * Array of materials used by the instances
	*/
	InstanceMaterials: MaterialInterface[];
	/**
	 * Array of instances
	*/
	PerInstanceSpriteData: SpriteInstanceData[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	static C(Other: UObject): PaperGroupedSpriteComponent;
	/**
	 * Update the transform for the instance specified. Instance is given in local space of this component unless bWorldSpace is set.  Returns True on success.
	*/
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean): boolean;
	/**
	 * Update the color for the instance specified. Returns True on success.
	*/
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	/**
	 * Sort all instances by their world space position along the specified axis
	*/
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	/**
	 * Remove the instance specified. Returns True on success.
	*/
	RemoveInstance(InstanceIndex: number): boolean;
	/**
	 * Get the transform for the instance specified. Instance is returned in local space of this component unless bWorldSpace is set.  Returns True on success.
	*/
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	/**
	 * Get the number of instances in this component
	*/
	GetInstanceCount(): number;
	/**
	 * Clear all instances being rendered by this component
	*/
	ClearInstances(): void;
	/**
	 * Add an instance to this component. Transform can be given either in the local space of this component or world space.
	*/
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
}

declare class PaperGroupedSpriteActor extends Actor { 
	/**
	 * Render Component
	*/
	RenderComponent: PaperGroupedSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteActor;
	static C(Other: UObject): PaperGroupedSpriteActor;
}

declare class PaperRuntimeSettings extends UObject { 
	/**
	 * Enables experimental *incomplete and unsupported* texture atlas groups that sprites can be assigned to
	*/
	bEnableSpriteAtlasGroups: boolean;
	/**
	 * Enables experimental *incomplete and unsupported* 2D terrain spline editing. Note: You need to restart the editor when enabling this setting for the change to fully take effect.
	*/
	bEnableTerrainSplineEditing: boolean;
	/**
	 * Enables automatic resizing of various sprite data that is authored in texture space if the source texture gets resized (sockets, the pivot, render and collision geometry, etc...)
	*/
	bResizeSpriteDataToMatchTextures: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperRuntimeSettings;
	static C(Other: UObject): PaperRuntimeSettings;
}

declare class PaperSpriteComponent extends MeshComponent { 
	/**
	 * The sprite asset used by this component
	*/
	SourceSprite: PaperSprite;
	/**
	 * DEPRECATED in 4.4: The material override for this sprite component (if any); replaced by the Materials array inherited from UMeshComponent
	*/
	MaterialOverride: MaterialInterface;
	/**
	 * The color of the sprite (passed to the sprite material as a vertex color)
	*/
	SpriteColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	static C(Other: UObject): PaperSpriteComponent;
	/**
	 * Set color of the sprite
	*/
	SetSpriteColor(NewColor: LinearColor): void;
	/**
	 * Change the PaperSprite used by this instance.
	*/
	SetSprite(NewSprite: PaperSprite): boolean;
	/**
	 * Gets the PaperSprite used by this instance.
	*/
	GetSprite(): PaperSprite;
}

declare class PaperSpriteActor extends Actor { 
	/**
	 * Render Component
	*/
	RenderComponent: PaperSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject): PaperSpriteActor;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainSplineComponent;
	static C(Other: UObject): PaperTerrainSplineComponent;
}

declare class PaperTerrainMaterialRule { 
	/**
	 * The sprite to use at the 'left' (closest to spline start) edge of the terrain segment
	*/
	StartCap: PaperSprite;
	/**
	 * A set of sprites to randomly choose to fill up the interior space between the caps in a terrain segment
	*/
	Body: PaperSprite[];
	/**
	 * The sprite to use at the 'right' (closest to spline end) edge of the terrain segment
	*/
	EndCap: PaperSprite;
	/**
	 * Minimum slope angle (in degrees) to apply this rule
	*/
	MinimumAngle: number;
	/**
	 * Maximum slope angle (in degrees) to apply this rule
	*/
	MaximumAngle: number;
	/**
	 * If true, collision is enabled for sections matching this rule
	*/
	bEnableCollision: boolean;
	/**
	 * How much should the collision be lofted from the spline (positive values go out from the spline, negative values go in to the spline)
	*/
	CollisionOffset: number;
	/**
	 * Specify a draw order for different materials in a spline. Smaller draw orders are drawn first, negative values are allowed.
	*/
	DrawOrder: number;
	/**
	 * Readable description for the rule (unused anywhere, just for clarity when editing the material)
	*/
	Description: string;
}

declare class PaperTerrainMaterial extends DataAsset { 
	/**
	 * Rules
	*/
	Rules: PaperTerrainMaterialRule[];
	/**
	 * The sprite to use for an interior region fill
	*/
	InteriorFill: PaperSprite;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainMaterial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainMaterial;
	static C(Other: UObject): PaperTerrainMaterial;
}

declare class PaperTerrainComponent extends PrimitiveComponent { 
	/**
	 * The terrain material to apply to this component (set of rules for which sprites are used on different surfaces or the interior)
	*/
	TerrainMaterial: PaperTerrainMaterial;
	/**
	 * Closed Spline
	*/
	bClosedSpline: boolean;
	/**
	 * Filled Spline
	*/
	bFilledSpline: boolean;
	/**
	 * Associated Spline
	*/
	AssociatedSpline: PaperTerrainSplineComponent;
	/**
	 * Random seed used for choosing which spline meshes to use.
	*/
	RandomSeed: number;
	/**
	 * The overlap amount between segments
	*/
	SegmentOverlapAmount: number;
	/**
	 * The color of the terrain (passed to the sprite material as a vertex color)
	*/
	TerrainColor: LinearColor;
	/**
	 * Number of steps per spline segment to place in the reparameterization table
	*/
	ReparamStepsPerSegment: number;
	/**
	 * Collision domain (no collision, 2D (experimental), or 3D)
	*/
	SpriteCollisionDomain: ESpriteCollisionMode;
	/**
	 * The extrusion thickness of collision geometry when using a 3D collision domain
	*/
	CollisionThickness: number;
	/**
	 * Description of collision
	*/
	CachedBodySetup: BodySetup;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	static C(Other: UObject): PaperTerrainComponent;
	/**
	 * Set color of the terrain
	*/
	SetTerrainColor(NewColor: LinearColor): void;
}

declare class PaperTerrainActor extends Actor { 
	/**
	 * Dummy Root
	*/
	DummyRoot: SceneComponent;
	/**
	 * Spline Component
	*/
	SplineComponent: PaperTerrainSplineComponent;
	/**
	 * Render Component
	*/
	RenderComponent: PaperTerrainComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject): PaperTerrainActor;
}

declare class IntMargin { 
	/**
	 * Holds the margin to the left.
	*/
	Left: number;
	/**
	 * Holds the margin to the top.
	*/
	Top: number;
	/**
	 * Holds the margin to the right.
	*/
	Right: number;
	/**
	 * Holds the margin to the bottom.
	*/
	Bottom: number;
}

declare class PaperTileMetadata { 
	/**
	 * A tag that can be used for grouping and categorizing (consider using it as the index into a UDataTable asset).
	*/
	UserDataName: string;
	/**
	 * Collision data for the tile
	*/
	CollisionData: SpriteGeometryCollection;
	/**
	 * Indexes into the Terrains array of the owning tile set, in counterclockwise order starting from top-left
	 * 0xFF indicates no membership.
	*/
	TerrainMembership: number;
}

declare class PaperTileSetTerrain { 
	/**
	 * Terrain Name
	*/
	TerrainName: string;
	/**
	 * Center Tile Index
	*/
	CenterTileIndex: number;
}

declare class PaperTileSet extends UObject { 
	/**
	 * The width and height of a single tile (in pixels)
	*/
	TileSize: IntPoint;
	/**
	 * The tile sheet texture associated with this tile set
	*/
	TileSheet: Texture2D;
	/**
	 * The amount of padding around the border of the tile sheet (in pixels)
	*/
	BorderMargin: IntMargin;
	/**
	 * The amount of padding between tiles in the tile sheet (in pixels)
	*/
	PerTileSpacing: IntPoint;
	/**
	 * The drawing offset for tiles from this set (in pixels)
	*/
	DrawingOffset: IntPoint;
	/**
	 * The background color displayed in the tile set viewer
	*/
	BackgroundColor: LinearColor;
	/**
	 * Cached width of this tile set (in tiles)
	*/
	WidthInTiles: number;
	/**
	 * Cached height of this tile set (in tiles)
	*/
	HeightInTiles: number;
	/**
	 * Allocated width of the per-tile data
	*/
	AllocatedWidth: number;
	/**
	 * Allocated height of the per-tile data
	*/
	AllocatedHeight: number;
	/**
	 * Per-tile information
	*/
	PerTileData: PaperTileMetadata[];
	/**
	 * Terrain information
	 * @TODO: TileMapTerrains: (EditAnywhere, Category=Sprite)
	*/
	Terrains: PaperTileSetTerrain[];
	/**
	 * Tile Width
	*/
	TileWidth: number;
	/**
	 * Tile Height
	*/
	TileHeight: number;
	/**
	 * Margin
	*/
	Margin: number;
	/**
	 * Spacing
	*/
	Spacing: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject): PaperTileSet;
}

declare class PaperTileInfo { 
	/**
	 * The tile set that this tile comes from
	*/
	TileSet: PaperTileSet;
	/**
	 * This is the index of the current tile within the tile set
	*/
	PackedTileIndex: number;
}

declare class PaperTileLayer extends UObject { 
	/**
	 * Name of the layer
	*/
	LayerName: string;
	/**
	 * Width of the layer (in tiles)
	*/
	LayerWidth: number;
	/**
	 * Height of the layer (in tiles)
	*/
	LayerHeight: number;
	/**
	 * Is this layer currently hidden in the editor?
	*/
	bHiddenInEditor: boolean;
	/**
	 * Should this layer be hidden in the game?
	*/
	bHiddenInGame: boolean;
	/**
	 * Should this layer generate collision?
	 * Note: This only has an effect if the owning tile map has collision enabled
	*/
	bLayerCollides: boolean;
	/**
	 * Should this layer use a custom thickness for generated collision instead of the thickness setting in the tile map?
	*/
	bOverrideCollisionThickness: boolean;
	/**
	 * Should this layer use a custom offset for generated collision instead of the layer drawing offset?
	*/
	bOverrideCollisionOffset: boolean;
	/**
	 * The override thickness of the collision for this layer (when bOverrideCollisionThickness is set)
	*/
	CollisionThicknessOverride: number;
	/**
	 * The override offset of the collision for this layer (when bOverrideCollisionOffset is set)
	 * Note: This is measured in Unreal Units (cm) from the center of the tile map component, not from the previous layer.
	*/
	CollisionOffsetOverride: number;
	/**
	 * The color of this layer (multiplied with the tile map color and passed to the material as a vertex color)
	*/
	LayerColor: LinearColor;
	/**
	 * The allocated width of the tile data (used to handle resizing without data loss)
	*/
	AllocatedWidth: number;
	/**
	 * The allocated height of the tile data (used to handle resizing without data loss)
	*/
	AllocatedHeight: number;
	/**
	 * The allocated tile data
	*/
	AllocatedCells: PaperTileInfo[];
	/**
	 * Tile Set
	*/
	TileSet: PaperTileSet;
	/**
	 * Allocated Grid
	*/
	AllocatedGrid: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileLayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileLayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject): PaperTileLayer;
}

declare type ETileMapProjectionMode = string;
declare class PaperTileMap extends UObject { 
	/**
	 * Width of map (in tiles)
	*/
	MapWidth: number;
	/**
	 * Height of map (in tiles)
	*/
	MapHeight: number;
	/**
	 * Width of one tile (in pixels)
	*/
	TileWidth: number;
	/**
	 * Height of one tile (in pixels)
	*/
	TileHeight: number;
	/**
	 * The scaling factor between pixels and Unreal units (cm) (e.g., 0.64 would make a 64 pixel wide tile take up 100 cm)
	*/
	PixelsPerUnrealUnit: number;
	/**
	 * The Z-separation incurred as you travel in X (not strictly applied, batched tiles will be put at the same Z level)
	*/
	SeparationPerTileX: number;
	/**
	 * The Z-separation incurred as you travel in Y (not strictly applied, batched tiles will be put at the same Z level)
	*/
	SeparationPerTileY: number;
	/**
	 * The Z-separation between each layer of the tile map
	*/
	SeparationPerLayer: number;
	/**
	 * Last tile set that was selected when editing the tile map
	*/
	SelectedTileSet: any;
	/**
	 * The material to use on a tile map instance if not overridden
	*/
	Material: MaterialInterface;
	/**
	 * The list of layers
	*/
	TileLayers: PaperTileLayer[];
	/**
	 * The extrusion thickness of collision geometry when using a 3D collision domain
	*/
	CollisionThickness: number;
	/**
	 * Collision domain (no collision, 2D, or 3D)
	*/
	SpriteCollisionDomain: ESpriteCollisionMode;
	/**
	 * Tile map type
	*/
	ProjectionMode: ETileMapProjectionMode;
	/**
	 * The vertical height of the sides of the hex cell for a tile.
	 * Note: This value should already be included as part of the TileHeight, and is purely cosmetic; it only affects how the tile cursor preview is drawn.
	*/
	HexSideLength: number;
	/**
	 * Baked physics data.
	*/
	BodySetup: BodySetup;
	/**
	 * Importing data and options used for this tile map
	*/
	AssetImportData: AssetImportData;
	/**
	 * The currently selected layer index
	*/
	SelectedLayerIndex: number;
	/**
	 * The background color displayed in the tile map editor
	*/
	BackgroundColor: LinearColor;
	/**
	 * The naming index to start at when trying to create a new layer
	*/
	LayerNameIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMap;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMap;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMap;
	static C(Other: UObject): PaperTileMap;
}

declare class PaperTileMapComponent extends MeshComponent { 
	/**
	 * Map Width
	*/
	MapWidth: number;
	/**
	 * Map Height
	*/
	MapHeight: number;
	/**
	 * Tile Width
	*/
	TileWidth: number;
	/**
	 * Tile Height
	*/
	TileHeight: number;
	/**
	 * Default Layer Tile Set
	*/
	DefaultLayerTileSet: PaperTileSet;
	/**
	 * Material
	*/
	Material: MaterialInterface;
	/**
	 * Tile Layers
	*/
	TileLayers: PaperTileLayer[];
	/**
	 * The color of the tile map (multiplied with the per-layer color and passed to the material as a vertex color)
	*/
	TileMapColor: LinearColor;
	/**
	 * The index of the single layer to use if enabled
	*/
	UseSingleLayerIndex: number;
	/**
	 * Should we draw a single layer?
	*/
	bUseSingleLayer: boolean;
	/**
	 * The tile map used by this component
	*/
	TileMap: PaperTileMap;
	/**
	 * Should this component show a tile grid when the component is selected?
	*/
	bShowPerTileGridWhenSelected: boolean;
	/**
	 * Should this component show an outline around each layer when the component is selected?
	*/
	bShowPerLayerGridWhenSelected: boolean;
	/**
	 * Should this component show an outline around the first layer when the component is not selected?
	*/
	bShowOutlineWhenUnselected: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapComponent;
	static C(Other: UObject): PaperTileMapComponent;
	/**
	 * Sets the tile map global color multiplier (multiplied with the per-layer color and passed to the material as a vertex color)
	*/
	SetTileMapColor(NewColor: LinearColor): void;
	/**
	 * Change the PaperTileMap used by this instance.
	*/
	SetTileMap(NewTileMap: PaperTileMap): boolean;
	/**
	 * Modifies the contents of a specified tile cell (Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets)
	 * Note: Does not update collision by default, call RebuildCollision after all edits have been done in a frame if necessary
	*/
	SetTile(X: number,Y: number,Layer: number,NewValue: PaperTileInfo): void;
	/**
	 * Sets the per-layer color multiplier for a specific layer (multiplied with the tile map color and passed to the material as a vertex color)
	 * Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets
	*/
	SetLayerColor(NewColor: LinearColor,Layer: number): void;
	/**
	 * Sets the collision thickness for a specific layer
	 * Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets
	*/
	SetLayerCollision(Layer: number,bHasCollision: boolean,bOverrideThickness: boolean,CustomThickness: number,bOverrideOffset: boolean,CustomOffset: number,bRebuildCollision: boolean): void;
	/**
	 * Sets the default thickness for any layers that don't override the collision thickness
	 * Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets
	*/
	SetDefaultCollisionThickness(Thickness: number,bRebuildCollision: boolean): void;
	/**
	 * Resizes the tile map (Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets)
	*/
	ResizeMap(NewWidthInTiles: number,NewHeightInTiles: number): void;
	/**
	 * Rebuilds collision for the tile map
	*/
	RebuildCollision(): void;
	/**
	 * Does this component own the tile map (is it instanced instead of being an asset reference)?
	*/
	OwnsTileMap(): boolean;
	/**
	 * Makes the tile map asset pointed to by this component editable.  Nothing happens if it was already instanced, but
	 * if the tile map is an asset reference, it is cloned to make a unique instance.
	*/
	MakeTileMapEditable(): void;
	/**
	 * Returns the polygon for the specified tile (will be 4 or 6 vertices as a rectangle, diamond, or hexagon)
	*/
	GetTilePolygon(TileX: number,TileY: number,Points?: Vector[],LayerIndex?: number,bWorldSpace?: boolean): {Points: Vector[]};
	/**
	 * Gets the tile map global color multiplier (multiplied with the per-layer color and passed to the material as a vertex color)
	*/
	GetTileMapColor(): LinearColor;
	/**
	 * Returns the position of the top left corner of the specified tile
	*/
	GetTileCornerPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	/**
	 * Returns the position of the center of the specified tile
	*/
	GetTileCenterPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	/**
	 * Returns the contents of a specified tile cell
	*/
	GetTile(X: number,Y: number,Layer: number): PaperTileInfo;
	/**
	 * Returns the size of the tile map
	*/
	GetMapSize(MapWidth?: number,MapHeight?: number,NumLayers?: number): {MapWidth: number, MapHeight: number, NumLayers: number};
	/**
	 * Gets the per-layer color multiplier for a specific layer (multiplied with the tile map color and passed to the material as a vertex color)
	*/
	GetLayerColor(Layer: number): LinearColor;
	/**
	 * Creates a new tile map of the specified size, replacing the TileMap reference (or dropping the previous owned one)
	 * @param MapWidth Width of the map (in tiles)
	 * @param MapHeight Height of the map (in tiles)
	 * @param TileWidth Width of one tile (in pixels)
	 * @param TileHeight Height of one tile (in pixels)
	 * @param bCreateLayer Should an empty layer be created?
	*/
	CreateNewTileMap(MapWidth: number,MapHeight: number,TileWidth: number,TileHeight: number,PixelsPerUnrealUnit: number,bCreateLayer: boolean): void;
	/**
	 * Creates and adds a new layer to the tile map
	 * Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets
	*/
	AddNewLayer(): PaperTileLayer;
}

declare class PaperTileMapActor extends Actor { 
	/**
	 * Render Component
	*/
	RenderComponent: PaperTileMapComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static C(Other: UObject): TileMapBlueprintLibrary;
	/**
	 * Creates a tile from the specified information
	*/
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	/**
	 * Returns the user data name for the specified tile, or NAME_None if there is no user-specified data
	*/
	static GetTileUserData(Tile: PaperTileInfo): string;
	/**
	 * Returns the transform for a tile
	*/
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	/**
	 * Breaks out the information for a tile
	*/
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
}

declare class DirectoryWatcher extends UObject { 
	/**
	 * Added
	*/
	Added: string[];
	/**
	 * Modified
	*/
	Modified: string[];
	/**
	 * Removed
	*/
	Removed: string[];
	/**
	 * On Changed
	*/
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DirectoryWatcher;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DirectoryWatcher;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	static C(Other: UObject): DirectoryWatcher;
	/**
	 * Watch
	*/
	Watch(Directory: string): void;
	/**
	 * Unwatch
	*/
	Unwatch(): void;
	/**
	 * Contains
	*/
	Contains(File: string): boolean;
}

declare class JavascriptContext extends UObject { 
	/**
	 * Paths
	*/
	Paths: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptContext;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptContext;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	static C(Other: UObject): JavascriptContext;
	/**
	 * Write DTS
	*/
	WriteDTS(Target: string): boolean;
	/**
	 * Write Aliases
	*/
	WriteAliases(Target: string): boolean;
	/**
	 * Set Context Id
	*/
	SetContextId(Name: string): void;
	/**
	 * Set as Debug Context
	*/
	SetAsDebugContext(): void;
	/**
	 * Run Script
	*/
	RunScript(Script: string,bOutput: boolean): string;
	/**
	 * Run File
	*/
	RunFile(Filename: string): void;
	/**
	 * Read Script File
	*/
	ReadScriptFile(Filename: string): string;
	/**
	 * Is Debug Context
	*/
	IsDebugContext(): boolean;
	/**
	 * Get Script File Full Path
	*/
	GetScriptFileFullPath(Filename: string): string;
	/**
	 * Expose
	*/
	Expose(Name: string,UObject: UObject): void;
}

declare class JavascriptComponent extends ActorComponent { 
	/**
	 * Script Source File
	*/
	ScriptSourceFile: string;
	/**
	 * Active Within Editor
	*/
	bActiveWithinEditor: boolean;
	/**
	 * Javascript Context
	*/
	JavascriptContext: JavascriptContext;
	/**
	 * On Tick
	*/
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	/**
	 * On Begin Play
	*/
	OnBeginPlay: UnrealEngineDelegate<() => void>;
	/**
	 * On End Play
	*/
	OnEndPlay: UnrealEngineDelegate<() => void>;
	/**
	 * On Invoke
	*/
	OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	static C(Other: UObject): JavascriptComponent;
	/**
	 * Invoke
	*/
	Invoke(Name: string): void;
	/**
	 * Begin UActorComponent interface.
	*/
	ForceGC(): void;
	/**
	 * Expose
	*/
	Expose(ExposedAs: string,UObject: UObject): void;
}

declare class JavascriptDelegate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptDelegate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptDelegate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	static C(Other: UObject): JavascriptDelegate;
	/**
	 * Fire
	*/
	Fire(): void;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject): JavascriptGeneratedFunction;
}

declare class JavascriptIsolate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptIsolate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptIsolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	static C(Other: UObject): JavascriptIsolate;
	/**
	 * Create Context
	*/
	CreateContext(): JavascriptContext;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static C(Other: UObject): JavascriptLibrary;
	/**
	 * Set Mobility
	*/
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	/**
	 * Set Mobile
	*/
	static SetMobile(SceneComponent: SceneComponent): void;
	/**
	 * Set Client Travel
	*/
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	/**
	 * Is Play in Preview
	*/
	static IsPlayInPreview(World: World): boolean;
	/**
	 * Is Play in Editor
	*/
	static IsPlayInEditor(World: World): boolean;
	/**
	 * Is Game World
	*/
	static IsGameWorld(World: World): boolean;
	/**
	 * Handle Seamless Travel Player
	*/
	static HandleSeamlessTravelPlayer(GameMode: GameMode,C?: Controller): {C: Controller};
	/**
	 * Get Outermost
	*/
	static GetOutermost(UObject: UObject): UObject;
	/**
	 * Get Outer
	*/
	static GetOuter(UObject: UObject): UObject;
	/**
	 * Get Name
	*/
	static GetName(UObject: UObject): string;
	/**
	 * Get Dynamic Binding
	*/
	static GetDynamicBinding(Outer: UnrealEngineClass,BindingObjectClass: UnrealEngineClass): DynamicBlueprintBinding;
	/**
	 * Get Blueprint Generated Class from Path
	*/
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	/**
	 * Get Blueprint Generated Class
	*/
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	/**
	 * Find Component Object by Name
	*/
	static FindComponentObjectByName(Actor: Actor,InName: string): ActorComponent;
	/**
	 * Create Package
	*/
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	/**
	 * Add Dynamic Binding
	*/
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	/**
	 * Actor Get World
	*/
	static Actor_GetWorld(Actor: Actor): World;
}

declare class JavascriptObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject): JavascriptObject;
}

declare class JavascriptProcess extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProcess;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptProcess;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	static C(Other: UObject): JavascriptProcess;
	/**
	 * Write to Pipe
	*/
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	/**
	 * Wait
	*/
	Wait(): void;
	/**
	 * Terminate
	*/
	Terminate(KillTree: boolean): void;
	/**
	 * Read from Pipe
	*/
	ReadFromPipe(): string;
	/**
	 * Read Array from Pipe
	*/
	ReadArrayFromPipe(Array?: number[]): {Array: number[], $: boolean};
	/**
	 * Is Running
	*/
	IsRunning(): boolean;
	/**
	 * Get Return Code
	*/
	GetReturnCode(ReturnCode?: number): {ReturnCode: number, $: boolean};
	/**
	 * Create
	*/
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	/**
	 * Close
	*/
	Close(): void;
}

declare class JavascriptListView extends ListView { 
	/**
	 * Javascript Context
	*/
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptListView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptListView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	static C(Other: UObject): JavascriptListView;
	/**
	 * Refreshes the list
	*/
	RequestListRefresh(): void;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnDoubleClick(UObject: UObject): void;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnClick(UObject: UObject): void;
}

declare class JavascriptTileView extends TileView { 
	/**
	 * Javascript Context
	*/
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTileView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTileView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	static C(Other: UObject): JavascriptTileView;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnDoubleClick(UObject: UObject): void;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnClick(UObject: UObject): void;
}

declare class JavascriptUMGBlueprintLibrary extends UserWidget { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static C(Other: UObject): JavascriptUMGBlueprintLibrary;
	/**
	 * Slate Color Use Subdued Foreground
	*/
	static SlateColor_UseSubduedForeground(): SlateColor;
	/**
	 * Slate Color Use Foreground
	*/
	static SlateColor_UseForeground(): SlateColor;
}

declare class JavascriptUMGLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static C(Other: UObject): JavascriptUMGLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	/**
	 * Javascript Context
	*/
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	static C(Other: UObject): JavascriptWidget;
	/**
	 * Set Root Widget
	*/
	SetRootWidget(Widget: Widget): void;
	/**
	 * Has Valid Cached Widget
	*/
	static HasValidCachedWidget(Widget: Widget): boolean;
	/**
	 * Call Synchronize Properties
	*/
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
}

declare type EJavascriptHttpRequestStatus = string;
declare class JavascriptHttpRequest extends UObject { 
	/**
	 * On Complete
	*/
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	/**
	 * On Progress
	*/
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptHttpRequest;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptHttpRequest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	static C(Other: UObject): JavascriptHttpRequest;
	/**
	 * Sets the verb used by the request.
	 * Eg. (GET, PUT, POST)
	 * Should be set before calling ProcessRequest.
	 * If not specified then a GET is assumed.
	 * @param Verb - verb to use.
	*/
	SetVerb(Verb: string): void;
	/**
	 * Sets the URL for the request
	 * Eg. (http://my.domain.com/something.ext?key=value&key2=value).
	 * Must be set before calling ProcessRequest.
	 * @param URL - URL to use.
	*/
	SetURL(URL: string): void;
	/**
	 * Sets optional header info.
	 * Content-Length is the only header set for you.
	 * Required headers depends on the request itself.
	 * Eg. "multipart/form-data" needed for a form post
	 * @param HeaderName - Name of the header (ie, Content-Type)
	 * @param HeaderValue - Value of the header
	*/
	SetHeader(HeaderName: string,HeaderValue: string): void;
	/**
	 * Sets the content of the request (optional data).
	 * Usually only set for POST requests.
	 * @param ContentPayload - payload to set.
	*/
	SetContentFromMemory(): void;
	/**
	 * Sets the content of the request as a string encoded as UTF8.
	 * @param ContentString - payload to set.
	*/
	SetContentAsString(ContentString: string): void;
	/**
	 * Called to begin processing the request.
	 * OnProcessRequestComplete delegate is always called when the request completes or on error if it is bound.
	 * A request can be re-used but not while still being processed.
	 * @return if the request was successfully started.
	*/
	ProcessRequest(): boolean;
	/**
	 * Gets the verb (GET, PUT, POST) used by the request.
	 * @return the verb string
	*/
	GetVerb(): string;
	/**
	 * Get the current status of the request being processed
	 * @return the current status
	*/
	GetStatus(): EJavascriptHttpRequestStatus;
	/**
	 * Gets the response code returned by the requested server.
	 * See EHttpResponseCodes for known response codes
	 * @return the response code.
	*/
	GetResponseCode(): number;
	/**
	 * Gets the time that it took for the server to fully respond to the request.
	 * @return elapsed time in seconds.
	*/
	GetElapsedTime(): number;
	/**
	 * Get Content to Memory
	*/
	GetContentToMemory(): void;
	/**
	 * Get Content Length
	*/
	GetContentLength(): number;
	/**
	 * Returns the payload as a string, assuming the payload is UTF8.
	 * @return the payload as a string.
	*/
	GetContentAsString(): string;
	/**
	 * Called to cancel a request that is still being processed
	*/
	CancelRequest(): void;
}

declare class UdpMessagingSettings extends UObject { 
	/**
	 * Whether the UDP transport channel is enabled.
	*/
	EnableTransport: boolean;
	/**
	 * The IP endpoint to listen to and send packets from.
	*/
	UnicastEndpoint: string;
	/**
	 * The IP endpoint to send multicast packets to.
	*/
	MulticastEndpoint: string;
	/**
	 * The time-to-live (TTL) for sent multicast packets.
	*/
	MulticastTimeToLive: number;
	/**
	 * The IP endpoints of static devices.
	 * Use this setting to list devices on other subnets, such as mobile phones on a WiFi network.
	*/
	StaticEndpoints: string[];
	/**
	 * Whether the UDP tunnel is enabled.
	*/
	EnableTunnel: boolean;
	/**
	 * The IP endpoint to listen to and send packets from.
	*/
	TunnelUnicastEndpoint: string;
	/**
	 * The IP endpoint to send multicast packets to.
	*/
	TunnelMulticastEndpoint: string;
	/**
	 * The IP endpoints of remote tunnel nodes.
	 * Use this setting to connect to remote tunnel services.
	*/
	RemoteTunnelEndpoints: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UdpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UdpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject): UdpMessagingSettings;
}

declare class SubstanceImageInput extends UObject { 
	/**
	 * Color channels compression (0: disable, 1: auto, 2-99: manual)
	*/
	CompressionRGB: number;
	/**
	 * Alpha channel compression (0: disable, 1: auto, 2-99: manual)
	*/
	CompressionAlpha: number;
	/**
	 * Size X
	*/
	SizeX: number;
	/**
	 * Size Y
	*/
	SizeY: number;
	/**
	 * Num Components
	*/
	NumComponents: number;
	/**
	 * Source File Path
	*/
	SourceFilePath: string;
	/**
	 * Source File Timestamp
	*/
	SourceFileTimestamp: string;
	/**
	 * Consumers
	*/
	Consumers: SubstanceGraphInstance[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceImageInput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceImageInput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImageInput;
	static C(Other: UObject): SubstanceImageInput;
}

declare class SubstanceSettings extends UObject { 
	/**
	 * todo: allow per-platform setting
	*/
	MemoryBudgetMb: number;
	/**
	 * CPUCores
	*/
	CPUCores: number;
	/**
	 * Async Load Mip Clip
	*/
	AsyncLoadMipClip: number;
	/**
	 * Default Generation Mode
	*/
	DefaultGenerationMode: ESubstanceGenerationMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceSettings;
	static C(Other: UObject): SubstanceSettings;
}

declare class SubstanceUtility extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceUtility;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceUtility;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceUtility;
	static C(Other: UObject): SubstanceUtility;
	/**
	 * Start the synchronous rendering of a Substance
	*/
	static SyncRendering(InstancesToRender: SubstanceGraphInstance): void;
	/**
	 * Set the output size input of the specified GraphInstance
	*/
	static SetGraphInstanceOutputSize(GraphInstance: SubstanceGraphInstance,Width: number,Height: number): void;
	/**
	 * Set the output size input of the specified GraphInstance
	*/
	static SetGraphInstanceOutputSize(GraphInstance: SubstanceGraphInstance,Width: ESubstanceTextureSize,Height: ESubstanceTextureSize): void;
	/**
	 * Reset the input values of a Substance Graph Instance to their default values
	*/
	static ResetInputParameters(GraphInstance: SubstanceGraphInstance): void;
	/**
	 * Get the textures (from enabled outputs) of a Substance Graph Instance
	*/
	static GetSubstanceTextures(GraphInstance: SubstanceGraphInstance): SubstanceTexture2D[];
	/**
	 * Get the list of Substance Graph Instances used by a material
	*/
	static GetSubstances(Material: MaterialInterface): SubstanceGraphInstance[];
	/**
	 * Get the current rendering progress of the Substances currently loaded ([0, 1.0])
	*/
	static GetSubstanceLoadingProgress(): number;
	/**
	 * Create a copy of Substance Graph Instance
	*/
	static DuplicateGraphInstance(WorldContextObject: UObject,GraphInstance: SubstanceGraphInstance): SubstanceGraphInstance;
	/**
	 * Create the textures of a Substance Graph Instance (enable its outputs) using their indices
	*/
	static CreateInstanceOutputs(WorldContextObject: UObject,GraphInstance: SubstanceGraphInstance,OutputIndices: number[]): void;
	/**
	 * Create a dynamic Substance Graph Instance (no outputs enabled by default)
	*/
	static CreateGraphInstance(WorldContextObject: UObject,Factory: SubstanceInstanceFactory,GraphDescIndex: number,InstanceName: string): SubstanceGraphInstance;
	/**
	 * Copy the inputs values from a Substance Graph Instance to another one
	*/
	static CopyInputParameters(SourceGraphInstance: SubstanceGraphInstance,DestGraphInstance: SubstanceGraphInstance): void;
	/**
	 * Queue a Substance Graph Instance in the renderer
	*/
	static AsyncRendering(InstancesToRender: SubstanceGraphInstance): void;
}

declare class FlipbookEditorSettings extends UObject { 
	/**
	 * Background color in the flipbook editor
	*/
	BackgroundColor: Color;
	/**
	 * Should the grid be shown by default when the editor is opened?
	*/
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FlipbookEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FlipbookEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = string;
declare class PaperExtractSpritesSettings extends UObject { 
	/**
	 * Sprite extract mode
	*/
	SpriteExtractMode: ESpriteExtractMode;
	/**
	 * The color of the sprite boundary outlines
	*/
	OutlineColor: LinearColor;
	/**
	 * Apply a tint to the texture in the viewport to improve outline visibility in this editor
	*/
	ViewportTextureTint: LinearColor;
	/**
	 * The viewport background color
	*/
	BackgroundColor: LinearColor;
	/**
	 * The name of the sprite that will be created. {0} will get replaced by the sprite number.
	*/
	NamingTemplate: string;
	/**
	 * The number to start naming with
	*/
	NamingStartIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject): PaperExtractSpritesSettings;
}

declare class PaperExtractSpriteGridSettings extends UObject { 
	/**
	 * The width of each sprite in grid mode
	*/
	CellWidth: number;
	/**
	 * The height of each sprite in grid mode
	*/
	CellHeight: number;
	/**
	 * Number of cells extracted horizontally. Can be used to limit the number of sprites extracted. Set to 0 to extract all sprites
	*/
	NumCellsX: number;
	/**
	 * Number of cells extracted vertically. Can be used to limit the number of sprites extracted. Set to 0 to extract all sprites
	*/
	NumCellsY: number;
	/**
	 * Margin from the left of the texture to the first sprite
	*/
	MarginX: number;
	/**
	 * Margin from the top of the texture to the first sprite
	*/
	MarginY: number;
	/**
	 * Horizontal spacing between sprites
	*/
	SpacingX: number;
	/**
	 * Vertical spacing between sprites
	*/
	SpacingY: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject): PaperFlipbookFactory;
}

declare class PaperImporterSettings extends UObject { 
	/**
	 * Should the source texture be scanned when creating new sprites to determine the appropriate material? (if false, the Default Masked Material is always used)
	*/
	bPickBestMaterialWhenCreatingSprites: boolean;
	/**
	 * Should the source texture be scanned when creating new tile maps (from a tile set or via importing) to determine the appropriate material? (if false, the Default Masked Material is always used)
	*/
	bPickBestMaterialWhenCreatingTileMaps: boolean;
	/**
	 * Can opaque materials be applied as part of the 'best material' analysis?
	*/
	bAnalysisCanUseOpaque: boolean;
	/**
	 * The default scaling factor between pixels and Unreal units (cm) to use for newly created sprite assets (e.g., 0.64 would make a 64 pixel wide sprite take up 100 cm)
	*/
	DefaultPixelsPerUnrealUnit: number;
	/**
	 * A list of default suffixes to use when looking for associated normal maps while importing sprites or creating sprites from textures
	*/
	NormalMapTextureSuffixes: string[];
	/**
	 * The default suffix to remove (if present) from a texture name before looking for an associated normal map using NormalMapTextureSuffixes
	*/
	BaseMapTextureSuffixes: string[];
	/**
	 * The default texture group for imported sprite textures, tile sheets, etc... (typically set to UI for 'modern 2D' or 2D pixels for 'retro 2D')
	*/
	DefaultSpriteTextureGroup: TextureGroup;
	/**
	 * Should texture compression settings be overridden on imported sprite textures, tile sheets, etc...?
	*/
	bOverrideTextureCompression: boolean;
	/**
	 * Compression settings to use when building the texture.
	 * The default texture group for imported sprite textures, tile sheets, etc... (typically set to UI for 'modern 2D' or 2D pixels for 'retro 2D')
	*/
	DefaultSpriteTextureCompression: TextureCompressionSettings;
	/**
	 * The unlit default masked material for newly created sprites (masked means binary opacity: things are either opaque or see-thru, with nothing in between)
	*/
	UnlitDefaultMaskedMaterialName: StringAssetReference;
	/**
	 * The unlit default translucent material for newly created sprites (translucent means smooth opacity which can vary continuously from 0..1, but translucent rendering is more expensive that opaque or masked rendering and has different sorting rules)
	*/
	UnlitDefaultTranslucentMaterialName: StringAssetReference;
	/**
	 * The unlit default opaque material for newly created sprites
	*/
	UnlitDefaultOpaqueMaterialName: StringAssetReference;
	/**
	 * The lit default masked material for newly created sprites (masked means binary opacity: things are either opaque or see-thru, with nothing in between)
	*/
	LitDefaultMaskedMaterialName: StringAssetReference;
	/**
	 * The lit default translucent material for newly created sprites (translucent means smooth opacity which can vary continuously from 0..1, but translucent rendering is more expensive that opaque or masked rendering and has different sorting rules)
	*/
	LitDefaultTranslucentMaterialName: StringAssetReference;
	/**
	 * The lit default opaque material for newly created sprites
	*/
	LitDefaultOpaqueMaterialName: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperImporterSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperImporterSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject): PaperSpriteFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject): PaperFlipbookThumbnailRenderer;
}

declare class PaperTileMapFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	/**
	 * Object being promoted to an asset
	*/
	AssetToRename: PaperTileMap;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	/**
	 * Background color in the sprite editor
	*/
	BackgroundColor: Color;
	/**
	 * Should the grid be shown by default when the editor is opened?
	*/
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpriteEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpriteEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	/**
	 * Source Name
	*/
	SourceName: string;
	/**
	 * Imported Tile Set
	*/
	ImportedTileSet: any;
	/**
	 * Imported Texture
	*/
	ImportedTexture: any;
}

declare class TileMapAssetImportData extends AssetImportData { 
	/**
	 * Tile Set Map
	*/
	TileSetMap: TileSetImportMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapAssetImportData;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	/**
	 * Default background color for new tile map assets
	*/
	DefaultBackgroundColor: Color;
	/**
	 * Should the grid be shown by default when the editor is opened?
	*/
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	/**
	 * Default background color for new tile set assets
	*/
	DefaultBackgroundColor: Color;
	/**
	 * Should the grid be shown by default when the editor is opened?
	*/
	bShowGridByDefault: boolean;
	/**
	 * The amount to extrude out from the edge of each tile (in pixels)
	*/
	ExtrusionAmount: number;
	/**
	 * Should we pad the conditioned texture to the next power of 2?
	*/
	bPadToPowerOf2: boolean;
	/**
	 * Should we use transparent black or white when filling the texture areas that aren't covered by tiles?
	*/
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSetEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSetEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	/**
	 * Source tile sheet texture
	*/
	SourceTileSet: PaperTileSet;
	/**
	 * The amount to extrude out from each tile (in pixels)
	*/
	ExtrusionAmount: number;
	/**
	 * Should we pad the texture to the next power of 2?
	*/
	bPadToPowerOf2: boolean;
	/**
	 * Should we use transparent black or white when filling the texture areas that aren't covered by tiles?
	*/
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject): TileSheetPaddingFactory;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject): ContentBrowserFrontEndFilterExtension;
}

declare type ELocalizationTargetConflictStatus = string;
declare class GatherTextSearchDirectory { 
	/**
	 * Path
	*/
	Path: string;
}

declare class GatherTextExcludePath { 
	/**
	 * Pattern
	*/
	Pattern: string;
}

declare class GatherTextFileExtension { 
	/**
	 * Pattern
	*/
	Pattern: string;
}

declare class GatherTextFromTextFilesConfiguration { 
	/**
	 * If enabled, text from text files will be gathered according to this configuration.
	*/
	IsEnabled: boolean;
	/**
	 * The paths of directories to be searched recursively for text files, specified relative to the project's root, which may be parsed for text to gather.
	*/
	SearchDirectories: GatherTextSearchDirectory[];
	/**
	 * Text files whose paths match these wildcard patterns will be excluded from gathering.
	*/
	ExcludePathWildcards: GatherTextExcludePath[];
	/**
	 * Text files whose names match these wildcard patterns may be parsed for text to gather.
	*/
	FileExtensions: GatherTextFileExtension[];
}

declare class GatherTextIncludePath { 
	/**
	 * Pattern
	*/
	Pattern: string;
}

declare class GatherTextFromPackagesConfiguration { 
	/**
	 * If enabled, text from packages will be gathered according to this configuration.
	*/
	IsEnabled: boolean;
	/**
	 * Packages whose paths match these wildcard patterns, specified relative to the project's root, may be processed for gathering.
	*/
	IncludePathWildcards: GatherTextIncludePath[];
	/**
	 * Packages whose paths match these wildcard patterns will be excluded from gathering.
	*/
	ExcludePathWildcards: GatherTextExcludePath[];
	/**
	 * Packages whose names match these wildcard patterns may be processed for text to gather.
	*/
	FileExtensions: GatherTextFileExtension[];
	/**
	 * If enable, data that is specified as editor-only may be processed for gathering.
	*/
	ShouldGatherFromEditorOnlyData: boolean;
}

declare class MetaDataKeyName { 
	/**
	 * Name
	*/
	Name: string;
}

declare class MetaDataTextKeyPattern { 
	/**
	 * Pattern
	*/
	Pattern: string;
}

declare class MetaDataKeyGatherSpecification { 
	/**
	 * The metadata key for which values will be gathered as text.
	*/
	MetaDataKey: MetaDataKeyName;
	/**
	 * The localization namespace in which the gathered text will be output.
	*/
	TextNamespace: string;
	/**
	 * The pattern which will be formatted to form the localization key for the metadata value gathered as text.
	 *       Placeholder - Description
	 *       {FieldPath} - The fully qualified name of the object upon which the metadata resides.
	 *       {MetaDataValue} - The value associated with the metadata key.
	*/
	TextKeyPattern: MetaDataTextKeyPattern;
}

declare class GatherTextFromMetaDataConfiguration { 
	/**
	 * If enabled, metadata will be gathered according to this configuration.
	*/
	IsEnabled: boolean;
	/**
	 * Metadata from source files whose paths match these wildcard patterns, specified relative to the project's root, may be processed for gathering.
	*/
	IncludePathWildcards: GatherTextIncludePath[];
	/**
	 * Metadata from source files whose paths match these wildcard patterns will be excluded from gathering.
	*/
	ExcludePathWildcards: GatherTextExcludePath[];
	/**
	 * Specifications for how to gather text from specific metadata keys.
	*/
	KeySpecifications: MetaDataKeyGatherSpecification[];
	/**
	 * If enable, data that is specified as editor-only may be processed for gathering.
	*/
	ShouldGatherFromEditorOnlyData: boolean;
}

declare class CultureStatistics { 
	/**
	 * The ISO name for this culture.
	*/
	CultureName: string;
	/**
	 * The estimated number of words that have been localized for this culture.
	*/
	WordCount: any;
}

declare class LocalizationTargetSettings { 
	/**
	 * Unique name for the target.
	*/
	Name: string;
	/**
	 * Guid
	*/
	Guid: Guid;
	/**
	 * Whether the target has outstanding conflicts that require resolution.
	*/
	ConflictStatus: ELocalizationTargetConflictStatus;
	/**
	 * Text present in these targets will not be duplicated in this target.
	*/
	TargetDependencies: Guid[];
	/**
	 * Text present in these manifests will not be duplicated in this target.
	*/
	AdditionalManifestDependencies: FilePath[];
	/**
	 * The names of modules which must be loaded when gathering text. Use to gather from packages or metadata sourced from a module that isn't the primary game module.
	*/
	RequiredModuleNames: string[];
	/**
	 * Parameters for defining what text is gathered from text files and how.
	*/
	GatherFromTextFiles: GatherTextFromTextFilesConfiguration;
	/**
	 * Parameters for defining what text is gathered from packages and how.
	*/
	GatherFromPackages: GatherTextFromPackagesConfiguration;
	/**
	 * Parameters for defining what text is gathered from metadata and how.
	*/
	GatherFromMetaData: GatherTextFromMetaDataConfiguration;
	/**
	 * The index of the native culture among the supported cultures.
	*/
	NativeCultureIndex: number;
	/**
	 * Cultures for which the source text is being localized for.
	*/
	SupportedCulturesStatistics: CultureStatistics[];
}

declare class LocalizationTarget extends UObject { 
	/**
	 * Settings
	*/
	Settings: LocalizationTargetSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationTarget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationTarget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationTarget;
	static C(Other: UObject): LocalizationTarget;
}

declare class LocalizationTargetSet extends UObject { 
	/**
	 * Target Objects
	*/
	TargetObjects: LocalizationTarget[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationTargetSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationTargetSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationTargetSet;
	static C(Other: UObject): LocalizationTargetSet;
}

declare class LocalizationSettings extends UObject { 
	/**
	 * Engine Target Set
	*/
	EngineTargetSet: LocalizationTargetSet;
	/**
	 * Engine Targets Settings
	*/
	EngineTargetsSettings: LocalizationTargetSettings[];
	/**
	 * Game Target Set
	*/
	GameTargetSet: LocalizationTargetSet;
	/**
	 * Game Targets Settings
	*/
	GameTargetsSettings: LocalizationTargetSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationSettings;
	static C(Other: UObject): LocalizationSettings;
}

declare class InternationalizationExportSettings extends UObject { 
	/**
	 * Which cultures should be exported
	*/
	CulturesToGenerate: string[];
	/**
	 * The commandlet to run
	*/
	CommandletClass: string;
	/**
	 * Source for the localization data
	*/
	SourcePath: string;
	/**
	 * Destination for the localization data
	*/
	DestinationPath: string;
	/**
	 * Filename for the Portable Object format file
	*/
	PortableObjectName: string;
	/**
	 * Name of the manifest file
	*/
	ManifestName: string;
	/**
	 * Name of the archive file
	*/
	ArchiveName: string;
	/**
	 * Whether or not to export localization data
	*/
	bExportLoc: boolean;
	/**
	 * Whether or not to import localization data
	*/
	bImportLoc: boolean;
	/**
	 * Whether or not to use culture path
	*/
	bUseCultureDirectory: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationExportSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationExportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	/**
	 * Bool submit translation picker changes to Localization Service
	*/
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationPickerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationPickerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject): TranslationPickerSettings;
}

declare class TranslationChange { 
	/**
	 * The changelist of this change
	*/
	Version: string;
	/**
	 * Date of this change //, meta=(DisplayName = "Date & Time"))
	*/
	DateAndTime: DateTime;
	/**
	 * Source at time of this change
	*/
	Source: string;
	/**
	 * Translation at time of this change
	*/
	Translation: string;
}

declare class TranslationContextInfo { 
	/**
	 * The key specified in LOCTEXT
	*/
	Key: string;
	/**
	 * What file and line this translation is from
	*/
	Context: string;
	/**
	 * List of previous versions of the source text for this context
	*/
	Changes: TranslationChange[];
}

declare class TranslationUnit extends UObject { 
	/**
	 * The localization namespace for this translation
	*/
	Namespace: string;
	/**
	 * Original text from the source language
	*/
	Source: string;
	/**
	 * Translations
	*/
	Translation: string;
	/**
	 * Contexts the source was found in
	*/
	Contexts: TranslationContextInfo[];
	/**
	 * Whether the changes have been reviewed
	*/
	HasBeenReviewed: boolean;
	/**
	 * If this Translation Unit had a different translation before import, it will be stored here
	*/
	TranslationBeforeImport: string;
	/**
	 * Optional: Which Locres File this translation is in
	*/
	LocresPath: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationUnit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject): TranslationUnit;
}

declare class WidgetReflectorNodeBase extends UObject { 
	/**
	 * The geometry of the widget
	*/
	Geometry: Geometry;
	/**
	 * Node entries for the widget's children
	*/
	ChildNodes: WidgetReflectorNodeBase[];
	/**
	 * A tint that is applied to text in order to provide visual hints
	*/
	Tint: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetReflectorNodeBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetReflectorNodeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetReflectorNodeBase;
	static C(Other: UObject): WidgetReflectorNodeBase;
}

declare class LiveWidgetReflectorNode extends WidgetReflectorNodeBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LiveWidgetReflectorNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LiveWidgetReflectorNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveWidgetReflectorNode;
	static C(Other: UObject): LiveWidgetReflectorNode;
}

declare class SnapshotWidgetReflectorNode extends WidgetReflectorNodeBase { 
	/**
	 * The type string of the widget at the point it was passed to Initialize
	*/
	CachedWidgetType: string;
	/**
	 * The visibility string of the widget at the point it was passed to Initialize
	*/
	CachedWidgetVisibilityText: string;
	/**
	 * The human readable location (source file for C++ widgets, asset name for UMG widgets) of the widget at the point it was passed to Initialize
	*/
	CachedWidgetReadableLocation: string;
	/**
	 * The name of the file that the widget was created from at the point it was passed to Initialize (for C++ widgets)
	*/
	CachedWidgetFile: string;
	/**
	 * The line number of the file that the widget was created from at the point it was passed to Initialize (for C++ widgets)
	*/
	CachedWidgetLineNumber: number;
	/**
	 * The name of the asset that the widget was created from at the point it was passed to Initialize (for UMG widgets)
	*/
	CachedWidgetAssetName: string;
	/**
	 * The desired size of the widget at the point it was passed to Initialize
	*/
	CachedWidgetDesiredSize: Vector2D;
	/**
	 * The foreground color of the widget at the point it was passed to Initialize
	*/
	CachedWidgetForegroundColor: SlateColor;
	/**
	 * The in-memory address of the widget at the point it was passed to Initialize
	*/
	CachedWidgetAddress: string;
	/**
	 * The enabled state of the widget at the point it was passed to Initialize
	*/
	CachedWidgetEnabled: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SnapshotWidgetReflectorNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SnapshotWidgetReflectorNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapshotWidgetReflectorNode;
	static C(Other: UObject): SnapshotWidgetReflectorNode;
}

declare class PaperSpriteSheet extends UObject { 
	/**
	 * The names of sprites during import
	*/
	SpriteNames: string[];
	/**
	 * Sprites
	*/
	Sprites: any[];
	/**
	 * The name of the default or diffuse texture during import
	*/
	TextureName: string;
	/**
	 * The asset that was created for TextureName
	*/
	Texture: Texture2D;
	/**
	 * The name of the normal map texture during import (if any)
	*/
	NormalMapTextureName: string;
	/**
	 * The asset that was created for NormalMapTextureName (if any)
	*/
	NormalMapTexture: Texture2D;
	/**
	 * Import data for this
	*/
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject): PaperTiledImporterFactory;
}

declare class RedisReply extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RedisReply;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RedisReply;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RedisReply;
	static C(Other: UObject): RedisReply;
	/**
	 * Is Nil
	*/
	IsNil(): boolean;
	/**
	 * Get String
	*/
	GetString(): string;
	/**
	 * Get Int
	*/
	GetInt(): number;
	/**
	 * Get Array
	*/
	GetArray(): RedisReply[];
}

declare class RedisConnection extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RedisConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RedisConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RedisConnection;
	static C(Other: UObject): RedisConnection;
	/**
	 * Connect with Timeout
	*/
	static ConnectWithTimeout(Address: string,Port: number,TimeoutSeconds: number): RedisConnection;
	/**
	 * Command
	*/
	Command(Command: string): RedisReply;
}

declare type EJavascriptTabRole = string;
declare class JavascriptEditorTab extends UObject { 
	/**
	 * On Spawn Tab
	*/
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	/**
	 * Tab Id
	*/
	TabId: string;
	/**
	 * Display Name
	*/
	DisplayName: string;
	/**
	 * Is Nomad
	*/
	bIsNomad: boolean;
	/**
	 * Role
	*/
	Role: EJavascriptTabRole;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTab;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTab;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	static C(Other: UObject): JavascriptEditorTab;
	/**
	 * Refresh
	*/
	Refresh(): void;
	/**
	 * Discard
	*/
	Discard(): void;
	/**
	 * Commit
	*/
	Commit(): void;
}

declare type EJavasrciptUserInterfaceActionType = string;
declare class JavascriptUICommand { 
	/**
	 * Id
	*/
	Id: string;
	/**
	 * Friendly Name
	*/
	FriendlyName: string;
	/**
	 * Description
	*/
	Description: string;
	/**
	 * Default Chord
	*/
	DefaultChord: InputChord;
	/**
	 * Action Type
	*/
	ActionType: EJavasrciptUserInterfaceActionType;
}

declare class JavascriptUICommands extends UObject { 
	/**
	 * On Execute Action
	*/
	OnExecuteAction: UnrealEngineDelegate<(Id: string) => void>;
	/**
	 * On Can Execute Action
	*/
	OnCanExecuteAction: UnrealEngineDelegate<(Id: string) => boolean>;
	/**
	 * On Is Action Checked
	*/
	OnIsActionChecked: UnrealEngineDelegate<(Id: string) => boolean>;
	/**
	 * On Is Action Button Visible
	*/
	OnIsActionButtonVisible: UnrealEngineDelegate<(Id: string) => boolean>;
	/**
	 * Commands
	*/
	Commands: JavascriptUICommand[];
	/**
	 * Context Name
	*/
	ContextName: string;
	/**
	 * Context Desc
	*/
	ContextDesc: string;
	/**
	 * Context Name Parent
	*/
	ContextNameParent: string;
	/**
	 * Style Set Name
	*/
	StyleSetName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUICommands;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUICommands;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	static C(Other: UObject): JavascriptUICommands;
	/**
	 * Refresh
	*/
	Refresh(): void;
	/**
	 * Discard
	*/
	Discard(): void;
	/**
	 * Commit
	*/
	Commit(): void;
}

declare type EJavascriptExtensionHook = string;
declare class JavascriptMenuExtension { 
	/**
	 * Extension Hook
	*/
	ExtensionHook: string;
	/**
	 * Hook Position
	*/
	HookPosition: EJavascriptExtensionHook;
}

declare class JavascriptUIExtender extends UObject { 
	/**
	 * Menu Extensions
	*/
	MenuExtensions: JavascriptMenuExtension[];
	/**
	 * Toolbar Extensions
	*/
	ToolbarExtensions: JavascriptMenuExtension[];
	/**
	 * On Hook
	*/
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUIExtender;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUIExtender;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static C(Other: UObject): JavascriptUIExtender;
	/**
	 * End Section
	*/
	static EndSection(): void;
	/**
	 * Bind
	*/
	static Bind(Commands: JavascriptUICommands): void;
	/**
	 * Begin Section
	*/
	static BeginSection(Name: string,Text: string): void;
	/**
	 * Toolbar
	*/
	static AddToolBarButton(Commands: JavascriptUICommands,Id: string): void;
	/**
	 * Add Menu Separator
	*/
	static AddMenuSeparator(): void;
	/**
	 * Menu
	*/
	static AddMenuEntry(Commands: JavascriptUICommands,Id: string): void;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	/**
	 * Toolkit FName
	*/
	ToolkitFName: string;
	/**
	 * Layout
	*/
	Layout: string;
	/**
	 * Base Toolkit Name
	*/
	BaseToolkitName: string;
	/**
	 * Toolkit Name
	*/
	ToolkitName: string;
	/**
	 * World Centric Tab Color Scale
	*/
	WorldCentricTabColorScale: LinearColor;
	/**
	 * World Centric Tab Prefix
	*/
	WorldCentricTabPrefix: string;
	/**
	 * Tabs
	*/
	Tabs: JavascriptEditorTab[];
	/**
	 * Commands
	*/
	Commands: JavascriptUICommands;
	/**
	 * Menu Extender
	*/
	MenuExtender: JavascriptUIExtender;
	/**
	 * Toolbar Extender
	*/
	ToolbarExtender: JavascriptUIExtender;
	/**
	 * Test Array
	*/
	TestArray: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	static C(Other: UObject): JavascriptAssetEditorToolkit;
	/**
	 * Refresh
	*/
	Refresh(): void;
	/**
	 * Discard
	*/
	Discard(): void;
	/**
	 * Commit
	*/
	Commit(): void;
}

declare class JavascriptAssetTypeActions extends UObject { 
	/**
	 * Actions Name
	*/
	ActionsName: string;
	/**
	 * Color
	*/
	Color: Color;
	/**
	 * Supported Class
	*/
	SupportedClass: UnrealEngineClass;
	/**
	 * Editor
	*/
	Editor: JavascriptAssetEditorToolkit;
	/**
	 * Actions
	*/
	Actions: JavascriptUIExtender;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	static C(Other: UObject): JavascriptAssetTypeActions;
	/**
	 * Refresh
	*/
	Refresh(): void;
	/**
	 * Discard
	*/
	Discard(): void;
	/**
	 * Commit
	*/
	Commit(): void;
}

declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static C(Other: UObject): JavascriptEditorLibrary;
	/**
	 * Set Heightmap Data from Memory
	*/
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	/**
	 * Set Alphamap Data from Memory
	*/
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	/**
	 * Redraw All Viewports
	*/
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	/**
	 * Get PIEWorld
	*/
	static GetPIEWorld(Engine: Engine): World;
	/**
	 * Get Layer Info by Name
	*/
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	/**
	 * Get Landscape Info
	*/
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	/**
	 * Get Landscape Extent
	*/
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	/**
	 * Get Heightmap Data to Memory
	*/
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	/**
	 * Get Editor World
	*/
	static GetEditorWorld(Engine: Engine): World;
	/**
	 * Get Alphamap Data to Memory
	*/
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
}

declare class JavascriptEditorMenu extends Widget { 
	/**
	 * On Hook
	*/
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorMenu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorMenu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorMenu;
	static C(Other: UObject): JavascriptEditorMenu;
	/**
	 * Refresh
	*/
	Refresh(): void;
	/**
	 * Add Pull Down Menu
	*/
	static AddPullDownMenu(Id: string,MenuLabel: string,Tooltip: string): void;
}

declare class JavascriptEditorStyle extends UObject { 
	/**
	 * Slate Color
	*/
	SlateColor: SlateColor;
	/**
	 * Slate Brush
	*/
	SlateBrush: SlateBrush;
	/**
	 * Button Style
	*/
	ButtonStyle: ButtonStyle;
	/**
	 * Text Block Style
	*/
	TextBlockStyle: TextBlockStyle;
	/**
	 * Editable Text Style
	*/
	EditableTextStyle: EditableTextStyle;
	/**
	 * Editable Text Box Style
	*/
	EditableTextBoxStyle: EditableTextBoxStyle;
	/**
	 * Check Box Style
	*/
	CheckBoxStyle: CheckBoxStyle;
	/**
	 * Combo Box Style
	*/
	ComboBoxStyle: ComboBoxStyle;
	/**
	 * Combo Button Style
	*/
	ComboButtonStyle: ComboButtonStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorStyle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorStyle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorStyle;
	static C(Other: UObject): JavascriptEditorStyle;
	/**
	 * Get Vector
	*/
	static GetVector(StyleName: string): Vector2D;
	/**
	 * Get Text Block Style
	*/
	static GetTextBlockStyle(StyleName: string): TextBlockStyle;
	/**
	 * Get Sound
	*/
	static GetSound(StyleName: string): SlateSound;
	/**
	 * Get Slate Color
	*/
	static GetSlateColor(StyleName: string): SlateColor;
	/**
	 * Get Margin
	*/
	static GetMargin(StyleName: string): Margin;
	/**
	 * Get Font Style
	*/
	static GetFontStyle(StyleName: string): SlateFontInfo;
	/**
	 * Get Float
	*/
	static GetFloat(StyleName: string): number;
	/**
	 * Get Editable Text Style
	*/
	static GetEditableTextStyle(StyleName: string): EditableTextStyle;
	/**
	 * Get Editable Text Box Style
	*/
	static GetEditableTextBoxStyle(StyleName: string): EditableTextBoxStyle;
	/**
	 * Get Combo Button Style
	*/
	static GetComboButtonStyle(StyleName: string): ComboButtonStyle;
	/**
	 * Get Combo Box Style
	*/
	static GetComboBoxStyle(StyleName: string): ComboBoxStyle;
	/**
	 * Get Color
	*/
	static GetColor(StyleName: string): LinearColor;
	/**
	 * Get Check Box Style
	*/
	static GetCheckBoxStyle(StyleName: string): CheckBoxStyle;
	/**
	 * Get Button Style
	*/
	static GetButtonStyle(StyleName: string): ButtonStyle;
	/**
	 * Get Brush
	*/
	static GetBrush(StyleName: string): SlateBrush;
}

declare class JavascriptEditorTabManager extends Widget { 
	/**
	 * Layout
	*/
	Layout: string;
	/**
	 * Tabs
	*/
	Tabs: JavascriptEditorTab[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	/**
	 * On Tick
	*/
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTick;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTick;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	static C(Other: UObject): JavascriptEditorTick;
	/**
	 * Get Engine
	*/
	GetEngine(): EditorEngine;
}

declare class JavascriptNotification extends UObject { 
	/**
	 * The text displayed in this text block
	*/
	Text: string;
	/**
	 * The icon image to display next to the text
	*/
	bUseImage: boolean;
	/**
	 * Image
	*/
	UImage: SlateBrush;
	/**
	 * The fade in duration for this element
	*/
	FadeInDuration: number;
	/**
	 * The fade out duration for this element
	*/
	FadeOutDuration: number;
	/**
	 * The duration before a fadeout for this element
	*/
	ExpireDuration: number;
	/**
	 * Controls whether or not to add the animated throbber
	*/
	bUseThrobber: boolean;
	/**
	 * Controls whether or not to display the success and fail icons
	*/
	bUseSuccessFailIcons: boolean;
	/**
	 * When true the larger bolder font will be used to display the message
	*/
	bUseLargeFont: boolean;
	/**
	 * When true the notification will automatically time out after the expire duration.
	*/
	bFireAndForget: boolean;
	/**
	 * When set this will display a check box on the notification; handles getting the current check box state
	*/
	CheckBoxState: ECheckBoxState;
	/**
	 * When set this will display a check box on the notification; handles setting the new check box state
	*/
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	/**
	 * Text to display for the check box message
	*/
	CheckBoxText: string;
	/**
	 * When set this will display as a hyperlink on the right side of the notification.
	*/
	Hyperlink: UnrealEngineDelegate<() => void>;
	/**
	 * Text to display for the hyperlink message
	*/
	HyperlinkText: string;
	/**
	 * True if we should throttle the editor while the notification is transitioning and performance is poor, to make sure the user can see the animation
	*/
	bAllowThrottleWhenFrameRateIsLow: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptNotification;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptNotification;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	static C(Other: UObject): JavascriptNotification;
	/**
	 * Success
	*/
	Success(): void;
	/**
	 * Reset
	*/
	Reset(): void;
	/**
	 * Pending
	*/
	Pending(): void;
	/**
	 * Fire
	*/
	Fire(): void;
	/**
	 * Fail
	*/
	Fail(): void;
	/**
	 * Fadeout
	*/
	Fadeout(): void;
}

declare class PropertyEditor extends Widget { 
	/**
	 * On Change
	*/
	OnChange: UnrealEngineMulticastDelegate<(ParameterName: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyEditor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	static C(Other: UObject): PropertyEditor;
	/**
	 * Set Object
	*/
	SetObject(UObject: UObject): void;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject): LightPropagationVolumeBlendableFactory;
}

declare class MyPluginStruct { 
	/**
	 * Test String
	*/
	TestString: string;
}

declare class MyPluginObject extends UObject { 
	/**
	 * My Struct
	*/
	MyStruct: MyPluginStruct;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MyPluginObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MyPluginObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject): MyPluginObject;
}

declare class PluginMetadataObject extends UObject { 
	/**
	 * Version number for the plugin.  The version number must increase with every version of the plugin, so that the system
	 *       can determine whether one version of a plugin is newer than another, or to enforce other requirements.  This version
	 *       number is not displayed in front-facing UI.  Use the VersionName for that.
	*/
	Version: number;
	/**
	 * Name of the version for this plugin.  This is the front-facing part of the version number.  It doesn't need to match
	 *       the version number numerically, but should be updated when the version number is increased accordingly.
	*/
	VersionName: string;
	/**
	 * Friendly name of the plugin
	*/
	FriendlyName: string;
	/**
	 * Description of the plugin
	*/
	Description: string;
	/**
	 * The category that this plugin belongs to
	*/
	Category: string;
	/**
	 * The company or individual who created this plugin.  This is an optional field that may be displayed in the user interface.
	*/
	CreatedBy: string;
	/**
	 * Hyperlink URL string for the company or individual who created this plugin.  This is optional.
	*/
	CreatedByURL: string;
	/**
	 * Documentation URL string.
	*/
	DocsURL: string;
	/**
	 * Support URL/email for this plugin. Email addresses must be prefixed with 'mailto:'
	*/
	SupportURL: string;
	/**
	 * Can this plugin contain content?
	*/
	bCanContainContent: boolean;
	/**
	 * Marks the plugin as beta in the UI
	*/
	bIsBetaVersion: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginMetadataObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PluginMetadataObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject): ReimportSpeedTreeFactory;
}

declare class WebSocketConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	/**
	 * Websocket server port
	*/
	WebSocketPort: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketNetDriver;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject): WebSocketNetDriver;
}

declare class MediaPlayerFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayerFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayerFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactory;
	static C(Other: UObject): MediaPlayerFactory;
}

declare class MediaPlayerFactoryNew extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayerFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayerFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactoryNew;
	static C(Other: UObject): MediaPlayerFactoryNew;
}

declare class MediaSoundWaveFactoryNew extends Factory { 
	/**
	 * An initial UMediaPlayer asset to place in the newly created sound wave.
	*/
	InitialMediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWaveFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWaveFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWaveFactoryNew;
	static C(Other: UObject): MediaSoundWaveFactoryNew;
}

declare class MediaTextureFactoryNew extends Factory { 
	/**
	 * An initial media player asset to place in the newly created texture.
	*/
	InitialMediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTextureFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTextureFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTextureFactoryNew;
	static C(Other: UObject): MediaTextureFactoryNew;
}

declare class ArchVisCharacter extends Character { 
	/**
	 * Axis name for direct look up/down inputs (e.g. mouse). This should match an Axis Binding in your input settings
	*/
	LookUpAxisName: string;
	/**
	 * Axis name for rate-based look up/down inputs (e.g. joystick). This should match an Axis Binding in your input settings
	*/
	LookUpAtRateAxisName: string;
	/**
	 * Axis name for direct turn left/right inputs (e.g. mouse). This should match an Axis Binding in your input settings
	*/
	TurnAxisName: string;
	/**
	 * Axis name for rate-based turn left/right inputs (e.g. joystick). This should match an Axis Binding in your input settings
	*/
	TurnAtRateAxisName: string;
	/**
	 * Axis name for "move forward/back" control. This should match an Axis Binding in your input settings
	*/
	MoveForwardAxisName: string;
	/**
	 * Axis name for "move left/right" control. This should match an Axis Binding in your input settings
	*/
	MoveRightAxisName: string;
	/**
	 * Controls how aggressively mouse motion translates to character rotation in the pitch axis.
	*/
	MouseSensitivityScale_Pitch: number;
	/**
	 * Controls how aggressively mouse motion translates to character rotation in the yaw axis.
	*/
	MouseSensitivityScale_Yaw: number;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ArchVisCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	/**
	 * Controls how fast the character's turn rate accelerates when rotating and looking up/down
	*/
	RotationalAcceleration: Rotator;
	/**
	 * Controls how fast the character's turn rate decelerates to 0 when user stops turning
	*/
	RotationalDeceleration: Rotator;
	/**
	 * Fastest possible turn rate
	*/
	MaxRotationalVelocity: Rotator;
	/**
	 * Controls how far down you can look
	*/
	MinPitch: number;
	/**
	 * Controls how far up you can look
	*/
	MaxPitch: number;
	/**
	 * Controls walking deceleration.
	*/
	WalkingFriction: number;
	/**
	 * How fast the character can walk.
	*/
	WalkingSpeed: number;
	/**
	 * How fast the character accelerates.
	*/
	WalkingAcceleration: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject): ArchVisCharMovementComponent;
}

declare class ComponentReference { 
	/**
	 * Pointer to a different Actor that owns the Component.
	*/
	OtherActor: Actor;
	/**
	 * Name of component property to use
	*/
	ComponentProperty: string;
}

declare class CableComponent extends MeshComponent { 
	/**
	 * Actor or Component that the end of the cable should be attached to
	*/
	AttachEndTo: ComponentReference;
	/**
	 * End location of cable, relative to AttachEndTo if specified, otherwise relative to cable component.
	*/
	EndLocation: Vector;
	/**
	 * Rest length of the cable
	*/
	CableLength: number;
	/**
	 * How many segments the cable has
	*/
	NumSegments: number;
	/**
	 * Controls the simulation substep time for the cable
	*/
	SubstepTime: number;
	/**
	 * The number of solver iterations controls how 'stiff' the cable is
	*/
	SolverIterations: number;
	/**
	 * How wide the cable geometry is
	*/
	CableWidth: number;
	/**
	 * Number of sides of the cable geometry
	*/
	NumSides: number;
	/**
	 * How many times to repeat the material along the length of the cable
	*/
	TileMaterial: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CableComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CableComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	static C(Other: UObject): CableComponent;
	/**
	 * Attaches the end of the cable to a specific Component within an Actor *
	*/
	SetAttachEndTo(Actor: Actor,ComponentProperty: string): void;
	/**
	 * Gets the specific USceneComponent that the cable is attached to *
	*/
	GetAttachedComponent(): SceneComponent;
	/**
	 * Gets the Actor that the cable is attached to *
	*/
	GetAttachedActor(): Actor;
}

declare class CableActor extends Actor { 
	/**
	 * Cable component that performs simulation and rendering
	*/
	CableComponent: CableComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CableActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject): CableActor;
}

declare class CustomMeshTriangle { 
	/**
	 * Vertex 0
	*/
	Vertex0: Vector;
	/**
	 * Vertex 1
	*/
	Vertex1: Vector;
	/**
	 * Vertex 2
	*/
	Vertex2: Vector;
}

declare class CustomMeshComponent extends MeshComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CustomMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CustomMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	static C(Other: UObject): CustomMeshComponent;
	/**
	 * Set the geometry to use on this triangle mesh
	*/
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	/**
	 * Removes all geometry from this triangle mesh.  Does not deallocate memory, allowing new geometry to reuse the existing allocation.
	*/
	ClearCustomMeshTriangles(): void;
	/**
	 * Add to the geometry to use on this triangle mesh.  This may cause an allocation.  Use SetCustomMeshTriangles() instead when possible to reduce allocations.
	*/
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
}

declare class LeapMotionTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionTypes;
	static C(Other: UObject): LeapMotionTypes;
}

declare type ELeapBone = string;
declare type ELeapSide = string;
declare class LeapMotionHandActor extends Actor { 
	/**
	 * Scale of the hand, relatively to real-world size
	*/
	Scale: number;
	/**
	 * Visualize hand's colliding shape in game
	*/
	bShowCollider: boolean;
	/**
	 * Visualize hand's mesh in game
	*/
	bShowMesh: boolean;
	/**
	 * Show hand's arm. Don't change it.
	*/
	bShowArm: boolean;
	/**
	 * Hand's id, as reported by Leap API. Don't change it.
	*/
	HandId: number;
	/**
	 * Is this a left or a right hand?
	*/
	HandSide: ELeapSide;
	/**
	 * Hand's pinching strength, as reported by Leap API
	*/
	PinchStrength: number;
	/**
	 * Hand's grabbing strength, as reported by Leap API
	*/
	GrabStrength: number;
	/**
	 * Delegate triggered upon hand's creation
	*/
	OnHandAdded: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	/**
	 * Delegate triggered upon hand's destruction
	*/
	OnHandRemoved: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	/**
	 * Delegate triggered once per frame update
	*/
	OnHandUpdated: UnrealEngineMulticastDelegate<(HandId: number, DeltaSeconds: number) => void>;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionHandActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionHandActor;
	static C(Other: UObject): LeapMotionHandActor;
	/**
	 * Returns the parenting controller component that created this hand. This is based purely on actor/component attachment hierarchy
	*/
	GetParentingControllerComponent(): LeapMotionControllerComponent;
	/**
	 * Retrieves individual hand bone
	*/
	GetBoneActor(LeapBone: ELeapBone): LeapMotionBoneActor;
}

declare class LeapMotionControllerComponent extends SceneComponent { 
	/**
	 * The scale of hands, relative to real-world size. This ignores actor's transform's scale
	*/
	Scale: number;
	/**
	 * The scale of hands, when in HMD mode, relative to real-world size. This ignores actor's transform's scale
	*/
	ScaleForHmdMode: number;
	/**
	 * Whether to render the hand's colliding shape in game
	*/
	bShowCollider: boolean;
	/**
	 * Whether to render the hand's mesh in game
	*/
	bShowMesh: boolean;
	/**
	 * Whether to render the hand's arm
	*/
	bShowArm: boolean;
	/**
	 * Whether to transform the tracking data as appropriate for a Leap Motion device
	 * attached to an HMD.
	*/
	bHmdMode: boolean;
	/**
	 * Whether to automatically attach this controller to player camera, both in desktop & VR modes.
	*/
	bAutoAttachToPlayerCamera: boolean;
	/**
	 * Placement of Leap Device in relation to HMD position.
	*/
	OffsetFromHMDToLeapDevice: Vector;
	/**
	 * Optional blueprint used to spawn each hand. When none is specified ALeapMotionHandActor is created.
	*/
	HandBlueprint: UnrealEngineClass;
	/**
	 * Optional blueprint used to spawn each individual finger bone. When none is specified ALeapMotionHandBoneActor is created
	*/
	BoneBlueprint: UnrealEngineClass;
	/**
	 * Delegate triggered when a new hand is spotted by the Leap Motion device.
	*/
	OnHandAdded: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	/**
	 * Delegate triggered when a hand lost by the Leap Motion device.
	*/
	OnHandRemoved: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	/**
	 * Delegate triggered once per frame update for each hand.
	*/
	OnHandUpdated: UnrealEngineMulticastDelegate<(HandId: number, DeltaSeconds: number) => void>;
	/**
	 * Finger model mesh used by the default hand implementation.
	*/
	FingerMesh: StaticMesh;
	/**
	 * Palm model mesh used by the default hand implementation.
	*/
	PalmMesh: StaticMesh;
	/**
	 * Arm model mesh used by the default hand implementation.
	*/
	ArmMesh: StaticMesh;
	/**
	 * Material used by the default hand implementation.
	*/
	Material: MaterialInterface;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionControllerComponent;
	static C(Other: UObject): LeapMotionControllerComponent;
	/**
	 * Sets the controller as when attached to an HMD, or in the standard desktop mode
	 * Puts the Leap Motion controller and this component into (or out of) HMD mode.
	 * This sets the Leap Motion software to use the Optimize for HMD policy.
	 * It also changes the transform of Leap Motion to Unreal coordinates so that the
	 * hands are projected in front of the component position rather than above it.
	 * @param EnableOrDisable Set to true to enable HMD mode.
	*/
	UseHmdMode(EnableOrDisable: boolean): void;
	/**
	 * Returns the oldest left- or right-hand actor, if one exists, nullptr otherwise.
	 * If more than one left or right hand is being tracked, this function returns
	 * the one that has been tracked the longest.
	 * @param LeapSide      Are we looking for left or right-sided hands?
	 * @return                      Pointer to oldest hand actor if one is found, nullptr otherwise.
	*/
	GetOldestLeftOrRightHandActor(LeapSide: ELeapSide): LeapMotionHandActor;
	/**
	 * Gets the hand actor instance for the specified hand ID.
	 * @param HandId The Leap Motion ID for the hand of interest.
	 * @returns     A pointer to the Actor object if the hand ID is active, nullptr otherwise.
	*/
	GetHandActor(HandId: number): LeapMotionHandActor;
	/**
	 * Gets all active hands ids.
	 * @param OutHandIds Output array which is filled with the ids of existing hands.
	*/
	GetAllHandIds(OutHandIds?: number[]): {OutHandIds: number[]};
	/**
	 * Gets all active hands actors.
	 * @param OutHandActors Output array which is filled with existing hand actors.
	*/
	GetAllHandActors(OutHandActors?: LeapMotionHandActor[]): {OutHandActors: LeapMotionHandActor[]};
}

declare class LeapMotionBoneActor extends Actor { 
	/**
	 * The name of this bone.
	*/
	LeapBoneType: ELeapBone;
	/**
	 * Whether to visualize hand bone's colliding shape in game.
	*/
	bShowCollider: boolean;
	/**
	 * Whether to render the hand bone's mesh in game.
	*/
	bShowMesh: boolean;
	/**
	 * The Unreal Primitive component used for collisions with the scene objects.
	*/
	PrimitiveComponent: PrimitiveComponent;
	/**
	 * The Static mesh for rendering the hand bone.
	*/
	StaticMeshComponent: StaticMeshComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionBoneActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionBoneActor;
	static C(Other: UObject): LeapMotionBoneActor;
	/**
	 * Uses the default palm mesh.
	*/
	SetMeshForPalm(): void;
	/**
	 * Uses the default finger mesh.
	*/
	SetMeshForFinger(): void;
	/**
	 * Uses the default arm mesh.
	*/
	SetMeshForArm(): void;
	/**
	 * Called to initialize the size and display properties of a bone based on
	 * the current hand settings.
	 * Subclasses of LeapMotionBoneActor can implement this function to override
	 * the default behavior.
	 * @param LeapBone The name of the current bone.
	 * @param Scale The relative scale for this bone.
	 * @param Width The width of this bone.
	 * @param Length The length of this bone.
	 * @param ShowCollider Whether to render the colliders.
	 * @param ShowMesh Whether to render the mesh for this bone.
	*/
	Init(LeapBone: ELeapBone,Scale: number,Width: number,Length: number,ShowCollider: boolean,ShowMesh: boolean): void;
	/**
	 * Gets the controller component that created this bone and its parenting hand.
	 * @returns The parent LeapMotionControllerComponent.
	*/
	GetParentingControllerComponent(): LeapMotionControllerComponent;
	/**
	 * Gets the hand actor this bone belongs to.
	 * @returns the parent LeapMotionHandActor instance.
	*/
	GetHandActor(): LeapMotionHandActor;
}

declare class LeapMotionImageComponent extends ActorComponent { 
	/**
	 * Whether the image is displayed
	*/
	bIsVisible: boolean;
	/**
	 * Whether the image is paused
	*/
	bIsPaused: boolean;
	/**
	 * Distance from the PlayerCameraManager at which the image display surface is placed
	*/
	DisplaySurfaceDistance: number;
	/**
	 * The mesh component with image display surface
	*/
	DisplaySurfaceComponent: StaticMeshComponent;
	/**
	 * Material template used to display the pass-through image
	*/
	PassthroughMaterial: MaterialInterface;
	/**
	 * Dynamic instance of the pass-through material
	*/
	DynamicPassthroughMaterial: MaterialInstanceDynamic;
	/**
	 * Left raw image from the Leap device
	*/
	ImagePassthroughLeft: Texture2D;
	/**
	 * Right raw image from the Leap device
	*/
	ImagePassthroughRight: Texture2D;
	/**
	 * Texture encoding lens distortion for the left camera
	*/
	DistortionTextureLeft: Texture2D;
	/**
	 * Texture encoding lens distortion for the right camera
	*/
	DistortionTextureRight: Texture2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionImageComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionImageComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionImageComponent;
	static C(Other: UObject): LeapMotionImageComponent;
	/**
	 * Trigger update of pass-through images
	*/
	UpdateImageTexture(): void;
	/**
	 * And event triggered when the display surface is attached to the PlayerCameraManager. You can overwrite the mesh type & its placement here
	*/
	AttachDisplaySurface(): void;
}

declare class LeapMotionControllerActor extends Actor { 
	/**
	 * An Unreal Component instance.
	*/
	LeapMotionControllerComponent: LeapMotionControllerComponent;
	/**
	 * An Unreal Component instance.
	*/
	LeapMotionImageComponent: LeapMotionImageComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionControllerActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionControllerActor;
	static C(Other: UObject): LeapMotionControllerActor;
}

declare class LeapMotionFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionFunctionLibrary;
	static C(Other: UObject): LeapMotionFunctionLibrary;
	/**
	 * Enables or disables the Leap Motion Controller policy that transmits image data.
	 * Note that calling this function does not change the transforms of any
	 * LeapMotionControllerComponent instances that may exist.
	 * @param UseHmdPolicy          True to enable for image pass-through, false to disable.
	 * @returns                                     True if the device is connected.
	*/
	static SetImagePolicy(UseImagePolicy: boolean): boolean;
	/**
	 * Enables or disables the Leap Motion Controller policy that improves tracking for an
	 * HMD-mounted controller.
	 * Note that calling this function does not change the transforms of any
	 * LeapMotionControllerComponent instances that may exist.
	 * @param UseHmdPolicy          True to enable for HMD-mounted mode, false to disable.
	 * @returns                                     True if the device is connected.
	*/
	static SetHmdPolicy(UseHmdPolicy: boolean): boolean;
	/**
	 * Checks whether a Leap Motion controller is connected.
	 * @returns                     True if controller is connected, false otherwise.
	*/
	static IsConnected(): boolean;
	/**
	 * The pinch strength rating of the specified hand.
	 * Pinch strength is a rating of whether the hand is in a pinching posture.
	 * Pinch strength starts at 0 and increases to 1 as any finger tip approaches
	 * the tip of the thumb. Note that pinch and grab strength are not independent.
	 * A grabbing hand will generally have a non-zero pinch strength as well.
	 * @param HandId                        The id of the hand of interest.
	 * @param PinchStrength         A float set to the hand's pinch strength as reported by Leap API
	 * @returns                                     True, if the hand with the specified id exists, false otherwise.
	*/
	static GetPinchStrength(HandId: number,PinchStrength?: number): {PinchStrength: number, $: boolean};
	/**
	 * Returns the oldest left- or right-hand actor, if one exists, nullptr otherwise.
	 * If more than one left or right hand is being tracked, this function returns
	 * the one that has been tracked the longest.
	 * @param LeapSide      Look for a left or a right hand.
	 * @param OutHandId     An integer set to the Leap Motion id of the oldest left
	 *                                      or right hand. If no hand is found, this is set to -1.
	 * @returns                     True if a hand of the specified type exists, false otherwise.
	*/
	static GetOldestLeftOrRightHandId(LeapSide: ELeapSide,OutHandId?: number): {OutHandId: number, $: boolean};
	/**
	 * The grab strength rating of the specified hand.
	 * Grab strength is a rating of how the hand's posture resembles a fist.
	 * A strength of 0 is close to an open, flat hand; a strength of 1 is close
	 * to a fist.
	 * @param HandId                        The id of the hand of interest.
	 * @param GrabStrength          A float set to the hand's grabbing strength as reported by Leap API.
	 * @returns                                     True, if the hand with the specified id exists, false otherwise.
	*/
	static GetGrabStrength(HandId: number,GrabStrength?: number): {GrabStrength: number, $: boolean};
	/**
	 * Gets the width and length of the specified bone of the specified hand.
	 * @param HandId                        The id of the hand of interest.
	 * @param LeapBone                      The bone of interest.
	 * @param OutWidth                      A float set to the bone's width (in centimeters).
	 * @param OutLength                     A float set to the bone's length (in centimeters).
	 * @returns                                     True, if the hand with the specified id exists, false otherwise.
	*/
	static GetBoneWidthAndLength(HandId: number,LeapBone: ELeapBone,OutWidth?: number,OutLength?: number): {OutWidth: number, OutLength: number, $: boolean};
	/**
	 * Gets the position and orientation of the specified bone of the specified hand.
	 * Data returned by this function is relative to the Unreal Engine origin rather than
	 * a particular LeapMotionControllerComponent or LeapMotionHandActor instance.
	 * Get the properties of a LeapMotionBoneActor instance to get the data
	 * relative to that actor's parent hand actor and controller component. In this
	 * case, use the standard Unreal Actor location and rotation properties.
	 * @param HandId                        The id of the hand of interest.
	 * @param LeapBone                      The bone of interest.
	 * @param OutPosition           An FVector set to the relative position of the hand,
	 *                                                      or a zero vector if a hand with the specified id does not exist.
	 * @param OutOrientation        An FRotator set to the relative orientation of
	 *                                                      the specified bone, or a zero rotation if a hand
	 *                                                      with the specified id does not exist.
	 * @returns                                     True, if the hand with the specified id exists, false otherwise.
	*/
	static GetBonePostionAndOrientation(HandId: number,LeapBone: ELeapBone,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	/**
	 * Returns list of IDs of all hands tracked by the device.
	 * @param OutAllHandIds         Output array which is filled with all the tracked hand IDs.
	 * @returns                                     True, if the device is connected.
	*/
	static GetAllHandsIds(OutAllHandIds?: number[]): {OutAllHandIds: number[], $: boolean};
}

declare class HmdUserProfileField { 
	/**
	 * Field Name
	*/
	FieldName: string;
	/**
	 * Field Value
	*/
	FieldValue: string;
}

declare class HmdUserProfile { 
	/**
	 * Name of the user's profile.
	*/
	Name: string;
	/**
	 * Gender of the user ("male", "female", etc).
	*/
	Gender: string;
	/**
	 * Height of the player, in meters
	*/
	PlayerHeight: number;
	/**
	 * Height of the player, in meters
	*/
	EyeHeight: number;
	/**
	 * Interpupillary distance of the player, in meters
	*/
	IPD: number;
	/**
	 * Neck-to-eye distance, in meters. X - horizontal, Y - vertical.
	*/
	NeckToEyeDistance: Vector2D;
	/**
	 * Extra Fields
	*/
	ExtraFields: HmdUserProfileField[];
}

declare class OculusFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OculusFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OculusFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusFunctionLibrary;
	static C(Other: UObject): OculusFunctionLibrary;
	/**
	 * Sets 'base rotation' - the rotation that will be subtracted from
	 * the actual HMD orientation.
	 * The position offset might be added to current HMD position,
	 * effectively moving the virtual camera by the specified offset. The addition
	 * occurs after the HMD orientation and position are applied.
	 * @param BaseRot                       (in) Rotator object with base rotation
	 * @param PosOffset                     (in) the vector to be added to HMD position.
	 * @param Options                       (in) specifies either position, orientation or both should be set.
	*/
	static SetBaseRotationAndPositionOffset(BaseRot: Rotator,PosOffset: Vector,Options: EOrientPositionSelector): void;
	/**
	 * Sets 'base rotation' - the rotation that will be subtracted from
	 * the actual HMD orientation.
	 * Sets base position offset (in meters). The base position offset is the distance from the physical (0, 0, 0) position
	 * to current HMD position (bringing the (0, 0, 0) point to the current HMD position)
	 * Note, this vector is set by ResetPosition call; use this method with care.
	 * The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.
	 * @param Rotation                       (in) Rotator object with base rotation
	 * @param BaseOffsetInMeters (in) the vector to be set as base offset, in meters.
	 * @param Options                        (in) specifies either position, orientation or both should be set.
	*/
	static SetBaseRotationAndBaseOffsetInMeters(Rotation: Rotator,BaseOffsetInMeters: Vector,Options: EOrientPositionSelector): void;
	/**
	 * Returns true if PlayerController follows HMD orientation/position. False, otherwise.
	*/
	static IsPlayerControllerFollowHmdEnabled(): boolean;
	/**
	 * Returns current user profile.
	 * @param Profile                (out) Structure to hold current user profile.
	 * @return (boolean)     True, if user profile was acquired.
	*/
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
	/**
	 * Reports raw sensor data. If HMD doesn't support any of the parameters then it will be set to zero.
	 * @param Accelerometer  (out) Acceleration reading in m/s^2.
	 * @param Gyro                   (out) Rotation rate in rad/s.
	 * @param Magnetometer   (out) Magnetic field in Gauss.
	 * @param Temperature    (out) Temperature of the sensor in degrees Celsius.
	 * @param TimeInSeconds  (out) Time when the reported IMU reading took place, in seconds.
	*/
	static GetRawSensorData(Accelerometer?: Vector,Gyro?: Vector,Magnetometer?: Vector,Temperature?: number,TimeInSeconds?: number): {Accelerometer: Vector, Gyro: Vector, Magnetometer: Vector, Temperature: number, TimeInSeconds: number};
	/**
	 * Grabs the current orientation and position for the HMD.  If positional tracking is not available, DevicePosition will be a zero vector
	 * @param DeviceRotation        (out) The device's current rotation
	 * @param DevicePosition        (out) The device's current position, in its own tracking space
	 * @param NeckPosition          (out) The estimated neck position, calculated using NeckToEye vector from User Profile. Same coordinate space as DevicePosition.
	 * @param bUseOrienationForPlayerCamera (in) Should be set to 'true' if the orientation is going to be used to update orientation of the camera manually.
	 * @param bUsePositionForPlayerCamera   (in) Should be set to 'true' if the position is going to be used to update position of the camera manually.
	 * @param PositionScale         (in) The 3D scale that will be applied to position.
	*/
	static GetPose(DeviceRotation?: Rotator,DevicePosition?: Vector,NeckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,PositionScale?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector, NeckPosition: Vector};
	/**
	 * Returns current settings for PlayerCameraManager's overrides for following HMD orientation and position.
	 * @param bFollowHmdOrientation (out) True if camera's orientation should be updated by most recent HMD orientation.
	 * @param bFollowHmdPosition    (out) Whether the camera's position should be updated by most recent HMD orientation or not.
	*/
	static GetPlayerCameraManagerFollowHmd(bFollowHmdOrientation?: boolean,bFollowHmdPosition?: boolean): {bFollowHmdOrientation: boolean, bFollowHmdPosition: boolean};
	/**
	 * Returns current base rotation and position offset.
	 * @param OutRot                        (out) Rotator object with base rotation
	 * @param OutPosOffset          (out) the vector with previously set position offset.
	*/
	static GetBaseRotationAndPositionOffset(OutRot?: Rotator,OutPosOffset?: Vector): {OutRot: Rotator, OutPosOffset: Vector};
	/**
	 * Returns current base rotation and base offset.
	 * The base offset is currently used base position offset, previously set by the
	 * ResetPosition or SetBasePositionOffset calls. It represents a vector that translates the HMD's position
	 * into (0,0,0) point, in meters.
	 * The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.
	 * @param OutRotation                    (out) Rotator object with base rotation
	 * @param OutBaseOffsetInMeters  (out) base position offset, vector, in meters.
	*/
	static GetBaseRotationAndBaseOffsetInMeters(OutRotation?: Rotator,OutBaseOffsetInMeters?: Vector): {OutRotation: Rotator, OutBaseOffsetInMeters: Vector};
	/**
	 * Turns on/off default PlayerController's behavior to follow HMD orientation/position
	*/
	static EnablePlayerControllerFollowHmd(bEnable: boolean): void;
	/**
	 * Controls how PlayerCameraManager follows HMD. Note, this works for any active PlayerCameraManager
	 * with bFollowHmdOrientation property set to true.
	 * @param bFollowHmdOrientation (in) True if camera's orientation should be updated by most recent HMD orientation.
	 * @param bFollowHmdPosition    (in) Whether the camera's position should be updated by most recent HMD orientation or not.
	*/
	static EnablePlayerCameraManagerFollowHmd(bFollowHmdOrientation: boolean,bFollowHmdPosition: boolean): void;
}

declare class ProcMeshTangent { 
	/**
	 * Direction of X tangent for this vertex
	*/
	TangentX: Vector;
	/**
	 * Bool that indicates whether we should flip the Y tangent when we compute it using cross product
	*/
	bFlipTangentY: boolean;
}

declare class ProcMeshVertex { 
	/**
	 * Vertex position
	*/
	Position: Vector;
	/**
	 * Vertex normal
	*/
	Normal: Vector;
	/**
	 * Vertex tangent
	*/
	Tangent: ProcMeshTangent;
	/**
	 * Vertex color
	*/
	Color: Color;
	/**
	 * Vertex texture co-ordinate
	*/
	UV0: Vector2D;
}

declare class ProcMeshSection { 
	/**
	 * Vertex buffer for this section
	*/
	ProcVertexBuffer: ProcMeshVertex[];
	/**
	 * Index buffer for this section
	*/
	ProcIndexBuffer: number[];
	/**
	 * Local bounding box of section
	*/
	SectionLocalBox: Box;
	/**
	 * Should we build collision data for triangles in this section
	*/
	bEnableCollision: boolean;
	/**
	 * Should we display this section
	*/
	bSectionVisible: boolean;
}

declare class ProceduralMeshComponent extends MeshComponent { 
	/**
	 * Collision data
	*/
	ProcMeshBodySetup: BodySetup;
	/**
	 * Array of sections of mesh
	*/
	ProcMeshSections: ProcMeshSection[];
	/**
	 * Local space bounds of mesh
	*/
	LocalBounds: BoxSphereBounds;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProceduralMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProceduralMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralMeshComponent;
	static C(Other: UObject): ProceduralMeshComponent;
	/**
	 * Updates a section of this procedural mesh component. This is faster than CreateMeshSection, but does not let you change topology. Collision info is also updated.
	 * @param  Vertices                        Vertex buffer of all vertex positions to use for this mesh section.
	 * @param  Normals                         Optional array of normal vectors for each vertex. If supplied, must be same length as Vertices array.
	 * @param  UV0                                     Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array.
	 * @param  VertexColors            Optional array of colors for each vertex. If supplied, must be same length as Vertices array.
	 * @param  Tangents                        Optional array of tangent vector for each vertex. If supplied, must be same length as Vertices array.
	*/
	UpdateMeshSection(SectionIndex: number,Vertices: Vector[],Normals: Vector[],UV0: Vector2D[],VertexColors: Color[],Tangents: ProcMeshTangent[]): void;
	/**
	 * Control visibility of a particular section
	*/
	SetMeshSectionVisible(SectionIndex: number,bNewVisibility: boolean): void;
	/**
	 * Returns whether a particular section is currently visible
	*/
	IsMeshSectionVisible(SectionIndex: number): boolean;
	/**
	 * Create/replace a section for this procedural mesh component.
	 * @param  SectionIndex            Index of the section to create or replace.
	 * @param  Vertices                        Vertex buffer of all vertex positions to use for this mesh section.
	 * @param  Triangles                       Index buffer indicating which vertices make up each triangle. Length must be a multiple of 3.
	 * @param  Normals                         Optional array of normal vectors for each vertex. If supplied, must be same length as Vertices array.
	 * @param  UV0                                     Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array.
	 * @param  VertexColors            Optional array of colors for each vertex. If supplied, must be same length as Vertices array.
	 * @param  Tangents                        Optional array of tangent vector for each vertex. If supplied, must be same length as Vertices array.
	 * @param  bCreateCollision        Indicates whether collision should be created for this section. This adds significant cost.
	*/
	CreateMeshSection(SectionIndex: number,Vertices: Vector[],Triangles: number[],Normals: Vector[],UV0: Vector2D[],VertexColors: Color[],Tangents: ProcMeshTangent[],bCreateCollision: boolean): void;
	/**
	 * Clear a section of the procedural mesh. Other sections do not change index.
	*/
	ClearMeshSection(SectionIndex: number): void;
	/**
	 * Clear all mesh sections and reset to empty state
	*/
	ClearAllMeshSections(): void;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	static C(Other: UObject): KismetProceduralMeshLibrary;
	/**
	 * Generate vertex and index buffer for a simple box, given the supplied dimensions. Normals, UVs and tangents are also generated for each vertex.
	*/
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	/**
	 * Generate an index buffer for a grid of quads.
	 * @param  NumX                    Number of vertices in X direction (must be >= 2)
	 * @param  NumY                    Number of vertices in y direction (must be >= 2)
	 * @param  bWinding                Reverses winding of indices generated for each quad
	 * @out    Triangles               Output index buffer
	*/
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	/**
	 * Add a quad, specified by four indices, to a triangle index buffer as two triangles.
	*/
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	/**
	 * Automatically generate normals and tangent vectors for a mesh
	 * UVs are required for correct tangent generation.
	*/
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
}

declare class SteamVRChaperoneComponent extends ActorComponent { 
	/**
	 * On Leave Soft Bounds
	*/
	OnLeaveSoftBounds: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * On Return to Soft Bounds
	*/
	OnReturnToSoftBounds: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRChaperoneComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRChaperoneComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRChaperoneComponent;
	static C(Other: UObject): SteamVRChaperoneComponent;
	/**
	 * Returns the soft bounds from the Chaperone, in Unreal-scale HMD-space coordinates, centered around the HMD's calibration origin (0,0,0).  Note that the Z component is always zero
	*/
	GetSoftBounds(): Vector[];
	/**
	 * Returns the hard bounds from the Chaperone, in Unreal-scale HMD-space coordinates, centered around the HMD's calibration origin (0,0,0).  Each set of four bounds will form a quad to define a set of hard bounds
	*/
	GetHardBounds(): Vector[];
}

declare type ESteamVRTrackingSpace = string;
declare type ESteamVRTrackedDeviceType = string;
declare class SteamVRFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRFunctionLibrary;
	static C(Other: UObject): SteamVRFunctionLibrary;
	/**
	 * Sets the tracking space (e.g. sitting or standing), which changes which space tracked positions are returned to
	 * NewSpace             The new space to consider all tracked positions in.  For instance, standing assumes the center of the safe zone as the origin.
	*/
	static SetTrackingSpace(NewSpace: ESteamVRTrackingSpace): void;
	/**
	 * Returns an array of the currently tracked device IDs
	 * @param       DeviceType      Which class of device (e.g. controller, tracking devices) to get Device Ids for
	 * @param       OutTrackedDeviceIds     (out) Array containing the ID of each device that's currently tracked
	*/
	static GetValidTrackedDeviceIds(DeviceType: ESteamVRTrackedDeviceType,OutTrackedDeviceIds?: number[]): {OutTrackedDeviceIds: number[]};
	/**
	 * Gets the tracking space (e.g. sitting or standing), which determines the location of the origin.
	*/
	static GetTrackingSpace(): ESteamVRTrackingSpace;
	/**
	 * Gets the orientation and position (in device space) of the device with the specified ID
	 * @param       DeviceId                Id of the device to get tracking info for
	 * @param       OutPosition             (out) Current position of the device
	 * @param       OutOrientation  (out) Current orientation of the device
	 * @return      True if the specified device id had a valid tracking pose this frame, false otherwise
	*/
	static GetTrackedDevicePositionAndOrientation(DeviceId: number,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	/**
	 * Given a controller index and a hand, returns the position and orientation of the controller
	 * @param       ControllerIndex Index of the controller to get the tracked device ID for
	 * @param       Hand                    Which hand's controller to get the position and orientation for
	 * @param       OutPosition             (out) Current position of the device
	 * @param       OutRotation             (out) Current rotation of the device
	 * @return      True if the specified controller index has a valid tracked device ID
	*/
	static GetHandPositionAndOrientation(ControllerIndex: number,Hand: EControllerHand,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
}

declare class SlateRemoteSettings extends UObject { 
	/**
	 * Whether the Slate Remote server is enabled.
	*/
	EnableRemoteServer: boolean;
	/**
	 * The IP endpoint to listen to when the Remote Server runs in the Editor.
	*/
	EditorServerEndpoint: string;
	/**
	 * The IP endpoint to listen to when the Remote Server runs in a game.
	*/
	GameServerEndpoint: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SlateRemoteSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SlateRemoteSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateRemoteSettings;
	static C(Other: UObject): SlateRemoteSettings;
}

declare class SubstanceImportOptionsUi extends UObject { 
	/**
	 * Use the string in "Name" field as base name of factory instance and textures
	*/
	bOverrideFullName: boolean;
	/**
	 * Override Instance Path
	*/
	bOverrideInstancePath: boolean;
	/**
	 * Override Material Path
	*/
	bOverrideMaterialPath: boolean;
	/**
	 * Whether to automatically create graph instances for every graph description present in package
	*/
	bCreateInstance: boolean;
	/**
	 * Whether to automatically create Unreal materials for instances
	*/
	bCreateMaterial: boolean;
	/**
	 * Instance suggested name (based on filename)
	*/
	InstanceName: string;
	/**
	 * Instance suggested name (based on filename)
	*/
	MaterialName: string;
	/**
	 * Force the Graph Instance objects' path
	*/
	InstanceDestinationPath: string;
	/**
	 * Force the Texture Objects objects' path
	*/
	MaterialDestinationPath: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceImportOptionsUi;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceImportOptionsUi;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImportOptionsUi;
	static C(Other: UObject): SubstanceImportOptionsUi;
}

declare class SubstanceFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceFactory;
	static C(Other: UObject): SubstanceFactory;
}

declare class ReimportSubstanceFactory extends SubstanceFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSubstanceFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReimportSubstanceFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSubstanceFactory;
	static C(Other: UObject): ReimportSubstanceFactory;
}

declare class SubstanceFactoryExporter extends Exporter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceFactoryExporter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceFactoryExporter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceFactoryExporter;
	static C(Other: UObject): SubstanceFactoryExporter;
}

declare class SubstanceImageInputFactory extends Factory { 
	/**
	 * If enabled, a material will automatically be created for the texture
	*/
	bCreateMaterial: boolean;
	/**
	 * Create Default Instance
	*/
	bCreateDefaultInstance: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceImageInputFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceImageInputFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImageInputFactory;
	static C(Other: UObject): SubstanceImageInputFactory;
}

declare class ReimportSubstanceImageInputFactory extends SubstanceImageInputFactory { 
	/**
	 * Reimport Paths
	*/
	ReimportPaths: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSubstanceImageInputFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReimportSubstanceImageInputFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSubstanceImageInputFactory;
	static C(Other: UObject): ReimportSubstanceImageInputFactory;
}

declare class SubstanceImageInputThumbnailRenderer extends ThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceImageInputThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceImageInputThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImageInputThumbnailRenderer;
	static C(Other: UObject): SubstanceImageInputThumbnailRenderer;
}

declare class SubstanceInstanceExporter extends Exporter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceInstanceExporter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceInstanceExporter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceInstanceExporter;
	static C(Other: UObject): SubstanceInstanceExporter;
}

declare class SubstanceTextureThumbnailRenderer extends TextureThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SubstanceTextureThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SubstanceTextureThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceTextureThumbnailRenderer;
	static C(Other: UObject): SubstanceTextureThumbnailRenderer;
}

declare class MockAI extends UObject { 
	/**
	 * BBComp
	*/
	BBComp: BlackboardComponent;
	/**
	 * Brain Comp
	*/
	BrainComp: BrainComponent;
	/**
	 * Perception Comp
	*/
	PerceptionComp: AIPerceptionComponent;
	/**
	 * Pawn Action Comp
	*/
	PawnActionComp: PawnActionsComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockAI;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockAI;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject): MockAI;
}

declare class MockAI_BT extends MockAI { 
	/**
	 * BTComp
	*/
	BTComp: BehaviorTreeComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockAI_BT;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockAI_BT;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockTask_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockTask_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	/**
	 * GTComponent
	*/
	GTComponent: GameplayTasksComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject): MockGameplayTaskOwner;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	/**
	 * Delay Ticks
	*/
	DelayTicks: number;
	/**
	 * Only Once
	*/
	bOnlyOnce: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject): TestBTDecorator_DelayedAbort;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	/**
	 * Log Index Execute Start
	*/
	LogIndexExecuteStart: number;
	/**
	 * Log Index Execute Finish
	*/
	LogIndexExecuteFinish: number;
	/**
	 * Log Index Abort Start
	*/
	LogIndexAbortStart: number;
	/**
	 * Log Index Abort Finish
	*/
	LogIndexAbortFinish: number;
	/**
	 * Execute Ticks
	*/
	ExecuteTicks: number;
	/**
	 * Abort Ticks
	*/
	AbortTicks: number;
	/**
	 * Key Name Execute
	*/
	KeyNameExecute: string;
	/**
	 * Key Name Abort
	*/
	KeyNameAbort: string;
	/**
	 * Log Result
	*/
	LogResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	/**
	 * Log Index
	*/
	LogIndex: number;
	/**
	 * Log Finished
	*/
	LogFinished: number;
	/**
	 * Execution Ticks
	*/
	ExecutionTicks: number;
	/**
	 * Log Result
	*/
	LogResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	/**
	 * Key Name
	*/
	KeyName: string;
	/**
	 * Value
	*/
	bValue: boolean;
	/**
	 * Task Result
	*/
	TaskResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject): TestBTTask_SetFlag;
}

declare class TestPawnAction_Log extends PawnAction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPawnAction_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestPawnAction_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject): TestPawnAction_CallFunction;
}

declare class GameLiveStreamingFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameLiveStreamingFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameLiveStreamingFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameLiveStreamingFunctionLibrary;
	static C(Other: UObject): GameLiveStreamingFunctionLibrary;
	/**
	 * Stops broadcasting the game
	*/
	static StopBroadcastingGame(): void;
	/**
	 * Starts broadcasting the game's video (and optionally audio) using an internet streaming service, if one is available
	 * @param       FrameRate                                       Frame rate to stream video from when broadcasting to services like Twitch.
	 * @param       ScreenScaling                           How much to scale the broadcast video resolution down to reduce streaming bandwidth.  We recommend broadcasting at resolutions of 1280x720 or lower.  Some live streaming providers will not be able to transcode your video to a lower resolution, so using a high resolution stream may prevent low-bandwidth users from having a good viewing experience.
	 * @param       bEnableWebCam                           If enabled, video from your web camera will be captured and displayed while broadcasting, so that your viewers can see your presence.
	 * @param       DesiredWebCamWidth                      Desired web cam capture resolution width.  The web cam may only support a limited number of resolutions, so we'll choose one that matches as closely to this as possible
	 * @param       DesiredWebCamHeight                     Desired web cam capture resolution height.
	 * @param       bMirrorWebCamImage                      You can enable this to flip the web camera image horizontally, so that it looks like a mirror
	 * @param       bCaptureAudioFromComputer       Enables broadcast of audio being played by your computer, such as in-game sounds
	 * @param       bCaptureAudioFromMicrophone     Enables broadcast of audio from your default microphone recording device
	 * @param       bDrawSimpleWebCamVideo          If enabled, the engine will draw a simple web cam image on top of the game viewport.  If you turn this off, it's up to you to draw the web cam image yourself.  You can access the web cam texture by calling IGameLiveStreaming::Get().GetWebCamTexture().
	*/
	static StartBroadcastingGame(FrameRate: number,ScreenScaling: number,bEnableWebCam: boolean,DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bCaptureAudioFromComputer: boolean,bCaptureAudioFromMicrophone: boolean,bDrawSimpleWebCamVideo: boolean): void;
	/**
	 * Checks to see if we are currently broadcasting live video (and possibly audio) from the game's viewport
	 * @return      True if we are currently transmitting
	*/
	static IsBroadcastingGame(): boolean;
}

declare class BlueprintLiveStreamInfo { 
	/**
	 * Name of the game that is streaming
	*/
	GameName: string;
	/**
	 * The title of the stream itself
	*/
	StreamName: string;
	/**
	 * URL for the stream
	*/
	URL: string;
}

declare class QueryLiveStreamsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	/**
	 * Called when the asynchronous request for live streams completes, passing along the list of live streams currently active, along with a boolean value that indicates whether the request was successful at all
	*/
	OnQueriedLiveStreams: UnrealEngineMulticastDelegate<(LiveStreams: BlueprintLiveStreamInfo[], bWasSuccessful: boolean) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QueryLiveStreamsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QueryLiveStreamsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryLiveStreamsCallbackProxy;
	static C(Other: UObject): QueryLiveStreamsCallbackProxy;
	/**
	 * Requests a list of live internet streams for the specified game name.  This will usually hit the internet so it could take a second or two.
	*/
	static QueryLiveStreams(GameName: string): QueryLiveStreamsCallbackProxy;
}

declare class EditorUtilityBlueprint extends Blueprint { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorUtilityBlueprint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorUtilityBlueprint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprint;
	static C(Other: UObject): EditorUtilityBlueprint;
}

declare class EditorUtilityBlueprintFactory extends Factory { 
	/**
	 * The parent class of the created blueprint
	*/
	ParentClass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorUtilityBlueprintFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorUtilityBlueprintFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprintFactory;
	static C(Other: UObject): EditorUtilityBlueprintFactory;
}

declare class GlobalEditorUtilityBase extends UObject { 
	/**
	 * Help Text
	*/
	HelpText: string;
	/**
	 * Dirtied Selection Set
	*/
	bDirtiedSelectionSet: boolean;
	/**
	 * Should this blueprint automatically run OnDefaultActionClicked, or should it open up a details panel to edit properties and/or offer multiple buttons
	*/
	bAutoRunDefaultAction: boolean;
	/**
	 * The method called for each selected actor when ForEachSelectedActor is called
	*/
	OnEachSelectedActor: UnrealEngineMulticastDelegate<(Actor: Actor, Index: number) => void>;
	/**
	 * The method called for each selected actor when ForEachSelectedAsset is called
	*/
	OnEachSelectedAsset: UnrealEngineMulticastDelegate<(Asset: UObject, Index: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GlobalEditorUtilityBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GlobalEditorUtilityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GlobalEditorUtilityBase;
	static C(Other: UObject): GlobalEditorUtilityBase;
	/**
	 * Set the selection state for the selected actor
	*/
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	/**
	 * Selects nothing in the editor (another way to clear the selection)
	*/
	SelectNothing(): void;
	/**
	 * Renames an asset (cannot move folders)
	*/
	RenameAsset(Asset: UObject,NewName: string): void;
	/**
	 * The default action called when the blutility is invoked if bAutoRunDefaultAction=true (it is never called otherwise)
	*/
	OnDefaultActionClicked(): void;
	/**
	 * Get Selection Set
	*/
	GetSelectionSet(): Actor[];
	/**
	 * Get Selection Bounds
	*/
	GetSelectionBounds(Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	/**
	 * Get Editor User Settings
	*/
	GetEditorUserSettings(): EditorPerProjectUserSettings;
	/**
	 * Attempts to find the actor specified by PathToActor in the current editor world
	 * @param       PathToActor     The path to the actor (e.g. PersistentLevel.PlayerStart)
	 * @return      A reference to the actor, or none if it wasn't found
	*/
	GetActorReference(PathToActor: string): Actor;
	/**
	 * Calls OnEachSelectedAsset for each selected asset
	*/
	ForEachSelectedAsset(): void;
	/**
	 * Calls OnEachSelectedActor for each selected actor
	*/
	ForEachSelectedActor(): void;
	/**
	 * Remove all actors from the selection set
	*/
	ClearActorSelectionSet(): void;
}

declare class PlacedEditorUtilityBase extends Actor { 
	/**
	 * Help Text
	*/
	HelpText: string;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlacedEditorUtilityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlacedEditorUtilityBase;
	static C(Other: UObject): PlacedEditorUtilityBase;
	/**
	 * Sets information about the camera position for the primary level editor viewport.
	 * @param        CameraLocation  Location the camera will be moved to.
	 * @param        CameraRotation  Rotation the camera will be set to.
	*/
	SetLevelViewportCameraInfo(CameraLocation: Vector,CameraRotation: Rotator): void;
	/**
	 * Set the selection state for the selected actor
	*/
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	/**
	 * Selects nothing in the editor (another way to clear the selection)
	*/
	SelectNothing(): void;
	/**
	 * Returns the current selection set in the editor.  Note that for non-editor builds, this will return an empty array
	*/
	GetSelectionSet(): Actor[];
	/**
	 * Gets information about the camera position for the primary level editor viewport.  In non-editor builds, these will be zeroed
	 * @param       CameraLocation  (out) Current location of the level editing viewport camera, or zero if none found
	 * @param       CameraRotation  (out) Current rotation of the level editing viewport camera, or zero if none found
	 * @return      Whether or not we were able to get a camera for a level editing viewport
	*/
	GetLevelViewportCameraInfo(CameraLocation?: Vector,CameraRotation?: Rotator): {CameraLocation: Vector, CameraRotation: Rotator, $: boolean};
	/**
	 * Attempts to find the actor specified by PathToActor in the current editor world
	 * @param        PathToActor     The path to the actor (e.g. PersistentLevel.PlayerStart)
	 * @return       A reference to the actor, or none if it wasn't found
	*/
	GetActorReference(PathToActor: string): Actor;
	/**
	 * Remove all actors from the selection set
	*/
	ClearActorSelectionSet(): void;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	/**
	 * Number Of Pins
	*/
	NumberOfPins: number;
	/**
	 * Pin Names
	*/
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	/**
	 * Pin Tags
	*/
	PinTags: GameplayTag[];
	/**
	 * UPROPERTY(EditAnywhere, Category = PinOptions)
	 * bool UseInputsOnGraph;
	*/
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTag;
	/**
	 * Not Equal Tag Tag
	*/
	static NotEqual_TagTag(A: GameplayTag,B: string): boolean;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	/**
	 * Pin Containers
	*/
	PinContainers: GameplayTagContainer[];
	/**
	 * UPROPERTY(EditAnywhere, Category = PinOptions)
	 * bool UseInputsOnGraph;
	*/
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTagContainer;
	/**
	 * Not Equal Tag Container Tag Container
	*/
	static NotEqual_TagContainerTagContainer(A: GameplayTagContainer,B: string): boolean;
}

declare class EdGraph_ReferenceViewer extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraph_ReferenceViewer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraph_ReferenceViewer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_ReferenceViewer;
	static C(Other: UObject): EdGraph_ReferenceViewer;
}

declare class EdGraphNode_Reference extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphNode_Reference;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphNode_Reference;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Reference;
	static C(Other: UObject): EdGraphNode_Reference;
}

declare class ReferenceViewerSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReferenceViewerSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReferenceViewerSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReferenceViewerSchema;
	static C(Other: UObject): ReferenceViewerSchema;
}

declare type EAndroidScreenOrientation = string;
declare type EAndroidDepthBufferPreference = string;
declare class GooglePlayAchievementMapping { 
	/**
	 * The game-specific achievement name (the one passed in to WriteAchievement calls).
	*/
	Name: string;
	/**
	 * The ID of the corresponding achievement, generated by the Google Play developer console.
	*/
	AchievementID: string;
}

declare class GooglePlayLeaderboardMapping { 
	/**
	 * The game-specific leaderboard name (the one passed in to WriteLeaderboards calls).
	*/
	Name: string;
	/**
	 * The ID of the corresponding leaderboard, generated by the Google Play developer console.
	*/
	LeaderboardID: string;
}

declare type EAndroidAudio = string;
declare class AndroidRuntimeSettings extends UObject { 
	/**
	 * The official name of the product (same as the name you use on the Play Store web site). Note: Must have at least 2 sections separated by a period and be unique!
	*/
	PackageName: string;
	/**
	 * The version number used to indicate newer versions in the Store
	*/
	StoreVersion: number;
	/**
	 * The visual application name displayed for end users
	*/
	ApplicationDisplayName: string;
	/**
	 * The visual version displayed for end users
	*/
	VersionDisplayName: string;
	/**
	 * What OS version the app is allowed to be installed on (do not set this lower than 9)
	*/
	MinSDKVersion: number;
	/**
	 * What OS version the app is expected to run on (do not set this lower than 9, set to 19 for GearVR)
	*/
	TargetSDKVersion: number;
	/**
	 * Should the data be placed into the .apk file instead of a separate .obb file. Amazon requires this to be enabled, but Google Play Store will not allow .apk files larger than 50MB, so only small games will work with this enabled.
	*/
	bPackageDataInsideApk: boolean;
	/**
	 * Disable the verification of an OBB file when it is downloaded or on first start when in a distribution build.
	*/
	bDisableVerifyOBBOnStartUp: boolean;
	/**
	 * The permitted orientation of the application on the device
	*/
	Orientation: EAndroidScreenOrientation;
	/**
	 * Should the software navigation buttons be hidden or not
	*/
	bFullScreen: boolean;
	/**
	 * The preferred depth buffer bitcount for Android
	*/
	DepthBufferPreference: EAndroidDepthBufferPreference;
	/**
	 * Any extra tags for the <manifest> node
	*/
	ExtraManifestNodeTags: string[];
	/**
	 * Any extra tags for the <application> node
	*/
	ExtraApplicationNodeTags: string[];
	/**
	 * Any extra tags for the com.epicgames.UE4.GameActivity <activity> node
	 * Any extra settings for the <application> section (an optional file <Project>/Build/Android/ManifestApplicationAdditions.txt will also be included)
	*/
	ExtraApplicationSettings: string;
	/**
	 * Extra Activity Node Tags
	*/
	ExtraActivityNodeTags: string[];
	/**
	 * Any extra settings for the main <activity> section (an optional file <Project>/Build/Android/ManifestApplicationActivtyAdditions.txt will also be included)
	*/
	ExtraActivitySettings: string;
	/**
	 * Any extra permissions your app needs (an optional file <Project>/Build/Android/ManifestRequirementsAdditions.txt will also be included,
	 * or an optional file <Project>/Build/Android/ManifestRequirementsOverride.txt will replace the entire <!-- Requirements --> section)
	*/
	ExtraPermissions: string[];
	/**
	 * Configure AndroidManifest.xml for GearVR
	*/
	bPackageForGearVR: boolean;
	/**
	 * Removes Oculus Signature Files (osig) from APK if GearVR APK signed for distribution and enables entitlement checker
	*/
	bRemoveOSIG: boolean;
	/**
	 * This is the file that keytool outputs, specified with the -keystore parameter (file should be in <Project>/Build/Android)
	*/
	KeyStore: string;
	/**
	 * This is the name of the key that you specified with the -alias parameter to keytool
	*/
	KeyAlias: string;
	/**
	 * This is the password that you specified FOR THE KEYSTORE NOT THE KEY, when running keytool (either with -storepass or by typing it in).
	*/
	KeyStorePassword: string;
	/**
	 * This is the password for the key that you may have specified with keytool, if it's different from the keystore password. Leave blank to use same as Keystore
	*/
	KeyPassword: string;
	/**
	 * Enable ArmV7 support? (this will be used if all type are unchecked)
	*/
	bBuildForArmV7: boolean;
	/**
	 * Enable x86 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForX86: boolean;
	/**
	 * Enable x86-64 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForX8664: boolean;
	/**
	 * Enable ES2 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForES2: boolean;
	/**
	 * Enable ES31 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForES31: boolean;
	/**
	 * Should Google Play support be enabled?
	*/
	bEnableGooglePlaySupport: boolean;
	/**
	 * The app id obtained from the Google Play Developer Console
	*/
	GamesAppID: string;
	/**
	 * Mapping of game achievement names to IDs generated by Google Play.
	*/
	AchievementMap: GooglePlayAchievementMapping[];
	/**
	 * Mapping of game leaderboard names to IDs generated by Google Play.
	*/
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	/**
	 * The unique identifier for the ad obtained from AdMob.
	*/
	AdMobAdUnitID: string;
	/**
	 * Identifiers for ads obtained from AdMob
	*/
	AdMobAdUnitIDs: string[];
	/**
	 * The unique identifier for this application (needed for IAP)
	*/
	GooglePlayLicenseKey: string;
	/**
	 * Show the launch image as a startup slash screen
	*/
	bShowLaunchImage: boolean;
	/**
	 * Android Audio encoding options
	*/
	AndroidAudio: EAndroidAudio;
	/**
	 * Include ETC1 textures when packaging with the Android (Multi) variant. ETC1 will be included if no other formats are selected.
	*/
	bMultiTargetFormat_ETC1: boolean;
	/**
	 * Include ETC2 textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_ETC2: boolean;
	/**
	 * Include DXT textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_DXT: boolean;
	/**
	 * Include PVRTC textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_PVRTC: boolean;
	/**
	 * Include ATC textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_ATC: boolean;
	/**
	 * Include ASTC textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_ASTC: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject): AndroidRuntimeSettings;
}

declare class IOSBuildResourceDirectory { 
	/**
	 * The path to the file.
	*/
	Path: string;
}

declare class IOSBuildResourceFilePath { 
	/**
	 * The path to the file.
	*/
	FilePath: string;
}

declare type EPowerUsageFrameRateLock = string;
declare type EIOSVersion = string;
declare class IOSRuntimeSettings extends UObject { 
	/**
	 * Should Game Center support (iOS Online Subsystem) be enabled?
	*/
	bEnableGameCenterSupport: boolean;
	/**
	 * Should Cloud Kit support (iOS Online Subsystem) be enabled?
	*/
	bEnableCloudKitSupport: boolean;
	/**
	 * Whether or not to add support for Metal API (requires IOS8 and A7 processors).
	*/
	bSupportsMetal: boolean;
	/**
	 * Whether or not to add support for deferred rendering Metal API (requires IOS8 and A8 processors)
	*/
	bSupportsMetalMRT: boolean;
	/**
	 * Whether or not to add support for OpenGL ES2 (if this is false, then your game should specify minimum IOS8 version)
	*/
	bSupportsOpenGLES2: boolean;
	/**
	 * Enable ArmV7 support? (this will be used if all type are unchecked)
	*/
	bDevForArmV7: boolean;
	/**
	 * Enable Arm64 support?
	*/
	bDevForArm64: boolean;
	/**
	 * Enable ArmV7s support?
	*/
	bDevForArmV7S: boolean;
	/**
	 * Enable ArmV7 support? (this will be used if all type are unchecked)
	*/
	bShipForArmV7: boolean;
	/**
	 * Enable Arm64 support?
	*/
	bShipForArm64: boolean;
	/**
	 * Enable ArmV7s support?
	*/
	bShipForArmV7S: boolean;
	/**
	 * Any additional linker flags to pass to the linker in non-shipping builds
	*/
	AdditionalLinkerFlags: string;
	/**
	 * Any additional linker flags to pass to the linker in shipping builds
	*/
	AdditionalShippingLinkerFlags: string;
	/**
	 * The name or ip address of the remote mac which will be used to build IOS
	*/
	RemoteServerName: string;
	/**
	 * Enable the use of RSync for remote builds on a mac
	*/
	bUseRSync: boolean;
	/**
	 * The mac users name which matches the SSH Private Key, for remote builds using RSync.
	*/
	RSyncUsername: string;
	/**
	 * The install directory of DeltaCopy.
	*/
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	/**
	 * The existing location of an SSH Key found by UE4.
	*/
	SSHPrivateKeyLocation: string;
	/**
	 * The path of the ssh permissions key to be used when connecting to the remote server.
	*/
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	/**
	 * Supports default portrait orientation. Landscape will not be supported.
	*/
	bSupportsPortraitOrientation: boolean;
	/**
	 * Supports upside down portrait orientation. Landscape will not be supported.
	*/
	bSupportsUpsideDownOrientation: boolean;
	/**
	 * Supports left landscape orientation. Portrait will not be supported.
	*/
	bSupportsLandscapeLeftOrientation: boolean;
	/**
	 * Supports right landscape orientation. Portrait will not be supported.
	*/
	bSupportsLandscapeRightOrientation: boolean;
	/**
	 * Specifies the the display name for the application. This will be displayed under the icon on the device.
	*/
	BundleDisplayName: string;
	/**
	 * Specifies the the name of the application bundle. This is the short name for the application bundle.
	*/
	BundleName: string;
	/**
	 * Specifies the bundle identifier for the application.
	*/
	BundleIdentifier: string;
	/**
	 * Specifies the version for the application.
	*/
	VersionInfo: string;
	/**
	 * Set the maximum frame rate to save on power consumption
	*/
	FrameRateLock: EPowerUsageFrameRateLock;
	/**
	 * Minimum iOS version this game supports
	*/
	MinimumiOSVersion: EIOSVersion;
	/**
	 * Whether or not to add support for iPad devices
	*/
	bSupportsIPad: boolean;
	/**
	 * Whether or not to add support for iPhone devices
	*/
	bSupportsIPhone: boolean;
	/**
	 * Any additional plist key/value data utilizing \n for a new line
	*/
	AdditionalPlistData: string;
	/**
	 * Whether the app supports Facebook
	*/
	bEnableFacebookSupport: boolean;
	/**
	 * Facebook App ID obtained from Facebook's Developer Centre
	*/
	FacebookAppID: string;
	/**
	 * Mobile provision to utilize when signing
	*/
	MobileProvision: string;
	/**
	 * Signing certificate to utilize when signing
	*/
	SigningCertificate: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IOSRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IOSRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject): IOSRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	/**
	 * Location on disk of the Android SDK (falls back to ANDROID_HOME environment variable if this is left blank)
	*/
	SDKPath: DirectoryPath;
	/**
	 * Location on disk of the Android NDK (falls back to NDKROOT environment variable if this is left blank)
	*/
	NDKPath: DirectoryPath;
	/**
	 * Location on disk of the ANT tool (falls back to ANT_HOME environment variable if this is left blank)
	*/
	ANTPath: DirectoryPath;
	/**
	 * Location on disk of Java (falls back to JAVA_HOME environment variable if this is left blank)
	*/
	JavaPath: DirectoryPath;
	/**
	 * Which SDK to package and compile Java with (a specific version or (without quotes) 'latest' for latest version on disk, or 'matchndk' to match the NDK API Level)
	*/
	SDKAPILevel: string;
	/**
	 * Which NDK to compile with (a specific version or (without quotes) 'latest' for latest version on disk). Note that choosing android-21 or later won't run on pre-5.0 devices.
	*/
	NDKAPILevel: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidSDKSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidSDKSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject): AndroidSDKSettings;
}

declare class HTML5DeviceMapping { 
	/**
	 * Device Name
	*/
	DeviceName: string;
	/**
	 * Device Path
	*/
	DevicePath: FilePath;
}

declare class HTML5SDKSettings extends UObject { 
	/**
	 * Available browsers that can be used when launching HTML5 builds.
	*/
	DeviceMap: HTML5DeviceMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HTML5SDKSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HTML5SDKSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5SDKSettings;
	static C(Other: UObject): HTML5SDKSettings;
}

declare class HTML5LevelTransitions { 
	/**
	 * Map From
	*/
	MapFrom: FilePath;
	/**
	 * Map To
	*/
	MapTo: FilePath;
}

declare class HTML5TargetSettings extends UObject { 
	/**
	 * Setting to control HTML5 Heap size (in Development)
	*/
	HeapSizeDevelopment: number;
	/**
	 * Setting to control HTML5 Heap size
	*/
	HeapSizeShipping: number;
	/**
	 * Port to use when deploying game from the editor
	*/
	DeployServerPort: number;
	/**
	 * Use a loading level and download maps during transitions.
	*/
	UseAsyncLevelLoading: boolean;
	/**
	 * Generate Delta Pak files for these level transitions.
	*/
	LevelTransitions: HTML5LevelTransitions[];
	/**
	 * Upload to S3
	*/
	UploadToS3: boolean;
	/**
	 * Required
	*/
	S3KeyID: string;
	/**
	 * Required
	*/
	S3SecretAccessKey: string;
	/**
	 * Required
	*/
	S3BucketName: string;
	/**
	 * Provide another level of nesting beyond the bucket. Can be left empty, defaults to game name.
	*/
	S3FolderName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HTML5TargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HTML5TargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5TargetSettings;
	static C(Other: UObject): HTML5TargetSettings;
}

declare type EEditorLiveStreamingWebCamResolution = string;
declare class EditorLiveStreamingSettings extends UObject { 
	/**
	 * Frame rate to stream video from the editor at when broadcasting to services like Twitch.
	*/
	FrameRate: number;
	/**
	 * How much to scale the broadcast video resolution down to reduce streaming bandwidth.  We recommend broadcasting at resolutions of 1280x720 or lower.  Some live streaming providers will not be able to transcode your video to a lower resolution, so using a high resolution stream may prevent low-bandwidth users from having a good viewing experience.
	*/
	ScreenScaling: number;
	/**
	 * By default, we only broadcast video from your primary monitor's work area (excludes the task bar area.)  Turning off this feature enables broadcasting from all monitors, covering your entire usable desktop area.  This may greatly increase the video resolution of your stream, so we recommend leaving this option turned off.
	*/
	bPrimaryMonitorOnly: boolean;
	/**
	 * If enabled, video from your web camera will be captured and displayed in the editor while broadcasting, so that your viewers can see your presence.
	*/
	bEnableWebCam: boolean;
	/**
	 * The camera video resolution that you'd prefer.  The camera may not support the exact resolution you specify, so we'll try to find the best match automatically
	*/
	WebCamResolution: EEditorLiveStreamingWebCamResolution;
	/**
	 * You can enable this to flip the web cam image horizontally so that it looks more like a mirror
	*/
	bMirrorWebCamImage: boolean;
	/**
	 * Enables broadcast of audio being played by your computer, such as in-game sounds
	*/
	bCaptureAudioFromComputer: boolean;
	/**
	 * Enables broadcast of audio from your default microphone recording device
	*/
	bCaptureAudioFromMicrophone: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorLiveStreamingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorLiveStreamingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorLiveStreamingSettings;
	static C(Other: UObject): EditorLiveStreamingSettings;
}

declare type ETutorialContent = string;
declare class TutorialContent { 
	/**
	 * The type of this content
	*/
	Type: ETutorialContent;
	/**
	 * Content reference string, path etc.
	*/
	Content: string;
	/**
	 * Excerpt name for UDN excerpt
	*/
	ExcerptName: string;
	/**
	 * Localized text to use with this content
	*/
	Text: string;
}

declare type ETutorialAnchorIdentifier = string;
declare class TutorialContentAnchor { 
	/**
	 * Type
	*/
	Type: ETutorialAnchorIdentifier;
	/**
	 * If widget is in a wrapper widget, this is the wrapper widget name
	*/
	WrapperIdentifier: string;
	/**
	 * If reference is an asset, we use this to resolve it
	*/
	Asset: StringAssetReference;
	/**
	 * Whether to draw an animated highlight around the widget
	*/
	bDrawHighlight: boolean;
	/**
	 * Tab on which to focus (EG 'My Blueprint' tab).
	*/
	TabToFocusOrOpen: string;
	/**
	 * User friendly name to display in the dialog
	*/
	FriendlyName: string;
	/**
	 * The GUID string
	*/
	GUIDString: string;
	/**
	 * Name of the outer object - should be the blueprint that 'owns' the node
	*/
	OuterName: string;
}

declare class TutorialWidgetContent { 
	/**
	 * Content to associate with widget
	*/
	Content: TutorialContent;
	/**
	 * Anchor for content widget to highlight
	*/
	WidgetAnchor: TutorialContentAnchor;
	/**
	 * Horizontal Alignment
	*/
	HorizontalAlignment: EHorizontalAlignment;
	/**
	 * Vertical Alignment
	*/
	VerticalAlignment: EVerticalAlignment;
	/**
	 * Custom offset from widget
	*/
	Offset: Vector2D;
	/**
	 * Content width - text will be wrapped at this point
	*/
	ContentWidth: number;
	/**
	 * If this a node that can be focused (EG a blueprint node) should we auto focus on it
	*/
	bAutoFocus: boolean;
}

declare class TutorialStage { 
	/**
	 * Identifier for this stage
	*/
	Name: string;
	/**
	 * Non-widget-bound content to display in this stage
	*/
	Content: TutorialContent;
	/**
	 * Widget-bound content to display for this stage
	*/
	WidgetContent: TutorialWidgetContent[];
	/**
	 * Text to display on the next button
	*/
	NextButtonText: string;
	/**
	 * Text to display on the back button
	*/
	BackButtonText: string;
	/**
	 * List of platforms to test against. Meaning of test is determined by InvertPlatformTest.
	*/
	PlatformsToTest: string[];
	/**
	 * If false, stage will be skipped if running on any platform in PlatformsToTest. If true, the stage will be if not running on any platform in PlatformsToTest.
	*/
	bInvertPlatformTest: boolean;
}

declare class EditorTutorial extends UObject { 
	/**
	 * Title of this tutorial, used when presented to the user
	*/
	Title: string;
	/**
	 * Sorting priority, used by the tutorial browser
	*/
	SortOrder: number;
	/**
	 * Icon name for this tutorial, used when presented to the user in the tutorial browser. This is a name for the icon in the Slate editor style. Only used if there isn't a valid texture to use.
	*/
	Icon: string;
	/**
	 * Texture for this tutorial, used when presented to the user in the tutorial browser.
	*/
	Texture: Texture2D;
	/**
	 * Category of this tutorial, used to organize tutorials when presented to the user
	*/
	Category: string;
	/**
	 * Content to be displayed for this tutorial when presented to the user in summary
	*/
	SummaryContent: TutorialContent;
	/**
	 * The various stages of this tutorial
	*/
	Stages: TutorialStage[];
	/**
	 * Tutorial to optionally chain back to if the "back" button is clicked on the first stage
	*/
	PreviousTutorial: StringClassReference;
	/**
	 * Tutorial to optionally chain onto after this tutorial completes
	*/
	NextTutorial: StringClassReference;
	/**
	 * A standalone tutorial displays no navigation buttons and each content widget has a close button
	*/
	bIsStandalone: boolean;
	/**
	 * Asset to open & attach the tutorial to. Non-widget-bound content will appear in the asset's window
	*/
	AssetToUse: StringAssetReference;
	/**
	 * The path this tutorial was imported from, if any.
	*/
	ImportPath: string;
	/**
	 * Hide this tutorial in the tutorials browser
	*/
	bHideInBrowser: boolean;
	/**
	 * Comma seperated list of tags the search will use to help find this tutorial
	*/
	SearchTags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static C(Other: UObject): EditorTutorial;
	/**
	 * Sets the visibility of the engine folder in the content browser
	*/
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	/**
	 * Open an asset for use by a tutorial
	 * @param       Asset   The asset to open
	*/
	static OpenAsset(Asset: UObject): void;
	/**
	 * Event fired when a tutorial stage begins
	*/
	OnTutorialStageStarted(StageName: string): void;
	/**
	 * Event fired when a tutorial stage ends
	*/
	OnTutorialStageEnded(StageName: string): void;
	/**
	 * Event fired when a tutorial is launched
	*/
	OnTutorialLaunched(): void;
	/**
	 * Event fired when a tutorial is closed
	*/
	OnTutorialClosed(): void;
	/**
	 * Advance to the previous stage of a tutorial
	*/
	static GoToPreviousTutorialStage(): void;
	/**
	 * Advance to the next stage of a tutorial
	*/
	static GoToNextTutorialStage(): void;
	/**
	 * Returns the visibility of the engine folder in the content browser
	*/
	static GetEngineFolderVisibilty(): boolean;
	/**
	 * Attempts to find the actor specified by PathToActor in the current editor world
	 * @param        PathToActor     The path to the actor (e.g. PersistentLevel.PlayerStart)
	 * @return       A reference to the actor, or none if it wasn't found
	*/
	GetActorReference(PathToActor: string): Actor;
	/**
	 * Begin a tutorial. Note that this will end the current tutorial that is in progress, if any
	*/
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
}

declare class EditorTutorialFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	/**
	 * Period-separated category name, e.g. "Editor Quickstart.Level Editor"
	*/
	Identifier: string;
	/**
	 * Title of the category
	*/
	Title: string;
	/**
	 * Sort order, used by the tutorial browser - set in editor game-agnostic INI file
	*/
	SortOrder: number;
	/**
	 * Localized text to use to describe this category
	*/
	Description: string;
	/**
	 * Icon for this tutorial, used when presented to the user in the tutorial browser. Only used if there isn't a valid texture to use.
	*/
	Icon: string;
	/**
	 * Texture for this tutorial, used when presented to the user in the tutorial browser.
	*/
	Texture: StringAssetReference;
}

declare class TutorialContext { 
	/**
	 * The context that this tutorial is used in
	*/
	Context: string;
	/**
	 * The filter string to apply to the tutorials browser when launched from this context
	*/
	BrowserFilter: string;
	/**
	 * The tutorial to use in this context to let the user know there is a tutorial available
	*/
	AttractTutorial: StringClassReference;
	/**
	 * The tutorial to use in this context when the user chooses to launch
	*/
	LaunchTutorial: StringClassReference;
}

declare class EditorTutorialSettings extends UObject { 
	/**
	 * Disable the pulsing alert that indicates a new tutorial is available.
	*/
	bDisableAllTutorialAlerts: boolean;
	/**
	 * Categories for tutorials
	*/
	Categories: TutorialCategory[];
	/**
	 * Tutorial to start on Editor startup
	*/
	StartupTutorial: StringClassReference;
	/**
	 * Tutorials used in various contexts - e.g. the various asset editors
	*/
	TutorialContexts: TutorialContext[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	/**
	 * Categories for tutorials
	*/
	Categories: TutorialCategory[];
	/**
	 * Tutorial to start on project startup
	*/
	StartupTutorial: StringClassReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject): TutorialSettings;
}

declare class TutorialProgress { 
	/**
	 * Tutorial
	*/
	Tutorial: StringClassReference;
	/**
	 * Current Stage
	*/
	CurrentStage: number;
	/**
	 * User Dismissed
	*/
	bUserDismissed: boolean;
}

declare class TutorialStateSettings extends UObject { 
	/**
	 * Tutorials Progress
	*/
	TutorialsProgress: TutorialProgress[];
	/**
	 * Record if user has chosen to cancel all tutorials
	*/
	bDismissedAllTutorials: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialStateSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialStateSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject): TutorialStateSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	/**
	 * Whether to show trivial logs, i.e. the ones with only one entry.
	*/
	bEnableGraphsVisualization: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	/**
	 * Category Name
	*/
	CategoryName: string;
	/**
	 * Log Verbosity
	*/
	LogVerbosity: number;
	/**
	 * Enabled
	*/
	Enabled: boolean;
}

declare class VisualLoggerFilters { 
	/**
	 * Search Box Filter
	*/
	SearchBoxFilter: string;
	/**
	 * Object Name Filter
	*/
	ObjectNameFilter: string;
	/**
	 * Categories
	*/
	Categories: CategoryFilter[];
	/**
	 * Selected Classes
	*/
	SelectedClasses: string[];
}

declare class LogVisualizerSettings extends UObject { 
	/**
	 * Whether to show trivial logs, i.e. the ones with only one entry.
	*/
	bIgnoreTrivialLogs: boolean;
	/**
	 * Threshold for trivial Logs
	*/
	TrivialLogsThreshold: number;
	/**
	 * Whether to show the recent data or not. Property disabled for now.
	*/
	bStickToRecentData: boolean;
	/**
	 * Whether to reset current data or not for each new session.
	*/
	bResetDataWithNewSession: boolean;
	/**
	 * Whether to show histogram labels inside graph or outside. Property disabled for now.
	*/
	bShowHistogramLabelsOutside: boolean;
	/**
	 * Camera distance used to setup location during reaction on log item double click
	*/
	DefaultCameraDistance: number;
	/**
	 * Whether to search/filter categories or to get text vlogs into account too
	*/
	bSearchInsideLogs: boolean;
	/**
	 * Background color for 2d graphs visualization
	*/
	GraphsBackgroundColor: Color;
	/**
	 * Whether to store all filter settings on exit
	*/
	bPresistentFilters: boolean;
	/**
	 * Whether to extreme values on graph (data has to be provided for extreme values)
	*/
	bDrawExtremesOnGraphs: boolean;
	/**
	 * Whether to use PlayersOnly during Pause or not
	*/
	bUsePlayersOnlyForPause: boolean;
	/**
	 * Whether to dump Navigation Octree on Stop recording or not
	*/
	bLogNavOctreeOnStop: boolean;
	/**
	 * Presistent Filters
	*/
	PresistentFilters: VisualLoggerFilters;
	/**
	 * A material used to render debug meshes with kind of flat shading, mostly used by Visual Logger tool.
	*/
	DebugMeshMaterialFakeLight: Material;
	/**
	 * @todo document
	*/
	DebugMeshMaterialFakeLightName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogVisualizerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogVisualizerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	/**
	 * Picked Actor
	*/
	PickedActor: Actor;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerCameraController;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerHUD;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActor extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject): VisualLoggerRenderingComponent;
}

declare class GeomModifier extends UObject { 
	/**
	 * A human readable name for this modifier (appears on buttons, menus, etc)
	*/
	Description: string;
	/**
	 * The tooltip to be displayed for this modifier
	*/
	Tooltip: string;
	/**
	 * If true, this modifier should be displayed as a push button instead of a radio button
	*/
	bPushButton: boolean;
	/**
	 * true if the modifier has been initialized.
	 * This is useful for interpreting user input and mouse drags correctly.
	*/
	bInitialized: boolean;
	/**
	 * Stored state of polys in case the brush state needs to be restroed
	*/
	CachedPolys: Polys;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier;
	static C(Other: UObject): GeomModifier;
}

declare class GeomModifier_Edit extends GeomModifier { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Edit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Edit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Edit;
	static C(Other: UObject): GeomModifier_Edit;
}

declare class GeomModifier_Clip extends GeomModifier_Edit { 
	/**
	 * Flip Normal
	*/
	bFlipNormal: boolean;
	/**
	 * Split
	*/
	bSplit: boolean;
	/**
	 * The clip markers that the user has dropped down in the world so far.
	*/
	ClipMarkers: Vector[];
	/**
	 * The mouse position, in world space, where the user currently is hovering.
	*/
	SnappedMouseWorldSpacePos: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Clip;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Clip;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Clip;
	static C(Other: UObject): GeomModifier_Clip;
}

declare class GeomModifier_Create extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Create;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Create;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Create;
	static C(Other: UObject): GeomModifier_Create;
}

declare class GeomModifier_Delete extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Delete;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Delete;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Delete;
	static C(Other: UObject): GeomModifier_Delete;
}

declare class GeomModifier_Extrude extends GeomModifier_Edit { 
	/**
	 * Length
	*/
	Length: number;
	/**
	 * Segments
	*/
	Segments: number;
	/**
	 * Save Coord System
	*/
	SaveCoordSystem: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Extrude;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Extrude;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Extrude;
	static C(Other: UObject): GeomModifier_Extrude;
}

declare class GeomModifier_Flip extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Flip;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Flip;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Flip;
	static C(Other: UObject): GeomModifier_Flip;
}

declare class GeomModifier_Lathe extends GeomModifier_Edit { 
	/**
	 * Total Segments
	*/
	TotalSegments: number;
	/**
	 * Segments
	*/
	Segments: number;
	/**
	 * Align to Side
	*/
	AlignToSide: boolean;
	/**
	 * The axis of rotation to use when creating the brush.  This is automatically determined from the current ortho viewport.
	*/
	Axis: EAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Lathe;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Lathe;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Lathe;
	static C(Other: UObject): GeomModifier_Lathe;
}

declare class GeomModifier_Pen extends GeomModifier_Edit { 
	/**
	 * If true, the shape will be automatically extruded into a brush upon completion.
	*/
	bAutoExtrude: boolean;
	/**
	 * If true, the tool will try and optimize the resulting triangles into convex polygons before creating the brush.
	*/
	bCreateConvexPolygons: boolean;
	/**
	 * If true, the resulting shape will be turned into an ABrushShape actor.
	*/
	bCreateBrushShape: boolean;
	/**
	 * How far to extrude the newly created brush if bAutoExtrude is set to true.
	*/
	ExtrudeDepth: number;
	/**
	 * The vertices that the user has dropped down in the world so far.
	*/
	ShapeVertices: Vector[];
	/**
	 * The mouse position, in world space, where the user currently is hovering (snapped to grid if that setting is enabled).
	*/
	MouseWorldSpacePos: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Pen;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Pen;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Pen;
	static C(Other: UObject): GeomModifier_Pen;
}

declare class GeomModifier_Split extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Split;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Split;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Split;
	static C(Other: UObject): GeomModifier_Split;
}

declare class GeomModifier_Triangulate extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Triangulate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Triangulate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Triangulate;
	static C(Other: UObject): GeomModifier_Triangulate;
}

declare class GeomModifier_Optimize extends GeomModifier_Triangulate { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Optimize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Optimize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Optimize;
	static C(Other: UObject): GeomModifier_Optimize;
}

declare class GeomModifier_Turn extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Turn;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Turn;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Turn;
	static C(Other: UObject): GeomModifier_Turn;
}

declare class GeomModifier_Weld extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Weld;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Weld;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Weld;
	static C(Other: UObject): GeomModifier_Weld;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryLandscape;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryLandscape;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = string;
declare type ELandscapeToolErosionMode = string;
declare type ELandscapeToolHydroErosionMode = string;
declare type ELandscapeToolNoiseMode = string;
declare type ELandscapeToolPasteMode = string;
declare class GizmoImportLayer { 
	/**
	 * Layer Filename
	*/
	LayerFilename: string;
	/**
	 * Layer Name
	*/
	LayerName: string;
	/**
	 * No Import
	*/
	bNoImport: boolean;
}

declare type ELandscapeMirrorOperation = string;
declare type ELandscapeConvertMode = string;
declare type ELandscapeImportHeightmapError = string;
declare class LandscapeImportLayerInfo { 
	/**
	 * Layer Name
	*/
	LayerName: string;
	/**
	 * Layer Info
	*/
	LayerInfo: LandscapeLayerInfoObject;
	/**
	 * Thumbnail MIC
	*/
	ThumbnailMIC: MaterialInstanceConstant;
	/**
	 * Optional
	*/
	SourceFilePath: string;
}

declare type ELandscapeImportLayerError = string;
declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	/**
	 * Import Error
	*/
	ImportError: ELandscapeImportLayerError;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	/**
	 * Origin
	*/
	Origin: Vector2D;
	/**
	 * Rotation
	*/
	Rotation: number;
	/**
	 * if true, the texture used for the pattern is centered on the PatternOrigin.
	 * if false, the corner of the texture is placed at the PatternOrigin
	*/
	bCenterTextureOnOrigin: boolean;
	/**
	 * Repeat Size
	*/
	RepeatSize: number;
}

declare type EColorChannel = string;
declare class LandscapeEditorObject extends UObject { 
	/**
	 * Strength of the tool. If you're using a pen/tablet with pressure-sensing, the pressure used affects the strength of the tool.
	*/
	ToolStrength: number;
	/**
	 * Enable to make tools blend towards a target value
	*/
	bUseWeightTargetValue: boolean;
	/**
	 * Enable to make tools blend towards a target value
	*/
	WeightTargetValue: number;
	/**
	 * I have no idea what this is for but it's used by the noise and erosion tools, and isn't exposed to the UI
	*/
	MaximumValueRadius: number;
	/**
	 * Whether to flatten by lowering, raising, or both
	*/
	FlattenMode: ELandscapeToolFlattenMode;
	/**
	 * Flattens to the angle of the clicked point, instead of horizontal
	*/
	bUseSlopeFlatten: boolean;
	/**
	 * Constantly picks new values to flatten towards when dragging around, instead of only using the first clicked point
	*/
	bPickValuePerApply: boolean;
	/**
	 * Enable to flatten towards a target height
	*/
	bUseFlattenTarget: boolean;
	/**
	 * Target height to flatten towards (in Unreal Units)
	*/
	FlattenTarget: number;
	/**
	 * Whether to show the preview grid for the flatten target height
	*/
	bShowFlattenTargetPreview: boolean;
	/**
	 * Width of ramp
	*/
	RampWidth: number;
	/**
	 * Falloff on side of ramp
	*/
	RampSideFalloff: number;
	/**
	 * The radius smoothing is performed over
	 * Higher values smooth out bigger details, lower values only smooth out smaller details
	*/
	SmoothFilterKernelSize: number;
	/**
	 * If checked, performs a detail preserving smooth using the specified detail smoothing value
	*/
	bDetailSmooth: boolean;
	/**
	 * Larger detail smoothing values remove more details, while smaller values preserve more details
	*/
	DetailScale: number;
	/**
	 * The minimum height difference necessary for the erosion effects to be applied. Smaller values will result in more erosion being applied
	*/
	ErodeThresh: number;
	/**
	 * The thickness of the surface for the layer weight erosion effect
	*/
	ErodeSurfaceThickness: number;
	/**
	 * Number of erosion iterations, more means more erosion but is slower
	*/
	ErodeIterationNum: number;
	/**
	 * Whether to erode by lowering, raising, or both
	*/
	ErosionNoiseMode: ELandscapeToolErosionMode;
	/**
	 * The size of the perlin noise filter used
	*/
	ErosionNoiseScale: number;
	/**
	 * The amount of rain to apply to the surface. Larger values will result in more erosion
	*/
	RainAmount: number;
	/**
	 * The amount of sediment that the water can carry. Larger values will result in more erosion
	*/
	SedimentCapacity: number;
	/**
	 * Number of erosion iterations, more means more erosion but is slower
	*/
	HErodeIterationNum: number;
	/**
	 * Initial Rain Distribution
	*/
	RainDistMode: ELandscapeToolHydroErosionMode;
	/**
	 * The size of the noise filter for applying initial rain to the surface
	*/
	RainDistScale: number;
	/**
	 * If checked, performs a detail-preserving smooth to the erosion effect using the specified detail smoothing value
	*/
	bHErosionDetailSmooth: boolean;
	/**
	 * Larger detail smoothing values remove more details, while smaller values preserve more details
	*/
	HErosionDetailScale: number;
	/**
	 * Whether to apply noise that raises, lowers, or both
	*/
	NoiseMode: ELandscapeToolNoiseMode;
	/**
	 * The size of the perlin noise filter used
	*/
	NoiseScale: number;
	/**
	 * Uses selected region as a mask for other tools
	*/
	bUseSelectedRegion: boolean;
	/**
	 * If enabled, protects the selected region from changes
	 * If disabled, only allows changes in the selected region
	*/
	bUseNegativeMask: boolean;
	/**
	 * Whether to paste will only raise, only lower, or both
	*/
	PasteMode: ELandscapeToolPasteMode;
	/**
	 * If set, copies/pastes all layers, otherwise only copy/pastes the layer selected in the targets panel
	*/
	bApplyToAllTargets: boolean;
	/**
	 * Makes sure the gizmo is snapped perfectly to the landscape so that the sample points line up, which makes copy/paste less blurry. Irrelevant if gizmo is scaled
	*/
	bSnapGizmo: boolean;
	/**
	 * Smooths the edges of the gizmo data into the landscape. Without this, the edges of the pasted data will be sharp
	*/
	bSmoothGizmoBrush: boolean;
	/**
	 * Gizmo Heightmap Filename String
	*/
	GizmoHeightmapFilenameString: string;
	/**
	 * Gizmo Import Size
	*/
	GizmoImportSize: IntPoint;
	/**
	 * Gizmo Import Layers
	*/
	GizmoImportLayers: GizmoImportLayer[];
	/**
	 * Location of the mirror plane, defaults to the center of the landscape. Doesn't normally need to be changed!
	*/
	MirrorPoint: Vector2D;
	/**
	 * Type of mirroring operation to perform e.g. "Minus X To Plus X" copies and flips the -X half of the landscape onto the +X half
	*/
	MirrorOp: ELandscapeMirrorOperation;
	/**
	 * Number of quads per landscape component section
	*/
	ResizeLandscape_QuadsPerSection: number;
	/**
	 * Number of sections per landscape component
	*/
	ResizeLandscape_SectionsPerComponent: number;
	/**
	 * Number of components in resulting landscape
	*/
	ResizeLandscape_ComponentCount: IntPoint;
	/**
	 * Determines how the new component size will be applied to the existing landscape geometry.
	*/
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	/**
	 * Material initially applied to the landscape. Setting a material here exposes properties for setting up layer info based on the landscape blend nodes in the material.
	*/
	NewLandscape_Material: any;
	/**
	 * The number of quads in a single landscape section. One section is the unit of LOD transition for landscape rendering.
	*/
	NewLandscape_QuadsPerSection: number;
	/**
	 * The number of sections in a single landscape component. This along with the section size determines the size of each landscape component. A component is the base unit of rendering and culling.
	*/
	NewLandscape_SectionsPerComponent: number;
	/**
	 * The number of components in the X and Y direction, determining the overall size of the landscape.
	*/
	NewLandscape_ComponentCount: IntPoint;
	/**
	 * The location of the new landscape
	*/
	NewLandscape_Location: Vector;
	/**
	 * The rotation of the new landscape
	*/
	NewLandscape_Rotation: Rotator;
	/**
	 * The scale of the new landscape. This is the distance between each vertex on the landscape, defaulting to 100 units.
	*/
	NewLandscape_Scale: Vector;
	/**
	 * Import Landscape Heightmap Error
	*/
	ImportLandscape_HeightmapError: ELandscapeImportHeightmapError;
	/**
	 * Specify a height map file in 16-bit RAW or PNG format
	*/
	ImportLandscape_HeightmapFilename: string;
	/**
	 * Import Landscape Width
	*/
	ImportLandscape_Width: number;
	/**
	 * Import Landscape Height
	*/
	ImportLandscape_Height: number;
	/**
	 * Import Landscape Data
	*/
	ImportLandscape_Data: any[];
	/**
	 * The landscape layers that will be created. Only layer names referenced in the material assigned above are shown here. Modify the material to add more layers.
	*/
	ImportLandscape_Layers: LandscapeImportLayer[];
	/**
	 * The radius of the brush, in unreal units
	*/
	BrushRadius: number;
	/**
	 * The falloff at the edge of the brush, as a fraction of the brush's size. 0 = no falloff, 1 = all falloff
	*/
	BrushFalloff: number;
	/**
	 * Selects the Clay Brush painting mode
	*/
	bUseClayBrush: boolean;
	/**
	 * Scale of the brush texture. A scale of 1.000 maps the brush texture to the landscape at a 1 pixel = 1 vertex size
	*/
	AlphaBrushScale: number;
	/**
	 * Rotate brush to follow mouse
	*/
	bAlphaBrushAutoRotate: boolean;
	/**
	 * Rotates the brush mask texture
	*/
	AlphaBrushRotation: number;
	/**
	 * Horizontally offsets the brush mask texture
	*/
	AlphaBrushPanU: number;
	/**
	 * Vertically offsets the brush mask texture
	*/
	AlphaBrushPanV: number;
	/**
	 * Use World Space Pattern Brush
	*/
	bUseWorldSpacePatternBrush: boolean;
	/**
	 * World Space Pattern Brush Settings
	*/
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	/**
	 * Mask texture to use
	*/
	AlphaTexture: Texture2D;
	/**
	 * Channel of Mask Texture to use
	*/
	AlphaTextureChannel: EColorChannel;
	/**
	 * Alpha Texture Size X
	*/
	AlphaTextureSizeX: number;
	/**
	 * Alpha Texture Size Y
	*/
	AlphaTextureSizeY: number;
	/**
	 * Alpha Texture Data
	*/
	AlphaTextureData: number[];
	/**
	 * Number of components X/Y to affect at once. 1 means 1x1, 2 means 2x2, etc
	*/
	BrushComponentSize: number;
	/**
	 * Limits painting to only the components that already have the selected layer
	*/
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LandscapeEditorObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapeEditorObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject): LandscapeEditorObject;
}

declare class LandscapePlaceholder extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapePlaceholder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject): LandscapePlaceholder;
}

declare class ActorFactoryProceduralFoliage extends ActorFactoryBoxVolume { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryProceduralFoliage;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryProceduralFoliage;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryProceduralFoliage;
	static C(Other: UObject): ActorFactoryProceduralFoliage;
}

declare class FoliageType_ISMThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FoliageType_ISMThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FoliageType_ISMThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_ISMThumbnailRenderer;
	static C(Other: UObject): FoliageType_ISMThumbnailRenderer;
}

declare class FoliageTypeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FoliageTypeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FoliageTypeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageTypeFactory;
	static C(Other: UObject): FoliageTypeFactory;
}

declare class LandscapeGrassTypeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LandscapeGrassTypeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapeGrassTypeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeGrassTypeFactory;
	static C(Other: UObject): LandscapeGrassTypeFactory;
}

declare class ProceduralFoliageSpawnerFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProceduralFoliageSpawnerFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProceduralFoliageSpawnerFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralFoliageSpawnerFactory;
	static C(Other: UObject): ProceduralFoliageSpawnerFactory;
}

declare class SceneOutlinerSettings extends UObject { 
	/**
	 * True when the Scene Outliner is hiding temporary/run-time Actors
	*/
	bHideTemporaryActors: boolean;
	/**
	 * True when the Scene Outliner is showing only Actors that exist in the current level
	*/
	bShowOnlyActorsInCurrentLevel: boolean;
	/**
	 * True when the Scene Outliner is only displaying selected Actors
	*/
	bShowOnlySelectedActors: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneOutlinerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneOutlinerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneOutlinerSettings;
	static C(Other: UObject): SceneOutlinerSettings;
}

declare class TRASHCLASS_DmgTypeBP_Environmental_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_DmgTypeBP_Environmental_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_DmgTypeBP_Environmental_0;
	static C(Other: UObject): TRASHCLASS_DmgTypeBP_Environmental_0;
}

declare class ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static C(Other: UObject): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptComponent;

declare var GWorld : World;

declare var GEngine : UnrealEdEngine;

