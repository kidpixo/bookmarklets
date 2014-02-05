// On chrome they work as they are.
// If it doesn't work for your browser, maybe could help to use:
// - An URI encoder > http://meyerweb.com/eric/tools/dencoder/ and 
// - The bookmarkleter > http://chriszarate.github.io/bookmarkleter/


// ddunlimited : preselected Prompt
// this popup a prompt with already selected text
// just copy with your shortcuts and Enter to close.

javascript:(function(){
  if(frames.length>1){alert('Sorry, frames detected.');}
  else
  {
    lnks = document.body.getElementsByTagName('a');
    filtered_lnks = '';
    with(document)
    {
        for(var i=0;i<lnks.length;i++)
        {
            if (lnks[i].href.indexOf('ed2k://') != -1)
            { filtered_lnks=filtered_lnks+lnks[i].href+'\n'; }
        }
    }
    window.prompt('Press CTRL+C, then ENTER',filtered_lnks); return false;
  }
})
()


// ddunlimited No-PopUP
//this erase the window and leaves only the ed2k links
// use this http://stackoverflow.com/a/2455480/1435167

javascript:(function(){
  if(frames.length>1){alert('Sorry, frames detected.');}
  else
  {
    lnks = document.body.getElementsByTagName('a');
    filtered_lnks = '';
    with(document)
    {
        for(var i=0;i<lnks.length;i++)
        {
            if (lnks[i].href.indexOf('ed2k://') != -1)
            { filtered_lnks=filtered_lnks+'<div>'+lnks[i].href+'</div>'; }
        }
    }
    document.head.innerHTML = '';
    document.body.innerHTML  = filtered_lnks;
  }
})
()




// ddunlimited with PopUP

javascript:(function(){
if(frames.length>1)
alert('Sorry, frames detected.');
else{
    wnd=open('','lnkswnd','width=1000,height=400,top=0,left=0,scrollbars,resizable');
    lnks= document.body.getElementsByTagName('a');
    with(wnd.document){
        writeln('<html>');
        for(var i=0;
        i<lnks.length;
        i++){
            if (lnks[i].href.indexOf('ed2k://') != -1)
            {
                writeln(lnks[i].href+'</br>');
            }
        }
        writeln('</html>');
        close();
    }
}
})()

// tntvillage

javascript:(function(){(
function tnt_savetorrent_scrollend_opentextarea(){
    document_links=document.links;
    for(index=0;index<document_links.length;index){
        if(document_links[index].toString().indexOf("act=Attach")>=0)
        {
        window.open(document_links[index].toString() '&target="_blank"','Download');
        index=document_links.length
        }
    }
    window.scrollTo(0,document.body.scrollHeight);
    ShowHide('qr_open','qr_closed');
})();
})();
