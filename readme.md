To reproduce:

1. Clone this repository
1. `npm i`
1. `npm run check`

Error in question:

```
> kysely-tsc-error@1.0.0 check
> tsc

src/countries.ts:7:27 - error TS2322: Type 'OnConflictUpdateBuilder<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>' is not assignable to type 'OnConflictDoNothingBuilder<DB, "countries"> | OnConflictUpdateBuilder<DB, "countries">'.
  Type 'OnConflictUpdateBuilder<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>' is not assignable to type 'OnConflictUpdateBuilder<DB, "countries">'.
    Types of property 'where' are incompatible.
      Type '{ <RE extends ReferenceExpression<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>>(lhs: RE, op: ComparisonOperatorExpression, rhs: OperandValueExpressionOrList<...>): OnConflictUpdateBuilder<...>; (factory: WhereExpressionFactory<...>): OnConflictUpdateBuilder<...>; (expression: Expression<...>):...' is not assignable to type '{ <RE extends ReferenceExpression<DB, "countries">>(lhs: RE, op: ComparisonOperatorExpression, rhs: OperandValueExpressionOrList<DB, "countries", RE>): OnConflictUpdateBuilder<...>; (factory: WhereExpressionFactory<...>): OnConflictUpdateBuilder<...>; (expression: Expression<...>): OnConflictUpdateBuilder<...>; }'.
        Types of parameters 'factory' and 'factory' are incompatible.
          Types of parameters 'eb' and 'eb' are incompatible.
            Type 'WhereExpressionBuilder<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>' is not assignable to type 'WhereExpressionBuilder<DB, "countries">'.
              Types of property 'where' are incompatible.
                Type '{ <RE extends ReferenceExpression<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>>(lhs: RE, op: ComparisonOperatorExpression, rhs: OperandValueExpressionOrList<...>): WhereExpressionBuilder<...>; (grouper: WhereExpressionBuilder<...>): WhereExpressionBuilder<...>; (expression: Expression<...>): W...' is not assignable to type '{ <RE extends ReferenceExpression<DB, "countries">>(lhs: RE, op: ComparisonOperatorExpression, rhs: OperandValueExpressionOrList<DB, "countries", RE>): WhereExpressionBuilder<...>; (grouper: WhereExpressionBuilder<...>): WhereExpressionBuilder<...>; (expression: Expression<...>): WhereExpressionBuilder<...>; }'.
                  Types of parameters 'grouper' and 'grouper' are incompatible.
                    Type 'WhereExpressionBuilder<DB, "countries">' is not assignable to type 'WhereExpressionBuilder<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>'.
                      Types of property 'whereRef' are incompatible.
                        Type '(lhs: ReferenceExpression<DB, "countries">, op: ComparisonOperatorExpression, rhs: ReferenceExpression<DB, "countries">) => WhereExpressionBuilder<...>' is not assignable to type '(lhs: ReferenceExpression<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>, op: ComparisonOperatorExpression, rhs: ReferenceExpression<...>) => WhereExpressionBuilder<...>'.
                          Types of parameters 'lhs' and 'lhs' are incompatible.
                            Type 'ReferenceExpression<OnConflictDatabase<DB, "countries">, OnConflictTables<"countries">>' is not assignable to type 'ReferenceExpression<DB, "countries">'.
                              Type '"excluded.id"' is not assignable to type 'ReferenceExpression<DB, "countries">'.

  7         .onConflict(oc => oc
                              ~~
  8             .column('id')
    ~~~~~~~~~~~~~~~~~~~~~~~~~
...
 10                 id: eb.ref('excluded.id')
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 11             }))
    ~~~~~~~~~~~~~~~

  node_modules/kysely/dist/esm/query-builder/insert-query-builder.d.ts:371:26
    371     onConflict(callback: (builder: OnConflictBuilder<DB, TB>) => OnConflictDoNothingBuilder<DB, TB> | OnConflictUpdateBuilder<DB, TB>): InsertQueryBuilder<DB, TB, O>;
                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    The expected type comes from the return type of this signature.


Found 1 error in src/countries.ts:7

```
