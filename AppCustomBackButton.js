function ScreenWithCustomBackBehavior() {
    // ...
  
    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          if (isSelectionModeEnabled()) {
            disableSelectionMode();
            return true;
          } else {
            return false;
          }
        };
  
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [isSelectionModeEnabled, disableSelectionMode])
    );
  
    // ...
  }