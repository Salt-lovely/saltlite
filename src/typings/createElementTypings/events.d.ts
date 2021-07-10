interface GlobalHTMLElemetEventProps {
  /** 下载取消事件 */
  onAbort?: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onAnimationCancel?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onAnimationEnd?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onAnimationIteration?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onAnimationStart?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onAuxClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 对象失去焦点事件 */
  onBlur?: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onCancel?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  onCanplay?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onCanplayThrough?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** 对象或选择区域内容变化事件 */
  onChange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** 点击事件 */
  onClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onClose?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  onContextMenu?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onCueChange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** 双击事件 */
  onDblClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  onDrag?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  onDragEnd?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  onDragEnter?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  onDragExit?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  onDragLeave?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  onDragOver?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  onDragStart?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  onDrop?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  onDurationChange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onEmptied?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onEnded?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** 加载资源出错事件 */
  onError?: OnErrorEventHandler;
  /** 元素获取焦点事件 */
  onFocus?: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onGotPointerCapture?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onInput?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onInvalid?: ((this: GlobalEventHandlers, ev: Event) => any) | null;

  // 键盘事件
  /** 按下键盘事件 */
  onKeyDown?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /** 完成键盘敲击事件 */
  onKeyPress?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /** 松开键盘事件 */
  onKeyUp?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;

  // 资源事件
  /** 资源加载事件 */
  onLoad?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onLoadedData?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onLoadedMetaData?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onLoadStart?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onLostPointerCapture?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;

  // 鼠标事件
  /** 鼠标按下事件 */
  onMouseDown?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标进入事件 */
  onMouseEnter?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标离开事件 */
  onMouseLeave?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标移动事件 */
  onMouseMove?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标进入事件 **鼠标进入子元素时也会触发, 不推荐使用** */
  onMouseOver?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标离开事件 **鼠标离开子元素时也会触发, 不推荐使用** */
  onMouseOut?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标松开事件 */
  onMouseUp?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onPause?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onPlay?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onPlaying?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onPointerCancel?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerDown?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerEnter?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerLeave?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerMove?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerOut?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerOver?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerUp?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onProgress?: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  /** 播放速度变化事件 */
  onRateChange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onReset?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onResize?: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onScroll?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSecurityPolicyViolation?: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onSeeked?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onSeeking?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onSelect?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSelectionChange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSelectStart?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onStalled?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSubmit?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onSuspend?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  onTimeupDate?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onToggle?: ((this: GlobalEventHandlers, ev: Event) => any) | null;

  // 触摸事件
  /** 触摸取消事件 */
  onTouchCancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  /** 触摸结束事件 */
  onTouchEnd?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  /** 手指移动事件 */
  onTouchMove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  /** 触摸开始事件 */
  onTouchStart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;

  onTransitionCancel?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  onTransitionEnd?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  onTransitionRun?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  onTransitionStart?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  /** 音量更改事件 */
  onVolumeChange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onWaiting?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onWheel?: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
}
