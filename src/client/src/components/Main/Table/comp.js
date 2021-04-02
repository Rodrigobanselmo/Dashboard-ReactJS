import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import InputSearch from '../../Dashboard/Components/Standard/Search';
import {Icons} from '../../Icons/iconsDashboard';
import {
  TableCellComponent,
  TableRowComponent,
  TextCell,
  HeadCellLabel,
  StatusComponent,
  FilterComponents,
  UserAvatar,
  GroupIcon,
  TextNameEmail,
  EmailSpan,
  ButtonContainer
} from './styles';
import Tabs from '../MuiHelpers/Tabs'
import {BootstrapTooltip} from '../MuiHelpers/Tooltip'
import Checkbox from '@material-ui/core/Checkbox';
import useTimeOut from '../../../hooks/useTimeOut';
import {NormalizeData} from '../../../helpers/DataHandler';


export default function TableTabs({children, tabsLabel, ...restProps }) {
  return (
      <Tabs tabsLabel={tabsLabel} {...restProps}>
      {children}
      </Tabs>
  );
}

export function FilterComponent(props) {


  const [onTimeOut,onClearTime] = useTimeOut()

  function onInputSearch(e) {
    if (props.setLoadContent) props.setLoadContent(true)
    onClearTime()
    if (props.setLoadContent) onTimeOut(()=>props.setLoadContent(false),1000)
    props.setSearch(e.target.value)
}

  return(
    <FilterComponents style={props?.style??{}}>
      <InputSearch icons={Icons} onInputSearch={onInputSearch} search={props.search} onCleanSearch={()=>props.setSearch('')}/>
      {props.children}
    </FilterComponents>
  )
}


TableTabs.Head = function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow style={{maxWidth:'300px'}}>
        {props.selected &&
          <TableCellComponent padding="checkbox">
              <Checkbox
                indeterminate={false}
                checked={props.rowCount > 0 && props.selected.length === props.rowCount}
                onChange={props.onSelectAllClick}
                color={'primary'}
                inputProps={{ 'aria-label': 'select all desserts' }}
                />
            </TableCellComponent>
          }
        {props.data.headCells.map((headCell) => (
          <TableCellComponent
            key={headCell.id}
            align={headCell.align ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <HeadCellLabel className={'noBreakText'} headCell={headCell.id}>{headCell.label}</HeadCellLabel>
            </TableSortLabel>
          </TableCellComponent>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableTabs.TableRows = function RowComponent(row, index,data,selected,handleClick,handleCellClick,styleCell) {

  const labelId = `enhanced-table-checkbox-${index}`;
  var dateStart = row?.creation  && row.creation  && row.creation !== 0 ? NormalizeData(new Date(row.creation),'normal') : 'Indisponível';
  var dateEnd = row?.end  && row.end  && row.end !== 0 ? NormalizeData(new Date(row.end),'normal') : 'Presente';

  const isItemSelected = selected ? selected.indexOf(row?.CNPJ ?? row?.cnpj ?? row?.id ) !== -1 : false;

  return (
    <TableRowComponent key={`${row[data.orderCells.id]}`}>
      {selected &&
        <TableCellComponent style={styleCell?{...styleCell}:{padding:'10px 0'}} padding="checkbox">
          <Checkbox
            checked={isItemSelected}
            onClick={(e)=>handleClick(e,row?.CNPJ ?? row?.id)}
            inputProps={{ 'aria-labelledby': labelId }}
            color={'primary'}
            />
        </TableCellComponent>
        }
        {data.orderCells.order.map((item,indexItem)=>{
          return(
            item.type ?
              (item.type === 'status' ?
                <StatusCell key={indexItem} onClick={(e)=>handleCellClick(e,row?.CNPJ ?? row?.cnpj ?? row?.id,row,index)} item={item} row={row} index={indexItem}/>
                :
                item.type === 'start/end' ?
                <NormalCell key={indexItem} onClick={(e)=>handleCellClick(e,row?.CNPJ ?? row?.cnpj ?? row?.id,row,index)} item={item} row={{creation:`${dateStart} - ${dateEnd}`}} index={indexItem}/>
                :
                <UserCell onClick={(e)=>handleCellClick(e,row?.CNPJ ?? row?.cnpj ?? row?.id,row,index)} labelId={labelId} row={row}/>
              )
              :
              <NormalCell key={indexItem} onClick={(e)=>handleCellClick(e,row?.CNPJ ?? row?.cnpj ?? row?.id,row,index)} item={item} row={row} index={indexItem}/>
          )
        })}
    </TableRowComponent>
  );
}

export function LoadingContent() {


  return (
    <div style={{margin:10,height:350}}>
      <LinearProgress />
    </div>
  );
}

export function AddUserButton({onClick, width=165,text='Nova Empresa',icon='Add',...restProps}) {

  return (
    <ButtonContainer onClick={onClick} width={width} className={'rowCenter'}  {...restProps}>
      <Icons style={{fontSize:24,marginRight:5}} type={icon}/>
      <p  className={'noBreakText'}>{text}</p>
    </ButtonContainer>
  )
}

function StatusCell({row,item,index,onClick}) {

  return (
    <TableCellComponent onClick={onClick}/* style={{width:40}} */ align="center" >
      <BootstrapTooltip /* placement="right" */  title={row.status} styletooltip={{transform: 'translateY(5px)'}}>
        <StatusComponent status={row.status} />
      </BootstrapTooltip>
    </TableCellComponent>
  )
}

function NormalCell({row,item,index,onClick}) {
  return (
    <TableCellComponent onClick={onClick} className='noBreakText' align="left">
      {row[item.name].length > 26 ?
        <BootstrapTooltip placement="bottom"  title={row[item.name]} styletooltip={{transform: 'translateY(5px)'}}>
          <TextCell style={{marginLeft:index==0?13:0,marginRight:20,maxWidth:200}}>
            {row[item.name]}
          </TextCell>
        </BootstrapTooltip>
        :
        <TextCell style={{marginLeft:index==0?13:0,marginRight:20,maxWidth:200}}>
          {row[item.name]}
        </TextCell>
      }
    </TableCellComponent>
  )
}

function UserCell({row,labelId,onClick}) {


  return (
    <TableCellComponent onClick={onClick} component="th" id={labelId} scope="row" padding="none">
      <UserContainer >
          <UserAvatar >
              <GroupIcon style={{fontSize:28}} type={row.image}/>
          </UserAvatar>
          <TextNameEmail >{row.name?row.name:'Aguardando...'}<br/>
          <EmailSpan >{row.email}</EmailSpan> </TextNameEmail>
      </UserContainer>
  </TableCellComponent>
  )
}
