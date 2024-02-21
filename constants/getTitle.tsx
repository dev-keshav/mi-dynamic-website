export const getTitle = (
    opt1: React.ReactNode,
    opt2: React.ReactNode,
    selectedTab: number
  ): React.ReactNode => {
    return selectedTab === 1 ? opt1 : opt2;
  };
  
  (getTitle as unknown) as { [key: string]: never };
  