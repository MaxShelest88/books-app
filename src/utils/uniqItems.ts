  export const uniqItems = (items: any[]) =>
      items?.length > 0
        ? items.reduce((uniq: any[], item: { id: any; }) => {
            const uniqItem = uniq.find((obj) => obj.id === item.id);
            if (uniqItem && uniq.includes(uniqItem)) {
              return uniq;
            } else {
              return [...uniq, item];
            }
          }, [])
        : [];